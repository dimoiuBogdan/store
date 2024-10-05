using AutoMapper;
using Newtonsoft.Json;
using store_api.Store.Core.Dtos.AdminDtos;
using store_api.Store.Core.Services.IServices;
using store_api.Store.Data.Models.UserModels;
using store_api.Store.Data.Repositories.IRepositories;

namespace store_api.Store.Core.Services
{
    public class AdminService : IAdminService
    {
        private readonly IMapper _mapper;
        private readonly IAdminRepository _adminRepository;

        public AdminService(IMapper mapper, IAdminRepository adminRepository)
        {
            _adminRepository = adminRepository;
            _mapper = mapper;
        }

        public async Task<List<AdminBestProductsDto>> GetAdminBestProductsAsync()
        {
            var bestProductsData = await _adminRepository.GetBestProductsAsync();
            var bestProductsImagesData = await _adminRepository.GetImagesForProductsAsync(bestProductsData.Select(p => p.ProductId).ToList());

            var imageDict = bestProductsImagesData
                .GroupBy(i => i.ProductId)
                .ToDictionary(i => i.Key, i => i.Select(image => image.Url).FirstOrDefault() ?? string.Empty);

            var bestProducts = bestProductsData.Select(product =>
            {
                var productDto = _mapper.Map<AdminBestProductsDto>(product);

                productDto.ProductImage = imageDict.TryGetValue(product.ProductId, out var url) ? url : string.Empty;

                return productDto;
            }).ToList();

            return bestProducts;
        }

        public async Task<List<AdminBestCategoriesDto>> GetAdminBestCategoriesAsync()
        {
            var bestCategoriesData = await _adminRepository.GetBestCategoriesAsync();

            return _mapper.Map<List<AdminBestCategoriesDto>>(bestCategoriesData);
        }

        public async Task<List<AdminLatestOrdersDto>> GetAdminLatestOrdersAsync()
        {
            var latestOrdersData = await _adminRepository.GetLatestOrdersAsync();
            var latestOrdersUser = await _adminRepository.GetLatestOrdersUserAsync(latestOrdersData.Select(o => o.UserId).ToList());

            var latestOrders = latestOrdersData.Select(order =>
            {
                var orderDto = _mapper.Map<AdminLatestOrdersDto>(order);
                orderDto.User = _mapper.Map<AdminLatestOrdersUserDto>(latestOrdersUser[order.OrderId]);

                return orderDto;
            }).ToList();

            return latestOrders;
        }
    }
}
