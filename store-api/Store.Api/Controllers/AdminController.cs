using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using store_api.Store.Core.Dtos.AdminDtos;
using store_api.Store.Core.Services.IServices;
using store_api.Store.Data.Models.ProductModels;

namespace store_api.Store.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly IAdminService _adminService;

        public AdminController(IAdminService adminService)
        {
            _adminService = adminService;
        }

        [HttpGet("best-products")]
        public async Task<ActionResult<List<AdminBestProductsDto>>> GetAdminBestProducts()
        {
            var bestProductsData = await _adminService.GetAdminBestProductsAsync();
            return Ok(bestProductsData);
        }

        [HttpGet("best-categories")]
        public async Task<ActionResult<List<AdminBestCategoriesDto>>> GetAdminBestCategories()
        {
            var bestCategoriesData = await _adminService.GetAdminBestCategoriesAsync();
            return Ok(bestCategoriesData);
        }

        [HttpGet("latest-orders")]
        public async Task<ActionResult<List<AdminLatestOrderDto>>> GetAdminLatestOrders()
        {
            var latestOrdersData = await _adminService.GetAdminLatestOrdersAsync();
            return Ok(latestOrdersData);
        }

        [HttpGet("latest-orders/{orderId}")]
        public async Task<ActionResult<AdminLatestOrderDto>> GetAdminLatestOrderById(int orderId)
        {
            var latestOrderData = await _adminService.GetAdminLatestOrderByIdAsync(orderId);
            return Ok(latestOrderData);
        }

        [HttpGet("order-products/{orderId}")]
        public async Task<ActionResult<List<OrderedProductModel>>> GetAdminLatestOrderProducts(int orderId)
        {
            var latestOrderProductsData = await _adminService.GetAdminLatestOrderProductsAsync(orderId);

            return Ok(latestOrderProductsData);
        }

        [HttpGet("overview")]
        public async Task<ActionResult<AdminOverviewDto>> GetAdminOverview()
        {
            var overviewData = await _adminService.GetAdminOverviewAsync();
            return Ok(overviewData);
        }
    }
}
