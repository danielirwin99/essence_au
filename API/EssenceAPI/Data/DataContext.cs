using System.ComponentModel;
using EssenceAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EssenceAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=sneakerdb;Trusted_Connection=true;TrustServerCertificate=true;");
        }

        public DbSet<Sneaker> Sneakers { get; set; }
    }
}