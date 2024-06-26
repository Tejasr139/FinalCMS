using CMSproject26.DTO;
using CMSproject26.Models;
using Microsoft.EntityFrameworkCore;

namespace CMSproject26.Repositories
{
    public class LoginRepository : ILoginRepository
    {
        private readonly ApplicationDbContext _context;

        public LoginRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> ValidateUser(LoginDTO loginDTO)
        {
            // Implementation of the ValidateUser method
            var user = await _context.UserMasters
               .Where(u => u.Email == loginDTO.Email && u.Password == loginDTO.Password)
               .FirstOrDefaultAsync();

            return user != null;
        }
    }
}
