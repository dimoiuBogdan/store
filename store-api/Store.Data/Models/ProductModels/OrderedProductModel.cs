
using System.ComponentModel;

namespace store_api.Store.Data.Models.ProductModels;

public class OrderedProductModel
{
    [Description("product_id")]
    public required int ProductId { get; set; }

    [Description("product_name")]
    public required string Name { get; set; }

    [Description("price")]
    public required decimal Price { get; set; }

    [Description("quantity")]
    public required int Quantity { get; set; }

    public decimal Total => Price * Quantity;

    public required List<CategoryModel> Categories { get; set; }

    public required string ProductImage { get; set; }
}


