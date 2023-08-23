

namespace EssenceAPI.Models
{
    public class Sneaker
    {
        public int Id { get; set; }
        public string Brand { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public int Price { get; set; }
        public string Gender { get; set; } = string.Empty;
        public string Sizing { get; set; } = string.Empty;
        public bool OnSale { get; set; } = false;
        public int ReleaseYear { get; set; }
        public string Photo { get; set; } = string.Empty;
    }
}