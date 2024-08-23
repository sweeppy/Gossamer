using auth_service.Entities;

namespace auth_service.Dto.Auth
{
    public record RegisterUserRequest(UserInfo userInfo, string password);
}
