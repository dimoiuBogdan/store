using Npgsql;
using store_api.Store.Core.Services;
using store_api.Store.Core.Services.IServices;
using store_api.Store.Data.Helpers;
using store_api.Store.Data.Repositories.Admin;
using store_api.Store.Data.Repositories.IRepositories;

namespace store_api.Store.Api.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(
            this IServiceCollection services,
            IConfiguration config
        )
        {
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();

            services.AddServicesAndRepositories();
            services.AddCorsPolicy();

            return services;
        }


        private static IServiceCollection AddServicesAndRepositories(this IServiceCollection services)
        {
            services.AddScoped<IAdminProductsRepository, AdminProductsRepository>();
            services.AddScoped<IAdminRepository, AdminRepository>();

            services.AddScoped<IAdminService, AdminService>();
            services.AddScoped<IAdminProductsService, AdminProductsService>();

            services.AddScoped<IAddressRepository, AddressRepository>();

            return services;
        }

        private static IServiceCollection AddCorsPolicy(this IServiceCollection services)
        {
            services.AddCors(opt =>
            {
                opt.AddPolicy(
                    "CorsPolicy",
                    policy =>
                    {
                        policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("*");
                    }
                );
            });
            return services;
        }

        public static void ConfigureServices(
            this IServiceCollection services,
            IConfiguration configuration
        )
        {
            services.AddControllers();

            services.AddApplicationServices(configuration);

            var connectionString = ConnectionStringHelper.BuildSupabaseConnectionString(
                configuration
            );
            services.AddTransient<NpgsqlConnection>(_ => new NpgsqlConnection(connectionString));

            services.AddAutoMapperProfiles();

            CustomTypeMappingExtensions.ConfigureCustomTypeMappings();
        }
    }
}
