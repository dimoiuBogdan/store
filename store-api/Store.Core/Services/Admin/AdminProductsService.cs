using AutoMapper;
using store_api.Store.Core.Dtos.AdminDtos;
using store_api.Store.Core.Dtos.ProductDtos;
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

        public async Task<ProductDto> CreateProductAsync(CreateProductDto createProductDto)
        {
            var product = _mapper.Map<ProductModel>(createProductDto, opts => opts.AfterMap((_, dest) =>
            {
                dest.ProductId = 0;
                dest.ProductImages = createProductDto.Images.Select(image => new ProductImageModel
                {
                    ImageId = 0,
                    Url = image,
                    ProductId = dest.ProductId
                }).ToList();
                dest.Status = Enum.Parse<ProductStatus>(createProductDto.Status.ToString());
            }));

            await _adminProductsRepository.CreateProductAsync(product);

            return _mapper.Map<ProductDto>(product);
        }
    }
}