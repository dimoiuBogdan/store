using System.ComponentModel.DataAnnotations;
using store_api.Store.Data.Enums;
namespace store_api.Store.Core.Dtos.AdminDtos
{
    public class AdminLatestOrderUserDto
    {
        [Required]
        public required int UserId { get; set; }

        [Required]
        public required string FirstName { get; set; }

        [Required]
        public required string LastName { get; set; }

        [Required]
        public required string PhoneNumber { get; set; }

        [Required]
        public required string Email { get; set; }

        [Required]
        public required UserStatus UserStatus { get; set; }

        [Required]
        public required DateTime CreatedAt { get; set; }
    }
}