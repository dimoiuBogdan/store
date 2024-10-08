const getPageTitle = (pathname: string) => {
  const pathSegments = pathname.split("/");

  const uppercasedFirstLetter =
    pathSegments[pathSegments.length - 1][0].toUpperCase();

  return `${uppercasedFirstLetter}${pathSegments[pathSegments.length - 1].slice(1)}`;
};

const AdminNavbarHelper = {
  getPageTitle,
};

export default AdminNavbarHelper;
