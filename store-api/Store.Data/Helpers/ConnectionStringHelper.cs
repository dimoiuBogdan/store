namespace store_api.Store.Data.Helpers;

public static class ConnectionStringHelper
{
    public static string BuildSupabaseConnectionString(IConfiguration configuration)
    {
        return @$"Host={configuration["DATABASE_HOST_SUPABASE"]};
                  Port={configuration["DATABASE_PORT_SUPABASE"]};
                  Database={configuration["DEFAULT_DATABASE_NAME"]};
                  User Id={configuration["DATABASE_USERNAME_SUPABASE"]};
                  Password={configuration["DATABASE_PASSWORD_SUPABASE"]};";
    }
}
