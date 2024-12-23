using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace store_api.Store.Data.Models.ProductModels;

public class ProductModel
{
    [Description("name")]
    public required string Name { get; set; }

    [Key]
    [Description("product_id")]
    public required int ProductId { get; set; }

    [Description("sales_count")]
    public required string SalesCount { get; set; }

    [Description("description")]
    public required string Description { get; set; }

    [Description("status")]
    public required ProductStatus Status { get; set; }

    [Description("price")]
    public required decimal Price { get; set; }

    [Description("stock")]
    public required int Stock { get; set; }

    [Description("is_active")]
    public required bool IsActive { get; set; }

    [Description("created_at")]
    public required DateTime CreatedAt { get; set; }

    public required List<CategoryModel> Categories { get; set; }

    public required List<ProductImageModel> ProductImages { get; set; }
}


// TODO: Replace isActive with status