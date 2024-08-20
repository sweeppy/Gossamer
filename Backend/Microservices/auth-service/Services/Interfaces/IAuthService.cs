using auth_service.Auth.Contracts;
using auth_service.Requests.Auth;

namespace auth_service.Services.Interfaces
{
    public interface IAuthService
    {
        public Task<AuthenticationResponse> Register(RegisterUserRequest request);
    }
}
