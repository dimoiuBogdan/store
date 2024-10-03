using store_api.Store.Core.Profiles;

namespace store_api.Store.Api.Extensions;

public static class AutoMapperExtensions
{
    public static void AddAutoMapperProfiles(this IServiceCollection services)
    {
        services.AddAutoMapper(typeof(AdminProfile));
    }
}
