using AutoMapper;
using store_api.Store.Core.Dtos.AdminDtos;
using store_api.Store.Core.Dtos.ProductDtos;
using store_api.Store.Data.Models.ProductModels;

namespace store_api.Store.Core.Profiles
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<ProductModel, ProductDto>().ReverseMap();
            CreateMap<ProductModel, CreateProductDto>().ReverseMap();
        }
    }
}
