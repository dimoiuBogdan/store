using AutoMapper;
using store_api.Store.Core.Dtos.AddressDtos;

namespace store_api.Store.Core.Profiles
{
    public class AddressProfile : Profile
    {
        public AddressProfile()
        {
            CreateMap<AddressModel, AddressDto>().ReverseMap();
        }
    }
}
