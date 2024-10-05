using System.ComponentModel.DataAnnotations;

namespace store_api.Store.Core.Dtos.AdminDtos
{
    public class AdminBestCategoriesDto
    {
        [Required]
        public required int CategoryId { get; set; }

        [Required]
        public required string Name { get; set; }

        [Required]
        public required int SalesCount { get; set; }
    }
}