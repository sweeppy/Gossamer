using auth_service.Auth.Contracts;
using auth_service.Dto.Auth;

namespace auth_service.Services.Interfaces
{
    public interface IInitializeAccount
    {
        public Task<AuthenticationResponse> CreateAccount(RegisterUserRequest request);

        public Task InitializeUser(string email, string verificationCode);
    }
}
