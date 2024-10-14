using store_api.Store.Core.Dtos.AdminDtos;

namespace store_api.Store.Core.Services.IServices
{
    public interface IAdminProductsService
    {
        Task<List<ProductDto>> GetAllProductsAsync();
    }
}
