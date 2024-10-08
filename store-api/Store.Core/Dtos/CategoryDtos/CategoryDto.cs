using System.ComponentModel.DataAnnotations;

namespace store_api.Store.Core.Dtos.CategoryDtos
{
    public class CategoryDto
    {
        public required int CategoryId { get; set; }

        public required string Name { get; set; }
    }
}
