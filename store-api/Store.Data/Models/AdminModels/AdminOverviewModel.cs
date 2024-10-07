using System.ComponentModel;

public class AdminOverviewModel
{
    [Description("total")]
    public required decimal Total { get; set; }

    [Description("orders_count")]
    public required int OrdersCount { get; set; }

    [Description("products_sold")]
    public required int ProductsSold { get; set; }

    [Description("new_customers")]
    public required int NewCustomers { get; set; }
}
