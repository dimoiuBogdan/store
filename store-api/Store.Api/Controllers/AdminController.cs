using Microsoft.AspNetCore.Mvc;
using store_api.Store.Core.Dtos.AdminDtos;
using store_api.Store.Core.Services.IServices;

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
    }
}
