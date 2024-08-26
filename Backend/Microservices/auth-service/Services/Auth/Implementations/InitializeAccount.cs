using auth_service.Auth.Contracts;
using auth_service.Dto.Auth;
using auth_service.Hash;
using auth_service.Services.Auth.Interfaces;
using auth_service.src.Data;
using auth_service.src.Models;

namespace auth_service.Services.Auth.Implementations
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

        public async Task InitializeUser(string email, string verificationCode)
        {
            var hashedCode = Hasher.Hash(verificationCode);
            User user = new User
            {
                Email = email,
                EmailConfirmed = false,
                VerificationCode = hashedCode
            };
            _db.Users.Add(user);
            await _db.SaveChangesAsync();
        }

    }
}
