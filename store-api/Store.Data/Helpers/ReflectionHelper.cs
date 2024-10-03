using System.ComponentModel;
using System.Reflection;

namespace store_api.Store.Data.Helpers;

public static class ReflectionHelper
{
    public static PropertyInfo? GetPropertyByDescription(Type type, string columnName)
    {
        return type.GetProperties()
            .FirstOrDefault(prop => GetDescriptionFromAttribute(prop) == columnName);
    }

    private static string? GetDescriptionFromAttribute(PropertyInfo prop)
    {
        var attribute = prop.GetCustomAttribute<DescriptionAttribute>();
        return attribute?.Description;
    }
}
