namespace auth_service.Configuration.GoogleOAuth
{
    public static class GoogleAuthentication
    {
        public static void AddGoogleAuthentication(this IServiceCollection services)
        {
            services.AddAuthentication().AddGoogle(googleOptions =>
            {
                googleOptions.ClientId = SD.Google_ClientId;
                googleOptions.ClientSecret = SD.Google_ClientSecret;
            });
        }
    }
}
