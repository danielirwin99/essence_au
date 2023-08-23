using System.Security.Cryptography;
using System.Text.Json;
using EssenceAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EssenceAPI.Data
{
    public class Seed
    {
        // Injects our db
        public static async Task SeedSneakers(DataContext context)
        {
            // If there is already data in the database
            if (await context.Sneakers.AnyAsync()) return;

            // Reads our json file

            var sneakerData = await File.ReadAllTextAsync("Data/SneakerSeed.json");

            // Serializes the json so we can use it in our db
            var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };

            // Takes the model from our Sneaker.cs model to use 
            var sneakers = JsonSerializer.Deserialize<List<Sneaker>>(sneakerData);

            // Maps over the sneaker data
            foreach (var sneaker in sneakers)
            {
                using var hmac = new HMACSHA512();
                sneaker.Name = sneaker.Name.ToLower();
                sneaker.Brand = sneaker.Brand.ToLower();
                sneaker.Gender = sneaker.Gender.ToLower();
                sneaker.Sizing = sneaker.Sizing.ToLower();

                context.Add(sneaker);
            }
            // Saves changes to db

            await context.SaveChangesAsync();
        }
    }
}