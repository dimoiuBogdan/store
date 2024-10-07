namespace store_api.Store.Data.Repositories.IRepositories;

public interface IAddressRepository
{
    Task<AddressModel> GetAddressByIdAsync(int addressId);
}

