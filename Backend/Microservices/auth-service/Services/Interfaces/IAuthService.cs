using auth_service.Auth.Contracts;
using auth_service.Contracts;
using auth_service.Dto.Auth;

namespace auth_service.Services.Interfaces
{
    public interface IAuthService
    {
        public Task<AuthenticationResponse> CreateAccount(RegisterUserRequest request);
    }
}
