using CMSproject26.DTO;

namespace CMSproject26.Repositories
{
    public interface ILoginRepository
    {
        Task<bool> ValidateUser(LoginDTO loginDTO);
    }
}
