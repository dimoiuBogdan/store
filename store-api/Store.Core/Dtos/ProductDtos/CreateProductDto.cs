namespace store_api.Store.Core.Dtos.ProductDtos
{
    public class CreateProductDto
    {
        public required string Name { get; set; }

        public required decimal Price { get; set; }

        public required int Stock { get; set; }

        public required ProductStatus Status { get; set; }

        public required List<string> Images { get; set; }

        public required List<int> Categories { get; set; }

        public required string Description { get; set; }
    }
}
