using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

public class AddressModel
{
    [Key]
    [Description("address_id")]
    public required int AddressId { get; set; }

    [Description("street")]
    public required string Street { get; set; }

    [Description("city")]
    public required string City { get; set; }

    [Description("county")]
    public required string County { get; set; }

    [Description("postcode")]
    public required string Postcode { get; set; }

    [Description("country")]
    public required string Country { get; set; }

    [Description("number")]
    public required string Number { get; set; }
}
