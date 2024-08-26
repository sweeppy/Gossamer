
using auth_service.src.Data;

namespace auth_service.Services.UserService
{
    public class UserService : IUserService
    {
        private readonly UserDbContext _db;

        public UserService(UserDbContext db)
        {
            _db = db;
        }

        public Task<bool> isUserExists(string email)
        {
            if (_db.Users.Any(u => u.Email == email))
            {
                return Task.FromResult(true);
            }
            return Task.FromResult(false);
        }
    }
}
