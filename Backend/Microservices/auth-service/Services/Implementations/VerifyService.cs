using System.Net;
using System.Net.Mail;
using auth_service.Configuration;
using auth_service.Contracts;
using auth_service.Contracts.Verification;
using auth_service.CustomExceptions;
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
            var client = new SmtpClient("smtp.gmail.com", 587)
            {
                EnableSsl = true,
                Credentials = new NetworkCredential(SD.WorkEmail, SD.WorkPassword)
            };
            // Initialize message
            string verificationCode = GenerateVerificationCode();
            var message = new MailMessage(
                from: SD.WorkEmail,
                to: email,
                subject: "Gossamer verification code",
                verificationCode
            );

            // Send verification code on user email
            try
            {
                await client.SendMailAsync(message);
                return new VerificationCodeResponse 
                {
                    IsSuccess = true,
                    ResponseMessage = "Verirification code was sent successfully.",
                    VerificationCode=verificationCode
                };
            }
            catch (Exception ex)
            {
                _VerifyServiceLogger.LogCritical($"Error while sending email: {ex.Message}");
                throw;
            }
        }

        public async Task<BaseResponse> VerifyCode(string email, int verificationCode)
        {
            User user = await _db.Users.FirstAsync(u => u.Email == email);
            if (user.VerificationCode == verificationCode)
            {
                return new BaseResponse {IsSuccess = true, ResponseMessage="Correct code."};
            }
            else return new BaseResponse {IsSuccess = false, ResponseMessage="Wrong code."};
        }

        private string GenerateVerificationCode()
        {
            Random random = new Random();
            return random.Next(0, 999999).ToString("D6");
        }
    }
}
