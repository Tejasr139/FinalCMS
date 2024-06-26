using CMSproject26.Models;
using Microsoft.EntityFrameworkCore;

namespace CMSproject26.Repositories
{
    public class UserTypeMasterRepository : IUserTypeMasterRepository
    {
        private readonly ApplicationDbContext _context;

        public UserTypeMasterRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<UserTypeMaster>> GetAllAsync()
        {
            try
            {
                return await _context.UserTypeMasters.ToListAsync();
            }
            catch (Exception ex)
            {
                // Log the exception (implement logging as needed)
                throw new Exception("Error getting all user types", ex);
            }
        }

        public async Task<UserTypeMaster> GetByIdAsync(int id)
        {
            try
            {
                return await _context.UserTypeMasters.FindAsync(id);
            }
            catch (Exception ex)
            {
                // Log the exception (implement logging as needed)
                throw new Exception($"Error getting user type with id {id}", ex);
            }
        }

        public async Task<UserTypeMaster> AddAsync(UserTypeMaster userTypeMaster)
        {
            try
            {
                _context.UserTypeMasters.Add(userTypeMaster);
                await _context.SaveChangesAsync();
                return userTypeMaster;
            }
            catch (Exception ex)
            {
                // Log the exception (implement logging as needed)
                throw new Exception("Error adding user type", ex);
            }
        }

        public async Task<UserTypeMaster> UpdateAsync(UserTypeMaster userTypeMaster)
        {
            try
            {
                _context.Entry(userTypeMaster).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return userTypeMaster;
            }
            catch (Exception ex)
            {
                // Log the exception (implement logging as needed)
                throw new Exception("Error updating user type", ex);
            }
        }

        public async Task<UserTypeMaster> DeleteAsync(int id)
        {
            try
            {
                var userTypeMaster = await _context.UserTypeMasters.FindAsync(id);
                if (userTypeMaster == null)
                {
                    throw new KeyNotFoundException("User type not found");
                }

                _context.UserTypeMasters.Remove(userTypeMaster);
                await _context.SaveChangesAsync();
                return userTypeMaster;
            }
            catch (Exception ex)
            {
                // Log the exception (implement logging as needed)
                throw new Exception("Error deleting user type", ex);
            }
        }
    }
}
