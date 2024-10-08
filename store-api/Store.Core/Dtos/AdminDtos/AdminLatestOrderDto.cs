using System.ComponentModel.DataAnnotations;
using store_api.Store.Data.Enums;
using store_api.Store.Core.Dtos.AddressDtos;
namespace store_api.Store.Core.Dtos.AdminDtos
{
    public class AdminLatestOrderDto
    {
        public required int OrderId { get; set; }

        public required DateTime CreatedAt { get; set; }

        public required decimal Total { get; set; }

        public required OrderStatus OrderStatus { get; set; }

        public required AdminLatestOrderUserDto User { get; set; }

        public required AddressDto ShippingOrderAddress { get; set; }

        public required AddressDto BillingOrderAddress { get; set; }

        public required PaymentMethods PaymentMethod { get; set; }

        public required bool Paid { get; set; }
    }
}