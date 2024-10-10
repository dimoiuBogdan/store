import "@testing-library/jest-dom";
import AdminNavbarHelper from "../../[lang]/(pages)/admin/components/AdminNavbar/helpers/admin-navbar.helper";

const { getPageTitle } = AdminNavbarHelper;

describe("getPageTitle", () => {
  it("should capitalize the first letter of the last path segment", () => {
    expect(getPageTitle("/admin/dashboard")).toBe("Dashboard");
    expect(getPageTitle("/admin/users")).toBe("Users");
    expect(getPageTitle("/admin/settings")).toBe("Settings");
  });

  it("should handle single-segment paths", () => {
    expect(getPageTitle("/admin")).toBe("Admin");
    expect(getPageTitle("/dashboard")).toBe("Dashboard");
  });

  it("should handle paths with trailing slashes", () => {
    expect(getPageTitle("/admin/users/")).toBe("Users");
  });

  it("should handle empty paths", () => {
    expect(getPageTitle("")).toBe("Admin");
  });

  it("should handle paths with only slashes", () => {
    expect(getPageTitle("/")).toBe("Admin");
    expect(getPageTitle("//")).toBe("Admin");
  });
});
