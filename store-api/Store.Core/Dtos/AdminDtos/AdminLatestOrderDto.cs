using System.ComponentModel.DataAnnotations;
using store_api.Store.Data.Enums;
using store_api.Store.Core.Dtos.AddressDtos;
namespace store_api.Store.Core.Dtos.AdminDtos
{
    public class AdminLatestOrderDto
    {
        [Required]
        public required int OrderId { get; set; }

        [Required]
        public required DateTime CreatedAt { get; set; }

        [Required]
        public required decimal Total { get; set; }

        [Required]
        public required OrderStatus OrderStatus { get; set; }

        [Required]
        public required AdminLatestOrderUserDto User { get; set; }

        [Required]
        public required AddressDto ShippingOrderAddress { get; set; }

        [Required]
        public required AddressDto BillingOrderAddress { get; set; }
        [Required]
        public required PaymentMethods PaymentMethod { get; set; }

        [Required]
        public required bool Paid { get; set; }
    }
}