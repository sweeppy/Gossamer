namespace auth_service.Configuration.JWT
{
    public interface IJwtService
    {
        public string GenerateToken(string username, string email);
    }
}
