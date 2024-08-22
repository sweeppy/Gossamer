namespace auth_service.Dto.Auth
{
    public record RegisterUserRequest(UserInfoRequest userInfo, string password);
}
