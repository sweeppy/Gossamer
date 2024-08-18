
using auth_service.src.Models;
using Microsoft.EntityFrameworkCore;


namespace auth_service.src.Data
{
    public class UserDbContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public UserDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_configuration.GetConnectionString("UserConnection"));
        }

        public DbSet<User> Users { get; set; }
    }
}
