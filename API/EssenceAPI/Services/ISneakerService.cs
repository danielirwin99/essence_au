
using EssenceAPI.Models;

namespace EssenceAPI.Services
{
    public interface ISneakerService
    {
        Task<List<Sneaker>> GetAllSneakers();
        Task<List<Sneaker>> GetBrand(string brand);
        Task<Sneaker?> GetSneaker(int id);
        Task<List<Sneaker>> AddSneaker(Sneaker sneaker);
        Task<List<Sneaker>?> UpdateSneaker(int id, Sneaker request);
        Task<List<Sneaker>?> DeleteSneaker(int id);
        Task GetBrand();
    }
}