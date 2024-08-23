namespace auth_service.Entities
{
    public class UserInfo
    {
        public string? Username { get; set; }
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public string? Patronymic { get; set; }
        public byte[]? ProfileImagePath { get; set; }
    }
}
