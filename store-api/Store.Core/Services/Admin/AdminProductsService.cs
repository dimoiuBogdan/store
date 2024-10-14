using AutoMapper;
using store_api.Store.Core.Dtos.AdminDtos;
using store_api.Store.Core.Services.IServices;
using store_api.Store.Data.Models.ProductModels;
using store_api.Store.Data.Repositories.IRepositories;

namespace store_api.Store.Core.Services
{
    public class AdminProductsService : IAdminProductsService
    {
        private readonly IMapper _mapper;
        private readonly IAdminProductsRepository _adminProductsRepository;

        public AdminProductsService(IMapper mapper, IAdminProductsRepository adminProductsRepository)
        {
            _adminProductsRepository = adminProductsRepository;
            _mapper = mapper;
        }

        public async Task<List<ProductDto>> GetAllProductsAsync()
        {
            var products = await _adminProductsRepository.GetAllProductsAsync();

            return _mapper.Map<List<ProductDto>>(products);
        }
    }
}