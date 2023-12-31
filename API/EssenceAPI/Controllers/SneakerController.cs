using AutoMapper;
using EssenceAPI.DTO;
using EssenceAPI.Models;
using EssenceAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace EssenceAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SneakerController : ControllerBase
    {
        private readonly ISneakerService _sneakerService;
        private readonly IMapper _mapper;
        public SneakerController(ISneakerService sneakerService, IMapper mapper)
        {
            _mapper = mapper;
            _sneakerService = sneakerService;

        }

        [HttpGet]
        public async Task<ActionResult<List<Sneaker>>> GetAllSneakers()
        {
            var result = await _sneakerService.GetAllSneakers();

            var sneakersToReturn = _mapper.Map<List<Sneaker>>(result);


            return Ok(sneakersToReturn);

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Sneaker>> GetSneaker(int id)
        {
            var result = await _sneakerService.GetSneaker(id);

            if (result == null) return NotFound("Sorry but this sneaker does not exist");

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<List<Sneaker>>> AddSneaker(Sneaker sneaker)
        {
            var result = await _sneakerService.AddSneaker(sneaker);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<List<Sneaker>>> UpdateSneaker(int id, Sneaker request)
        {
            var result = await _sneakerService.UpdateSneaker(id, request);

            if (result == null) return NotFound("Sorry but this sneaker does not exist");

            return Ok(result);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Sneaker>>> DeleteSneaker(int id)
        {
            var result = await _sneakerService.DeleteSneaker(id);

            if (result == null) return NotFound("Sorry but this sneaker does not exist");

            return Ok(result);
        }
    }
}