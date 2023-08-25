
using AutoMapper;
using EssenceAPI.DTO;
using EssenceAPI.Models;

namespace EssenceAPI.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Sneaker, SneakerDto>();

        }
    }
}