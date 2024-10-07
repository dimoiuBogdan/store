using System.ComponentModel.DataAnnotations;

namespace store_api.Store.Core.Dtos.AdminDtos
{
    public class AdminLatestOrderDetailsDto
    {
        [Required]
        public required int OrderId { get; set; }

        [Required]
        public required AdminLatestOrderUserDto User { get; set; }

        [Required]
        public required decimal Total { get; set; }

        [Required]
        public required string Status { get; set; }

        [Required]
        public required DateTime CreatedAt { get; set; }
    }
}
