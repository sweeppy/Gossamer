using auth_service.Contracts;

namespace auth_service.Services.Interfaces
{
    public interface IEmailService
    {
        public Task<BaseResponse> SendEmailConfirmation(string email, string verificationCode);
        public string GenerateVerificationCode();
    }
}
