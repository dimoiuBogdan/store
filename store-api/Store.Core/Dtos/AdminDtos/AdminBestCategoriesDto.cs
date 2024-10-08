using System.ComponentModel.DataAnnotations;

namespace store_api.Store.Core.Dtos.AdminDtos
{
    public class AdminBestCategoriesDto
    {
        public required int CategoryId { get; set; }

        public required string Name { get; set; }

        public required int SalesCount { get; set; }
    }
}