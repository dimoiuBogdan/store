using Dapper;
using System.ComponentModel;
using System.Reflection;

namespace store_api.Store.Api.Extensions;

public static class CustomTypeMappingExtensions
{
    public static void ConfigureCustomTypeMappings()
    {
        var assembly = Assembly.GetAssembly(typeof(Program));
        if (assembly != null)
        {
            var types = assembly
                .GetTypes()
                .Where(t => t.IsClass && t.Name.EndsWith("Model"));

            foreach (var type in types)
            {
                var typeMap = new CustomPropertyTypeMap(
                    type,
                    (type, columnName) =>
                        type.GetProperties()
                            .FirstOrDefault(prop => GetDescriptionFromAttribute(prop) == columnName)
                );
                SqlMapper.SetTypeMap(type, typeMap);
            }
        }
    }

    private static string GetDescriptionFromAttribute(MemberInfo member)
    {
        if (member == null)
            return null;

        var attrib = (DescriptionAttribute)
            Attribute.GetCustomAttribute(member, typeof(DescriptionAttribute), false);

        return attrib == null ? member.Name : attrib.Description;
    }
}
