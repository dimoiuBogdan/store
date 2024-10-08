using System.ComponentModel.DataAnnotations;
using store_api.Store.Data.Enums;
namespace store_api.Store.Core.Dtos.AdminDtos
{
    public class AdminLatestOrderUserDto
    {
        public required int UserId { get; set; }

        public required string FirstName { get; set; }

        public required string LastName { get; set; }

        public required string PhoneNumber { get; set; }

        public required string Email { get; set; }

        public required UserStatus UserStatus { get; set; }

        public required DateTime CreatedAt { get; set; }
    }
}