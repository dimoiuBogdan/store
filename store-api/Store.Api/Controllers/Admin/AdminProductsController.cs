using Microsoft.AspNetCore.Mvc;
using store_api.Store.Core.Services.IServices;
using store_api.Store.Core.Dtos.AdminDtos;

namespace store_api.Store.Api.Controllers.Admin
{
    [ApiController]
    [Route("admin/products")]
    public class AdminProductsController : ControllerBase
    {
        private readonly IAdminProductsService _adminProductsService;

        public AdminProductsController(IAdminProductsService adminProductsService)
        {
            _adminProductsService = adminProductsService;
        }

        [HttpGet]
        public async Task<ActionResult<List<ProductDto>>> GetAllProducts()
        {
            var products = await _adminProductsService.GetAllProductsAsync();

            return Ok(products);
        }
    }
}