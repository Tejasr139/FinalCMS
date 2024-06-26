using CMSproject26.Models;

namespace CMSproject26.Repositories
{
    public interface IContentMasterRepository
    {
        Task<IEnumerable<ContentMaster>> GetAllAsync();
        Task<ContentMaster> GetByIdAsync(int id);
        Task<ContentMaster> AddAsync(ContentMaster contentMaster);
        Task<ContentMaster> UpdateAsync(ContentMaster contentMaster);
        Task<ContentMaster> DeleteAsync(int id);



        Task<IEnumerable<ContentMaster>> GetByUpdatedByAsync(string updatedBy);


    }

}
