using Dapper;
using Npgsql;
using store_api.Store.Data.Helpers;
using store_api.Store.Data.Repositories.IRepositories;
using store_api.Store.Data.Models.ProductModels;
using Newtonsoft.Json;

namespace store_api.Store.Data.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        private readonly string _connectionString;

        public AdminRepository(IConfiguration configuration)
        {
            _connectionString = ConnectionStringHelper.BuildSupabaseConnectionString(configuration);
        }

        private NpgsqlConnection GetConnection()
        {
            return new NpgsqlConnection(_connectionString);
        }

        public async Task<List<ProductModel>> GetBestProductsAsync()
        {
            const string sql = @"
                SELECT p.product_id, p.name, p.price, p.stock, c.category_id, c.name, op.sales_count
                FROM product p
                LEFT JOIN product_category pc ON p.product_id = pc.product_id
                LEFT JOIN category c ON pc.category_id = c.category_id
                LEFT JOIN LATERAL (
                    SELECT SUM(op.quantity)::int as sales_count
                    FROM order_product op
                    WHERE op.product_id = p.product_id
                ) op ON true
                ORDER BY op.sales_count DESC
                LIMIT 5";

            await using var connection = GetConnection();

            var productDictionary = new Dictionary<int, ProductModel>();

            var products = await connection.QueryAsync<ProductModel, CategoryModel, ProductModel>(
                sql,
                (product, category) =>
                {
                    Console.WriteLine(product.SalesCount);

                    if (!productDictionary.TryGetValue(product.ProductId, out var existingProduct))
                    {
                        existingProduct = product;
                        existingProduct.Categories = new List<CategoryModel>();
                        productDictionary[product.ProductId] = existingProduct;
                    }

                    existingProduct.Categories.Add(category);

                    return existingProduct;
                },
                splitOn: "category_id"
            );

            await connection.CloseAsync();

            return productDictionary.Values.ToList();
        }

        public async Task<List<ProductImageModel>> GetImagesForProductsAsync(List<int> productIds)
        {
            const string sql = @"
                SELECT pi.image_id, pi.url, pi.product_id
                FROM product_image pi
                WHERE pi.product_id = ANY(@productIds)";

            await using var connection = GetConnection();

            var images = await connection.QueryAsync<ProductImageModel>(sql, new { productIds });

            await connection.CloseAsync();

            return images.ToList();
        }


    }
}
