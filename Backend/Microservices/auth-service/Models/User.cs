
using auth_service.Entities;

namespace auth_service.src.Models
{
    public class User: UserInfo
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public byte VerificationCode { get; set; }
        public bool EmailConfirmed { get; set; }
        public string? Password { get; set; }
    }
}
