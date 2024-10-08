using System.ComponentModel.DataAnnotations;

namespace store_api.Store.Core.Dtos.AdminDtos
{
    public class AdminLatestOrderDetailsDto
    {
        public required int OrderId { get; set; }

        public required AdminLatestOrderUserDto User { get; set; }

        public required decimal Total { get; set; }

        public required string Status { get; set; }

        public required DateTime CreatedAt { get; set; }
    }
}
