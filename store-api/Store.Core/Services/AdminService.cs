using AutoMapper;
using Newtonsoft.Json;
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
            var bestProductsData = await _adminRepository.GetBestProductsAsync();
            var bestProductsImagesData = await _adminRepository.GetImagesForProductsAsync(bestProductsData.Select(p => p.ProductId).ToList());

            // Console.WriteLine(JsonConvert.SerializeObject(bestProductsData, Formatting.Indented));

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
    }
}
