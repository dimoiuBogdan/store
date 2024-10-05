using Dapper;
using Npgsql;
using store_api.Store.Data.Helpers;
using store_api.Store.Data.Repositories.IRepositories;
using store_api.Store.Data.Models.ProductModels;
using Newtonsoft.Json;
using store_api.Store.Data.Models.UserModels;
using Supabase.Gotrue;

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
                SELECT p.product_id, p.name, p.price, p.stock, op.sales_count, c.category_id, c.name
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

        public async Task<List<CategoryModel>> GetBestCategoriesAsync()
        {
            const string sql = @"
                SELECT c.category_id, c.name, SUM(op.quantity)::int as sales_count
                FROM category c
                JOIN product_category pc ON c.category_id = pc.category_id
                JOIN order_product op ON pc.product_id = op.product_id
                GROUP BY c.category_id, c.name
                ORDER BY sales_count DESC
                LIMIT 5";

            await using var connection = GetConnection();

            var categories = await connection.QueryAsync<CategoryModel>(sql);

            await connection.CloseAsync();

            return categories.ToList();
        }

        public async Task<List<OrderModel>> GetLatestOrdersAsync()
        {
            const string sql = @"
                SELECT o.order_id, o.created_at, o.total, o.order_status_id, o.user_id, o.shipping_order_address_id, o.billing_order_address_id, o.payment_method_id, o.paid
                FROM ""order"" o
                ORDER BY o.created_at DESC
                LIMIT 5";

            await using var connection = GetConnection();

            var orders = await connection.QueryAsync<OrderModel>(sql);

            await connection.CloseAsync();

            return orders.ToList();
        }

        public async Task<Dictionary<int, UserModel>> GetLatestOrdersUserAsync(List<int> userIds)
        {
            const string sql = @"
                SELECT u.user_id, u.first_name, u.last_name, o.order_id
                FROM ""user"" u
                INNER JOIN ""order"" o ON u.user_id = o.user_id
                WHERE u.user_id = ANY(@userIds)";

            await using var connection = GetConnection();

            var usersDictionary = new Dictionary<int, UserModel>();

            var users = await connection.QueryAsync<UserModel, OrderModel, UserModel>(
                sql,
                (user, order) =>
                {
                    usersDictionary.Add(order.OrderId, user);

                    return user;
                },
                param: new { userIds },
                splitOn: "order_id"
            );

            await connection.CloseAsync();

            return usersDictionary;
        }
    }
}
