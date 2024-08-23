using auth_service.Auth.Contracts;
using auth_service.Dto.Auth;
using auth_service.Services.Interfaces;
using auth_service.src.Data;
using auth_service.src.Models;

namespace auth_service.Services.Implementations
{
    public class InitializeAccount : IInitializeAccount
    {
        private readonly UserDbContext _db;

        public InitializeAccount(UserDbContext db)
        {
            _db = db;
        }

        public async Task<AuthenticationResponse> CreateAccount(RegisterUserRequest request)
        {
            throw new NotImplementedException();
        }

        public async Task InitializeUser(string email)
        {
            User user = new User
            {
                Email = email,
                EmailConfirmed = false
            };
            _db.Users.Add(user);
        }
        public async Task InitializeUser(int verificationCode, string email)
        {
            User user = new User
            {
                Email = email,
                VerificationCode = verificationCode,
                EmailConfirmed = false
            };
            _db.Users.Add(user);
        }

    }
}
