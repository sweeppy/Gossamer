using auth_service.Configuration;
using auth_service.Configuration.JWT;
using auth_service.Services.Implementations;
using auth_service.Services.Interfaces;
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

// Add user-secrets to project
builder.Configuration.AddUserSecrets<Program>();

// Initialize dependences in static details (SD) class
SD.Initialize(builder.Configuration);

// Dependency injection
builder.Services.AddScoped<UserDbContext>();

builder.Services.AddScoped<IJwtService, JwtService>();

builder.Services.AddScoped<IVerify, VerifyService>();

builder.Services.AddScoped<IInitializeAccount, InitializeAccount>();



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

app.UseAuthentication();

app.MapControllers();
app.Run();

