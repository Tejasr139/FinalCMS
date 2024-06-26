using CMSproject26.DTO;
using CMSproject26.Models;

namespace CMSproject26.Repositories
{
    public interface IUserMasterRepository
    {
        Task<IEnumerable<UserMaster>> GetAllAsync();
        Task<UserMaster> GetByIdAsync(int id);
        Task<UserMaster> AddAsync(UserMaster userMaster);
        Task<UserMaster> UpdateAsync(UserMaster userMaster);
        Task<UserMaster> DeleteAsync(int id);




        Task<string> GetUpdatedByByEmailAsync(string email);



        ////Task<UserMaster> GetByEmailAndPasswordAsync(string email, string password);

        //Task<UserMaster> GetByEmailAndPasswordAsync(LoginDTO loginDTO);


        //Task<IEnumerable<UserTypeMaster>> GetByUpdatedByAsync(string updatedBy);

    }

}
