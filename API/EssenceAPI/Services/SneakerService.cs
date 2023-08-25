
using EssenceAPI.Data;
using EssenceAPI.DTO;
using EssenceAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EssenceAPI.Services
{
    public class SneakerService : ISneakerService
    {
        private static List<Sneaker> sneakers = new List<Sneaker>{
            new Sneaker
                {
                    Id = 1,
                    Brand = "Nike",
                    Name = "Air Jordan 1 Low Bred Toe",
                    Price = 240,
                    Gender = "Mens",
                    Sizing = "US 9",
                    ReleaseYear = 2023
                },
                new Sneaker
                {
                    Id = 2,
                    Brand = "Adidas",
                    Name = "Yeezy 350 v2 Zebra",
                    Price = 500,
                    Gender = "Mens",
                    Sizing = "US 7.5",
                    ReleaseYear = 2019
                }
        };
        private readonly DataContext _context;

        public SneakerService(DataContext context)
        {
            _context = context;

        }

        public async Task<List<Sneaker>> GetAllSneakers()
        {
            var sneakers = await _context.Sneakers.ToListAsync();

            return sneakers;
        }
        public async Task<List<Sneaker>> GetBrand([FromQuery] string brand)
        {
            var sneakers = await _context.Sneakers.Where(s => s.Brand == brand).ToListAsync();

            return sneakers;
        }

        public async Task<Sneaker?> GetSneaker(int id)
        {
            var sneaker = await _context.Sneakers.FindAsync(id);

            if (sneaker == null) return null;

            return sneaker;
        }

        public async Task<List<Sneaker>> AddSneaker(Sneaker sneaker)
        {
            _context.Sneakers.Add(sneaker);

            await _context.SaveChangesAsync();

            return await _context.Sneakers.ToListAsync();
        }

        public async Task<List<Sneaker>?> UpdateSneaker(int id, Sneaker request)
        {
            var sneaker = await _context.Sneakers.FindAsync(id, request);

            if (sneaker == null) return null;

            sneaker.Id = request.Id;
            sneaker.Brand = request.Brand;
            sneaker.Name = request.Name;
            sneaker.Price = request.Price;
            sneaker.Gender = request.Gender;
            sneaker.Sizing = request.Sizing;
            sneaker.ReleaseYear = request.ReleaseYear;

            await _context.SaveChangesAsync();

            return await _context.Sneakers.ToListAsync();
        }
        public async Task<List<Sneaker>?> DeleteSneaker(int id)
        {
            var sneaker = await _context.Sneakers.FindAsync(id);

            if (sneaker == null) return null;

            _context.Sneakers.Remove(sneaker);

            return await _context.Sneakers.ToListAsync();
        }


    }
}