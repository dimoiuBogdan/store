using AutoMapper;
using Newtonsoft.Json;
using store_api.Store.Core.Dtos.AddressDtos;
using store_api.Store.Core.Dtos.AdminDtos;
using store_api.Store.Core.Services.IServices;
using store_api.Store.Data.Models.ProductModels;
using store_api.Store.Data.Repositories.IRepositories;

namespace store_api.Store.Core.Services
{
    public class AdminService : IAdminService
    {
        private readonly IMapper _mapper;
        private readonly IAdminRepository _adminRepository;
        private readonly IAddressRepository _addressRepository;

        public AdminService(IMapper mapper, IAdminRepository adminRepository, IAddressRepository addressRepository)
        {
            _adminRepository = adminRepository;
            _addressRepository = addressRepository;
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

        public async Task<List<AdminLatestOrderDto>> GetAdminLatestOrdersAsync()
        {
            var latestOrdersData = await _adminRepository.GetLatestOrdersAsync();
            var latestOrdersUser = await _adminRepository.GetLatestOrdersUserAsync(latestOrdersData.Select(o => o.UserId).ToList());

            var latestOrders = latestOrdersData.Select(order =>
            {
                var orderDto = _mapper.Map<AdminLatestOrderDto>(order);
                orderDto.User = _mapper.Map<AdminLatestOrderUserDto>(latestOrdersUser[order.OrderId]);

                return orderDto;
            }).ToList();

            return latestOrders;
        }

        public async Task<AdminLatestOrderDto> GetAdminLatestOrderByIdAsync(int orderId)
        {
            var latestOrderData = await _adminRepository.GetLatestOrderByIdAsync(orderId);
            var latestOrderUserTask = _adminRepository.GetLatestOrderUserByIdAsync(latestOrderData.UserId);
            var latestOrderShippingAddressTask = _addressRepository.GetAddressByIdAsync(latestOrderData.ShippingOrderAddressId);
            var latestOrderBillingAddressTask = _addressRepository.GetAddressByIdAsync(latestOrderData.BillingOrderAddressId);

            await Task.WhenAll(latestOrderUserTask, latestOrderShippingAddressTask, latestOrderBillingAddressTask);

            var latestOrderUser = await latestOrderUserTask;
            var latestOrderShippingAddress = await latestOrderShippingAddressTask;
            var latestOrderBillingAddress = await latestOrderBillingAddressTask;

            var latestOrder = _mapper.Map<AdminLatestOrderDto>(latestOrderData);
            latestOrder.User = _mapper.Map<AdminLatestOrderUserDto>(latestOrderUser);
            latestOrder.ShippingOrderAddress = _mapper.Map<AddressDto>(latestOrderShippingAddress);
            latestOrder.BillingOrderAddress = _mapper.Map<AddressDto>(latestOrderBillingAddress);

            return latestOrder;
        }

        public async Task<List<OrderedProductDto>> GetAdminLatestOrderProductsAsync(int orderId)
        {
            var latestOrderProductsData = await _adminRepository.GetLatestOrderProductsAsync(orderId);

            return _mapper.Map<List<OrderedProductDto>>(latestOrderProductsData);
        }

        public async Task<AdminOverviewDto> GetAdminOverviewAsync()
        {
            var overviewDataAsync = _adminRepository.GetOverviewAsync();
            var newCustomersAsync = _adminRepository.GetOverviewNewCustomersAsync();

            await Task.WhenAll(overviewDataAsync, newCustomersAsync);

            var overviewData = await overviewDataAsync;
            var newCustomers = await newCustomersAsync;

            overviewData.NewCustomers = newCustomers;

            return _mapper.Map<AdminOverviewDto>(overviewData);
        }
    }
}
