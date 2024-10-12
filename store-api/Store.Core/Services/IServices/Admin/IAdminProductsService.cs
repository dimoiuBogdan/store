using store_api.Store.Data.Models.ProductModels;

namespace store_api.Store.Core.Services.IServices
{
    public interface IAdminProductsService
    {
        Task<List<ProductModel>> GetAllProductsAsync();
    }
}
