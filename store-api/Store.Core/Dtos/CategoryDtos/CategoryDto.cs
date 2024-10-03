using System.ComponentModel.DataAnnotations;

namespace store_api.Store.Core.Dtos.CategoryDtos
{
    public class CategoryDto
    {
        [Required]
        public required int CategoryId { get; set; }

        [Required]
        public required string Name { get; set; }
    }
}
