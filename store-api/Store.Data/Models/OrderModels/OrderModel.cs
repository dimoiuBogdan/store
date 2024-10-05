using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using store_api.Store.Data.Enums;

public class OrderModel
{
    [Key]
    [Description("order_id")]
    public required int OrderId { get; set; }

    [Description("created_at")]
    public required DateTime CreatedAt { get; set; }

    [Description("total")]
    public required decimal Total { get; set; }

    [Description("order_status_id")]
    public required OrderStatus OrderStatus { get; set; }

    [Description("user_id")]
    public required int UserId { get; set; }

    [Description("shipping_order_address_id")]
    public required int ShippingOrderAddressId { get; set; }

    [Description("billing_order_address_id")]
    public required int BillingOrderAddressId { get; set; }

    [Description("payment_method_id")]
    public required PaymentMethods PaymentMethod { get; set; }

    [Description("paid")]
    public required bool Paid { get; set; }
}
