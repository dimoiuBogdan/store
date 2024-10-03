using AutoMapper;
using store_api.Store.Core.Dtos.CategoryDtos;

namespace store_api.Store.Core.Profiles
{
    public class CategoryProfile : Profile
    {
        public CategoryProfile()
        {
            CreateMap<CategoryModel, CategoryDto>().ReverseMap();
        }
    }
}