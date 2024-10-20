using store_api.Store.Data.Models.ProductModels;

namespace store_api.Store.Data.Repositories.IRepositories;

public interface IAdminProductsRepository
{
    Task<List<ProductModel>> GetAllProductsAsync();

    Task<ProductModel> CreateProductAsync(ProductModel product);
}

