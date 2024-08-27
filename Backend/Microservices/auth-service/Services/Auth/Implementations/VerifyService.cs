using System.Net;
using System.Net.Mail;
using auth_service.Configuration;
using auth_service.Contracts;
using auth_service.Contracts.Verification;
using auth_service.Hash;
using auth_service.Services.Auth.Interfaces;
using auth_service.src.Data;
using auth_service.src.Models;
using auth_service.Validations;
using Microsoft.EntityFrameworkCore;

namespace auth_service.Services.Auth.Implementations
{
    public class VerifyService : IVerify
    {
        private readonly ILogger<VerifyService> _logger;

        private readonly UserDbContext _db;

        public VerifyService(ILogger<VerifyService> VerifyServiceLogger, UserDbContext db)
        {
            _logger = VerifyServiceLogger;
            _db = db;
        }

        public async Task<BaseResponse> LogInByPassword(string email, string password)
        {
            User user;
            try
            {
                user = await _db.Users.FirstAsync(u => u.Email == email);
            }
            catch (InvalidOperationException ex)
            {
                _logger.LogError($"Incorrect email: {ex.Message}; \n Wrong email:{email}");
                return new BaseResponse { IsSuccess = false};
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"Db expction in IVerify: {ex.Message}");
                return new BaseResponse { IsSuccess = false};
            }
            bool isPasswordCorrect = Hasher.VerifyHash(password, user.Password);
            switch (isPasswordCorrect)  
            {
                case true:
                    return new BaseResponse { IsSuccess = isPasswordCorrect, ResponseMessage="Welcome back!" };
                case false:
                    return new BaseResponse { IsSuccess = isPasswordCorrect, ResponseMessage="Wrong password."};
            }
        }

        public async Task<VerificationCodeResponse> SendEmailConfirmation(string email)
        {
            // Check email validation
            if (!EmailValidation.ValidateEmail(email))
            {
                return new VerificationCodeResponse 
                { 
                    IsSuccess = false,
                    ResponseMessage = "Invalid email.",
                    VerificationCode=null
                };
            }

            // Create Smptp client
            using (var client = new SmtpClient("smtp.gmail.com", 587))
            {
                client.Credentials = new NetworkCredential(SD.WorkEmail, SD.WorkPassword);
                client.EnableSsl = true;

                string verificationCode = GenerateVerificationCode();

                var message = new MailMessage
                {
                    From = new MailAddress(SD.WorkEmail),
                    Subject = "Gossamer",
                    IsBodyHtml = true,
                    Body = $"Your verification code is: {verificationCode}"
                };
                message.To.Add(new MailAddress(email));

                // Send verification code to the user email
                try
                {
                    await client.SendMailAsync(message);
                    return new VerificationCodeResponse { IsSuccess = true, VerificationCode = verificationCode };
                }
                catch (Exception ex)
                {
                    _logger.LogCritical($"Error while sending email: {ex.Message}");
                    throw;
                }
            }
        }

        public async Task<BaseResponse> VerifyCode(string email, string verificationCode)
        {
            User user;
            try
            {
                user = await _db.Users.FirstAsync(u => u.Email == email);
            }
            catch (InvalidOperationException ex)
            {
                _logger.LogError($"Incorrect email: {ex.Message}; \n Wrong email:{email}");
                return new BaseResponse { IsSuccess = false, ResponseMessage="Incorrect email"};
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"Db expction in IVerify: {ex.Message}");
                return new BaseResponse { IsSuccess = false, ResponseMessage="Something went wrong"};
            }
            if (!Hasher.VerifyHash(verificationCode, user.VerificationCode))
            {
                return new BaseResponse {IsSuccess = false, ResponseMessage="Wrong code."};
            }
            user.EmailConfirmed = true;
            await _db.SaveChangesAsync();
            return new BaseResponse {IsSuccess = true, ResponseMessage="Correct code."};
        }

        private string GenerateVerificationCode()
        {
            Random random = new Random();
            return random.Next(0, 999999).ToString("D6");
        }
    }
}
