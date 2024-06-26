using CMSproject26.Models;
using Microsoft.EntityFrameworkCore;

namespace CMSproject26.Repositories
{
    public class ContentMasterRepository : IContentMasterRepository
    {
        private readonly ApplicationDbContext _context;

        public ContentMasterRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ContentMaster>> GetAllAsync()
        {
            try
            {
                return await (from c in _context.ContentMasters
                              select c).ToListAsync();
            }
            catch (Exception ex)
            {
                // Log the exception (implement logging as needed)
                throw new Exception("Error getting all content", ex);
            }
        }

        public async Task<ContentMaster> GetByIdAsync(int id)
        {
            try
            {
                var contentMaster = await (from c in _context.ContentMasters
                                           where c.Id == id
                                           select c).FirstOrDefaultAsync();
                if (contentMaster == null)
                {
                    throw new KeyNotFoundException("Content not found");
                }
                return contentMaster;
            }
            catch (Exception ex)
            {
                // Log the exception (implement logging as needed)
                throw new Exception($"Error getting content with id {id}", ex);
            }
        }

        public async Task<ContentMaster> AddAsync(ContentMaster contentMaster)
        {
            try
            {
                _context.ContentMasters.Add(contentMaster);
                await _context.SaveChangesAsync();
                return contentMaster;
            }
            catch (Exception ex)
            {
                // Log the exception (implement logging as needed)
                throw new Exception("Error adding content", ex);
            }
        }

        public async Task<ContentMaster> UpdateAsync(ContentMaster contentMaster)
        {
            try
            {
                var existingContentMaster = await (from c in _context.ContentMasters
                                                   where c.Id == contentMaster.Id
                                                   select c).FirstOrDefaultAsync();
                if (existingContentMaster == null)
                {
                    throw new KeyNotFoundException("Content not found");
                }

                existingContentMaster.PageTitle = contentMaster.PageTitle;
                existingContentMaster.Description = contentMaster.Description;
                existingContentMaster.UpdatedOn = contentMaster.UpdatedOn;
                existingContentMaster.UpdatedBy = contentMaster.UpdatedBy;

                _context.Entry(existingContentMaster).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return existingContentMaster;
            }
            catch (Exception ex)
            {
                // Log the exception (implement logging as needed)
                throw new Exception("Error updating content", ex);
            }
        }

        public async Task<ContentMaster> DeleteAsync(int id)
        {
            try
            {
                var contentMaster = await (from c in _context.ContentMasters
                                           where c.Id == id
                                           select c).FirstOrDefaultAsync();
                if (contentMaster == null)
                {
                    throw new KeyNotFoundException("Content not found");
                }

                _context.ContentMasters.Remove(contentMaster);
                await _context.SaveChangesAsync();
                return contentMaster;
            }
            catch (Exception ex)
            {
                // Log the exception (implement logging as needed)
                throw new Exception("Error deleting content", ex);
            }
        }










        public async Task<IEnumerable<ContentMaster>> GetByUpdatedByAsync(string updatedBy)
        {
            try
            {
                return await (from c in _context.ContentMasters
                              where c.UpdatedBy == updatedBy
                              select c).ToListAsync();
            }
            catch (Exception ex)
            {
                // Log the exception (implement logging as needed)
                throw new Exception("Error getting content by updated by", ex);
            }
        }










    }
}
