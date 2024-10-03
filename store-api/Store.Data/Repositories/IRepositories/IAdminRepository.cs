using store_api.Store.Data.Models.ProductModels;

namespace store_api.Store.Data.Repositories.IRepositories;

public interface IAdminRepository
{
    Task<List<ProductModel>> GetBestProductsWithCategoriesAsync();
    Task<List<ProductImageModel>> GetImagesForProductsAsync(List<int> productIds);
}
