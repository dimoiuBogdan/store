using System.ComponentModel.DataAnnotations;
using store_api.Store.Data.Enums;

namespace store_api.Store.Core.Dtos.AdminDtos
{
    public class AdminLatestOrdersUserDto
    {
        [Required]
        public required int UserId { get; set; }

        [Required]
        public required string FirstName { get; set; }

        [Required]
        public required string LastName { get; set; }
    }
}