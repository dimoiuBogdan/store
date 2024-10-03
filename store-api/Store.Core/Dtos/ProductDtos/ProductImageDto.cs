using System.ComponentModel.DataAnnotations;

namespace store_api.Store.Core.Dtos.AdminDtos
{
    public class ProductImageDto
    {
        [Required]
        public required int ImageId { get; set; }

        [Required]
        public required string Url { get; set; }
    }
}
