const getPageTitle = (pathname: string): string => {
  const pathSegments = pathname.split("/").filter(Boolean);

  if (pathSegments.length === 0) {
    return "";
  }

  const lastSegment = pathSegments[pathSegments.length - 1];
  return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
};

const getTranslatedTitle = (pathname: string, t: any): string => {
  const pageTitle = getPageTitle(pathname).toLowerCase();

  if (pageTitle === "admin") {
    return t("sidebar.overview");
  }

  const translatedTitle = t(`${pageTitle}.title`);

  return translatedTitle;
};

const AdminNavbarHelper = {
  getPageTitle,
  getTranslatedTitle,
};

export default AdminNavbarHelper;
