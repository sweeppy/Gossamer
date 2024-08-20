using auth_service.Contracts;

namespace auth_service.Auth.Contracts
{
    public class AuthenticationResponse : BaseResponse
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
    }
}
