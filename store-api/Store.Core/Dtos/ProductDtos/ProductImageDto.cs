using System.ComponentModel.DataAnnotations;

namespace store_api.Store.Core.Dtos.AdminDtos
{
    public class ProductImageDto
    {
        public required int ImageId { get; set; }

        public required string Url { get; set; }
    }
}
