using store_api.Store.Core.Dtos.CategoryDtos;

namespace store_api.Store.Core.Dtos.AdminDtos
{
    public class ProductDto
    {
        public required int ProductId { get; set; }

        public required string Name { get; set; }

        public required decimal Price { get; set; }

        public required ProductStatus Status { get; set; }

        public required string Description { get; set; }

        public required List<ProductImageDto> ProductImages { get; set; }

        public required List<CategoryDto> Categories { get; set; }

        public required int Stock { get; set; }

        public required bool IsActive { get; set; }

        public required DateTime CreatedAt { get; set; }
    }
}
