using auth_service.Configuration;
using auth_service.Configuration.JWT;
using auth_service.Services.Implementations;
using auth_service.Services.Interfaces;
using auth_service.src.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();

// Add JWT authentication
CustomJwtConfiguration.AddCustomJwtAuthentication(builder.Services, builder.Configuration);

// Add user-secrets to project
builder.Configuration.AddUserSecrets<Program>();

// Initialize dependences in static details (SD) class
SD.Initialize(builder.Configuration);

// Dependences
builder.Services.AddScoped<UserDbContext>();

builder.Services.AddScoped<IJwtService, JwtService>();

builder.Services.AddScoped<IAuthService, AuthService>();



var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthentication();

app.Run();

