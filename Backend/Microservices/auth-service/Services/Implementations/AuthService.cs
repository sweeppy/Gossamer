using auth_service.Auth.Contracts;
using auth_service.Contracts;
using auth_service.Dto.Auth;
using auth_service.Services.Interfaces;
using auth_service.Validations;

namespace auth_service.Services.Implementations
{
    public class AuthService : IAuthService, IEmailService
    {

        public Task<AuthenticationResponse> CreateAccount(RegisterUserRequest userRequest)
        {
            throw new NotImplementedException();
        }

        public string GenerateVerificationCode()
        {
            Random random = new Random();
            return random.Next(0, 999999).ToString("D6");
        }

        public async Task<BaseResponse> SendEmailConfirmation(string email, string verificationCode)
        {
            throw new NotImplementedException();
        }
    }
}
