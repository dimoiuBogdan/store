using AutoMapper;
using store_api.Store.Core.Dtos.AdminDtos;
using store_api.Store.Core.Services.IServices;
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
            var bestProductsWithCategoriesData = await _adminRepository.GetBestProductsWithCategoriesAsync();
            var bestProductsImagesData = await _adminRepository.GetImagesForProductsAsync(bestProductsWithCategoriesData.Select(p => p.ProductId).ToList());

            var imageDict = bestProductsImagesData
                .GroupBy(i => i.ProductId)
                .ToDictionary(i => i.Key, i => i.Select(image => image.Url).FirstOrDefault() ?? string.Empty);


            var bestProducts = bestProductsWithCategoriesData.Select(product =>
            {
                var productDto = _mapper.Map<AdminBestProductsDto>(product);

                productDto.ProductImage = imageDict.TryGetValue(product.ProductId, out var url) ? url : string.Empty;

                return productDto;
            }).ToList();

            return bestProducts;
        }
    }
}
