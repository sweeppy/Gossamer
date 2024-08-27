namespace auth_service.Services.JWT
{
    public interface IJwtService
    {
        public string GenerateToken(string email);
    }
}
