using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using store_api.Store.Core.Dtos.CategoryDtos;

namespace store_api.Store.Core.Dtos.AdminDtos
{
    public class OrderedProductDto
    {
        public required int ProductId { get; set; }

        public required string Name { get; set; }

        public required decimal Price { get; set; }

        public required decimal Total { get; set; }

        public required int Quantity { get; set; }

        public required string ProductImage { get; set; }

        public required List<CategoryDto> Categories { get; set; }
    }
}
