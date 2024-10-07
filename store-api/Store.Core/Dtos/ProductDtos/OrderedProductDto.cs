using System.ComponentModel.DataAnnotations;
using store_api.Store.Core.Dtos.CategoryDtos;

namespace store_api.Store.Core.Dtos.AdminDtos
{
    public class OrderedProductDto
    {
        [Required]
        public required int ProductId { get; set; }

        [Required]
        public required string Name { get; set; }

        [Required]
        public required decimal Price { get; set; }

        [Required]
        public required decimal Total { get; set; }

        [Required]
        public required int Quantity { get; set; }

        [Required]
        public required string ProductImage { get; set; }

        [Required]
        public required List<CategoryDto> Categories { get; set; }
    }
}
