using System.ComponentModel.DataAnnotations;
using store_api.Store.Data.Enums;

namespace store_api.Store.Core.Dtos.AdminDtos
{
    public class AdminLatestOrdersDto
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
        public required AdminLatestOrdersUserDto User { get; set; }

        [Required]
        public required int ShippingOrderAddressId { get; set; }

        [Required]
        public required int BillingOrderAddressId { get; set; }

        [Required]
        public required PaymentMethods PaymentMethodId { get; set; }

        [Required]
        public required bool Paid { get; set; }
    }
}