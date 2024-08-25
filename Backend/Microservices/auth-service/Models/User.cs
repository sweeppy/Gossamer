
using auth_service.Entities;

namespace auth_service.src.Models
{
    public class User: UserInfo
    {
        public Guid Id { get; set; }
        public required string Email { get; set; }
        public string? VerificationCode { get; set; }
        public required bool EmailConfirmed { get; set; }
        public string? Password { get; set; }
    }
}
