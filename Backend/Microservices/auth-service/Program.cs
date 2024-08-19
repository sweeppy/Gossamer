using auth_service.Configuration.JWT;
using auth_service.src.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();

// Add JWT authentication
CustomJwtConfiguration.AddCustomJwtAuthentication(builder.Services, builder.Configuration);

// Dependences
builder.Services.AddScoped<UserDbContext>();

builder.Services.AddScoped<IJwtService, JwtService>();



var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthentication();

app.Run();

