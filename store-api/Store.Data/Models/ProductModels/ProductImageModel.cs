using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

public class ProductImageModel
{
    [Key]
    [Description("image_id")]
    public required int ImageId { get; set; }

    [Description("url")]
    public required string Url { get; set; }

    [Description("product_id")]
    public required int ProductId { get; set; }
}
