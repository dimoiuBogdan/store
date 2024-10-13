import "@testing-library/jest-dom";
import AdminNavbarHelper from "../../[locale]/(pages)/admin/components/AdminNavbar/helpers/admin-navbar.helper";

const { getPageTitle, getTranslatedTitle } = AdminNavbarHelper;

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
    expect(getPageTitle("")).toBe("");
  });

  it("should handle paths with only slashes", () => {
    expect(getPageTitle("/")).toBe("");
    expect(getPageTitle("//")).toBe("");
  });
});

describe("getTranslatedTitle", () => {
  const mockTranslate = jest.fn((key) => key);

  beforeEach(() => {
    mockTranslate.mockClear();
  });

  it("should return 'sidebar.overview' for admin path", () => {
    expect(getTranslatedTitle("/admin", mockTranslate)).toBe(
      "sidebar.overview",
    );
    expect(mockTranslate).toHaveBeenCalledWith("sidebar.overview");
  });

  it("should return translated title for other paths", () => {
    expect(getTranslatedTitle("/admin/dashboard", mockTranslate)).toBe(
      "dashboard.title",
    );
    expect(mockTranslate).toHaveBeenCalledWith("dashboard.title");

    expect(getTranslatedTitle("/admin/users", mockTranslate)).toBe(
      "users.title",
    );
    expect(mockTranslate).toHaveBeenCalledWith("users.title");
  });

  it("should handle paths with trailing slashes", () => {
    expect(getTranslatedTitle("/admin/settings/", mockTranslate)).toBe(
      "settings.title",
    );
    expect(mockTranslate).toHaveBeenCalledWith("settings.title");
  });

  it("should handle empty paths", () => {
    expect(getTranslatedTitle("", mockTranslate)).toBe(".title");
    expect(mockTranslate).toHaveBeenCalledWith(".title");
  });
});
