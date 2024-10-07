using System.ComponentModel.DataAnnotations;

namespace store_api.Store.Core.Dtos.AddressDtos
{
    public class AddressDto
    {
        [Required]
        public required int AddressId { get; set; }

        [Required]
        public required string Street { get; set; }

        [Required]
        public required string City { get; set; }

        [Required]
        public required string County { get; set; }

        [Required]
        public required string Postcode { get; set; }

        [Required]
        public required string Country { get; set; }

        [Required]
        public required string Number { get; set; }
    }
}