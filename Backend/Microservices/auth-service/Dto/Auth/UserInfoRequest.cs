namespace auth_service.Dto.Auth
{
    public class UserInfoRequest
    {
        public string Username { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Patronymic { get; set; }
        public string Email { get; set; }
        
        public byte[] ProfileImagePath { get; set; }

    }
}
