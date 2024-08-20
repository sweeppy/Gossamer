using auth_service.Auth.Contracts;
using auth_service.Requests.Auth;
using auth_service.Services.Interfaces;

namespace auth_service.Services.Implementations
{
    public class AuthService : IAuthService
    {
        public Task<AuthenticationResponse> Register(RegisterUserRequest userRequest)
        {
            throw new NotImplementedException();
        }
    }
}
