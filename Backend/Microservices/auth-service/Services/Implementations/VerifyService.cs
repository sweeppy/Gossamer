using System.Net;
using System.Net.Mail;
using auth_service.Configuration;
using auth_service.Contracts;
using auth_service.Contracts.Verification;
using auth_service.Hash;
using auth_service.Services.Interfaces;
using auth_service.src.Data;
using auth_service.src.Models;
using auth_service.Validations;
using Microsoft.EntityFrameworkCore;

namespace auth_service.Services.Implementations
{
    public class VerifyService : IVerify
    {
        private readonly ILogger<VerifyService> _VerifyServiceLogger;

        private readonly UserDbContext _db;

        public VerifyService(ILogger<VerifyService> VerifyServiceLogger, UserDbContext db)
        {
            _VerifyServiceLogger = VerifyServiceLogger;
            _db = db;
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
                    client.Send(message);
                    return new VerificationCodeResponse { IsSuccess = true, VerificationCode = verificationCode };
                }
                catch (Exception ex)
                {
                    _VerifyServiceLogger.LogCritical($"Error while sending email: {ex.Message}");
                    throw;
                }
            }
        }

        public async Task<BaseResponse> VerifyCode(string email, string verificationCode)
        {
            User user = await _db.Users.FirstAsync(u => u.Email == email);
            if (user == null)
            {
                return new BaseResponse { IsSuccess = false, ResponseMessage = "User is not found" }; 
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
