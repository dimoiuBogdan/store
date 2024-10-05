using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

public class CategoryModel
{
    [Key]
    [Description("category_id")]
    public required int CategoryId { get; set; }

    [Description("name")]
    public required string Name { get; set; }

    [Description("sales_count")]
    public int SalesCount { get; set; }
}
