using System.ComponentModel.DataAnnotations;

namespace store_api.Store.Core.Dtos.AddressDtos
{
    public class AddressDto
    {
        public required int AddressId { get; set; }

        public required string Street { get; set; }

        public required string City { get; set; }

        public required string County { get; set; }

        public required string Postcode { get; set; }

        public required string Country { get; set; }

        public required string Number { get; set; }
    }
}