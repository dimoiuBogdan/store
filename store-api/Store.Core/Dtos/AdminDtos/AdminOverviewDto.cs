namespace store_api.Store.Core.Dtos.AdminDtos
{
    public class AdminOverviewDto
    {
        public required decimal Total { get; set; }

        public required int OrdersCount { get; set; }

        public required int ProductsSold { get; set; }

        public required int NewCustomers { get; set; }
    }
}
