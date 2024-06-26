using CMSproject26.Models;

namespace CMSproject26.Repositories
{
    public interface IUserTypeMasterRepository
    {
        Task<IEnumerable<UserTypeMaster>> GetAllAsync();
        Task<UserTypeMaster> GetByIdAsync(int id);
        Task<UserTypeMaster> AddAsync(UserTypeMaster userTypeMaster);
        Task<UserTypeMaster> UpdateAsync(UserTypeMaster userTypeMaster);
        Task<UserTypeMaster> DeleteAsync(int id);
    }

}
