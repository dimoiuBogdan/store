using store_api.Store.Data.Models.ProductModels;
using store_api.Store.Data.Models.UserModels;

namespace store_api.Store.Data.Repositories.IRepositories;

public interface IAdminRepository
{
    Task<List<ProductModel>> GetBestProductsAsync();
    Task<List<ProductImageModel>> GetImagesForProductsAsync(List<int> productIds);
    Task<List<CategoryModel>> GetBestCategoriesAsync();
    Task<List<OrderModel>> GetLatestOrdersAsync();
    Task<Dictionary<int, UserModel>> GetLatestOrdersUserAsync(List<int> userIds);
}

