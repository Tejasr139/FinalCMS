using Microsoft.EntityFrameworkCore;

namespace CMSproject26.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<UserTypeMaster> UserTypeMasters { get; set; }
        public DbSet<UserMaster> UserMasters { get; set; }
        public DbSet<ContentMaster> ContentMasters { get; set; }
    }
}
