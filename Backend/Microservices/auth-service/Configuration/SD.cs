namespace auth_service.Configuration
{
    public static class SD // Static details
    {
        private static IConfiguration _configuration;

        public static string WorkEmail { get; private set; }
        public static string WorkPassword { get; private set; }


        // Метод для инициализации конфигурации
        public static void Initialize(IConfiguration configuration)
        {
            _configuration = configuration;
            WorkEmail = _configuration["EmailAddress"];
            WorkPassword = _configuration["EmailPassword"];
        }
    }
}
