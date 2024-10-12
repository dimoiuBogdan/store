using store_api.Store.Core.Dtos.AdminDtos;

namespace store_api.Store.Core.Services.IServices
{
    public interface IAdminService
    {
        Task<List<AdminBestProductsDto>> GetAdminBestProductsAsync();
        Task<List<AdminBestCategoriesDto>> GetAdminBestCategoriesAsync();
        Task<List<AdminLatestOrderDto>> GetAdminLatestOrdersAsync();
        Task<AdminLatestOrderDto> GetAdminLatestOrderByIdAsync(int orderId);
        Task<List<OrderedProductDto>> GetAdminLatestOrderProductsAsync(int orderId);
        Task<AdminOverviewDto> GetAdminOverviewAsync();
    }
}
