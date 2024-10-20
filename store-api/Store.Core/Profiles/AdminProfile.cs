using AutoMapper;
using store_api.Store.Core.Dtos.AdminDtos;
using store_api.Store.Data.Models.ProductModels;
using store_api.Store.Data.Models.UserModels;

namespace store_api.Store.Core.Profiles
{
    public class AdminProfile : Profile
    {
        public AdminProfile()
        {
            CreateMap<ProductModel, AdminBestProductsDto>().ReverseMap();
            CreateMap<ProductImageModel, ProductImageDto>().ReverseMap();
            CreateMap<CategoryModel, AdminBestCategoriesDto>().ReverseMap();
            CreateMap<OrderModel, AdminLatestOrderDto>().ReverseMap();
            CreateMap<UserModel, AdminLatestOrderUserDto>().ReverseMap();
            CreateMap<OrderModel, AdminLatestOrderDetailsDto>().ReverseMap();
            CreateMap<OrderedProductModel, OrderedProductDto>().ReverseMap();
            CreateMap<AdminOverviewModel, AdminOverviewDto>().ReverseMap();
        }
    }
}
