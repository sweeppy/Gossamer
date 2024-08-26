namespace auth_service.Services.UserService
{
    public interface IUserService
    {
        public Task<bool> isUserExists(string email);
    }
}
