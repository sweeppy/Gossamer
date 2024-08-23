using auth_service.Contracts;
using auth_service.Contracts.Verification;

namespace auth_service.Services.Interfaces
{
    public interface IVerify
    {
        public Task<VerificationCodeResponse> SendEmailConfirmation(string email);

        public Task<BaseResponse> VerifyCode(string email, int verificationCode);
    }
}
