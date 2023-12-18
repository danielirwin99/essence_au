
using EssenceAPI.DTO;
using EssenceAPI.Models;

namespace EssenceAPI.Services
{
    public interface ISneakerService
    {
        Task<List<Sneaker>> GetAllSneakers();
        Task<List<SneakerDto>> GetAllSneakersByBrand();

        Task<Sneaker?> GetSneaker(int id);
        Task<List<Sneaker>> AddSneaker(Sneaker sneaker);
        Task<List<Sneaker>?> UpdateSneaker(int id, Sneaker request);
        Task<List<Sneaker>?> DeleteSneaker(int id);
    }
}