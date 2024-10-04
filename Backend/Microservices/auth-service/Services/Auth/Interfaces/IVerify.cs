using auth_service.Contracts;
using auth_service.Contracts.Verification;

namespace auth_service.Services.Auth.Interfaces
{
    public interface IVerify
    {
        public Task<VerificationCodeResponse> SendEmailConfirmation(string email);

        public Task<BaseResponse> VerifyCode(string email, string verificationCode);

        public Task<BaseResponse> LogInByPassword(string email, string password);

        public BaseResponse GoogleLogin();
    }
}
