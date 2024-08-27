using auth_service.Configuration;
using auth_service.Configuration.GoogleOAuth;
using auth_service.Configuration.JWT;
using auth_service.Services.Auth.Implementations;
using auth_service.Services.Auth.Interfaces;
using auth_service.Services.UserService;
using auth_service.src.Data;
using Microsoft.OpenApi.Models;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Gossamer API", Version = "v1" });
});

// Add JWT authentication
CustomJwtConfiguration.AddCustomJwtAuthentication(builder.Services, builder.Configuration);
// Add Google OAuth 2.0 authentication
GoogleAuthentication.AddGoogleAuthentication(builder.Services);

// Add user-secrets to project
builder.Configuration.AddUserSecrets<Program>();

// Initialize fields in static details (SD) class
SD.Initialize(builder.Configuration);

// Dependency injection
builder.Services.AddScoped<UserDbContext>();

builder.Services.AddScoped<IJwtService, JwtService>();

builder.Services.AddScoped<IVerify, VerifyService>();

builder.Services.AddScoped<IInitializeAccount, InitializeAccount>();

builder.Services.AddScoped<IUserService, UserService>();

// Add Cors
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(options =>
    {
        options.WithOrigins("http://localhost:5173")
            .SetIsOriginAllowedToAllowWildcardSubdomains()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Gossamer API V1");
    });
}

app.UseRouting();

app.UseCors();

app.UseAuthentication();

app.MapControllers();
app.Run();

