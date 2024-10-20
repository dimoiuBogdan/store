using store_api.Store.Core.Dtos.AdminDtos;
using store_api.Store.Core.Dtos.ProductDtos;

namespace store_api.Store.Core.Services.IServices
{
    public interface IAdminProductsService
    {
        Task<List<ProductDto>> GetAllProductsAsync();

        Task<ProductDto> CreateProductAsync(CreateProductDto createProductDto);
    }
}
