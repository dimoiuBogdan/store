using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using store_api.Store.Data.Enums;

namespace store_api.Store.Data.Models.UserModels;

public class UserModel
{
    [Description("created_at")]
    public required DateTime CreatedAt { get; set; }

    [Key]
    [Description("user_id")]
    public required int UserId { get; set; }

    [Description("email")]
    public required string Email { get; set; }

    [Description("phone_number")]
    public required string PhoneNumber { get; set; }

    [Description("first_name")]
    public required string FirstName { get; set; }

    [Description("last_name")]
    public required string LastName { get; set; }

    [Description("user_shipping_address")]
    public required string UserShippingAddress { get; set; }

    [Description("user_billing_address")]
    public required string UserBillingAddress { get; set; }

    [Description("user_status_id")]
    public required UserStatus UserStatusId { get; set; }

    [Description("password")]
    public required string Password { get; set; }
}




