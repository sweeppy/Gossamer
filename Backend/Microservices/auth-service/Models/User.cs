
namespace auth_service.src.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string? Username { get; set; }
        public string? Name {get; set; }
        public string? Surname { get; set; }
        public string? Patronymic { get; set; }
        public byte[]? ProfileImagePath {get; set; }

        public string? Email {get; set; }
        public byte EmailConfirmed { get; set; }
        public string? Password { get; set; }
    }
}
