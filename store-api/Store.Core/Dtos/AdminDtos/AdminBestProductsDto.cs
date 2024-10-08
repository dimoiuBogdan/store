using System.ComponentModel.DataAnnotations;
using store_api.Store.Core.Dtos.CategoryDtos;

namespace store_api.Store.Core.Dtos.AdminDtos
{
    public class AdminBestProductsDto
    {
        public required int ProductId { get; set; }

        public required string Name { get; set; }

        public required int SalesCount { get; set; }

        public required decimal Price { get; set; }

        public required int Stock { get; set; }

        public required List<CategoryDto> Categories { get; set; }

        public required string ProductImage { get; set; }
    }
}
