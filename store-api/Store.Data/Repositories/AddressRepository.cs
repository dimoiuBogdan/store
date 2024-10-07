using Dapper;
using Npgsql;
using store_api.Store.Data.Helpers;
using store_api.Store.Data.Repositories.IRepositories;

public class AddressRepository : IAddressRepository
{
    private readonly string _connectionString;

    public AddressRepository(IConfiguration configuration)
    {
        _connectionString = ConnectionStringHelper.BuildSupabaseConnectionString(configuration);
    }

    private NpgsqlConnection GetConnection()
    {
        return new NpgsqlConnection(_connectionString);
    }

    public async Task<AddressModel> GetAddressByIdAsync(int addressId)
    {
        const string sql = @"
            SELECT a.address_id, a.street, a.city, a.county, a.postcode, a.country, a.number
            FROM address a
            WHERE a.address_id = @addressId";

        await using var connection = GetConnection();

        var address = await connection.QueryFirstOrDefaultAsync<AddressModel>(sql, new { addressId });

        return address;
    }
}
