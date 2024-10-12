using store_api.Store.Data.Models.ProductModels;
using store_api.Store.Data.Repositories.IRepositories;
using Dapper;
using Npgsql;
using store_api.Store.Data.Helpers;
using Newtonsoft.Json;

public class AdminProductsRepository : IAdminProductsRepository
{
    private readonly string _connectionString;

    public AdminProductsRepository(IConfiguration configuration)
    {
        _connectionString = ConnectionStringHelper.BuildSupabaseConnectionString(configuration);
    }

    private NpgsqlConnection GetConnection()
    {
        return new NpgsqlConnection(_connectionString);
    }

    public async Task<List<ProductModel>> GetAllProductsAsync()
    {
        const string sql = @"
        SELECT p.*, op.sales_count, c.category_id, c.name, pi.image_id, pi.url
        FROM product p
        LEFT JOIN product_category pc ON p.product_id = pc.product_id
        LEFT JOIN category c ON pc.category_id = c.category_id
        LEFT JOIN product_image pi ON p.product_id = pi.product_id
        LEFT JOIN LATERAL (
            SELECT SUM(op.quantity)::int as sales_count
            FROM order_product op
            WHERE op.product_id = p.product_id
        ) op ON true
        GROUP BY p.product_id, c.category_id, pi.image_id, op.sales_count";

        await using var connection = GetConnection();

        var productsDictionary = new Dictionary<int, ProductModel>();

        var products = await connection.QueryAsync<ProductModel, CategoryModel, ProductImageModel, ProductModel>(
            sql,
            (product, category, image) =>
            {
                if (!productsDictionary.TryGetValue(product.ProductId, out var currentProduct))
                {
                    currentProduct = product;
                    currentProduct.Categories = new List<CategoryModel>();
                    currentProduct.ProductImages = new List<ProductImageModel>();
                    productsDictionary.Add(currentProduct.ProductId, currentProduct);
                }

                if (category != null && !currentProduct.Categories.Any(c => c.CategoryId == category.CategoryId))
                {
                    currentProduct.Categories.Add(category);
                }

                if (image != null && !currentProduct.ProductImages.Any(i => i.ImageId == image.ImageId))
                {
                    currentProduct.ProductImages.Add(image);
                }

                return currentProduct;
            },
            splitOn: "category_id, image_id"
        );

        return productsDictionary.Values.ToList();
    }
}