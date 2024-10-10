import { render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import AdminSidebar from "../../[lang]/(pages)/admin/components/AdminSidebar";

// Mock the next/navigation module
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("AdminSidebar", () => {
  it("renders the sidebar with all menu items", () => {
    (usePathname as jest.Mock).mockReturnValue("/admin");

    render(<AdminSidebar />);

    expect(screen.getByText("My Store")).toBeInTheDocument();
    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Orders")).toBeInTheDocument();
    expect(screen.getByText("Customers")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Help")).toBeInTheDocument();
  });

  it("highlights the active menu item based on current path", () => {
    (usePathname as jest.Mock).mockReturnValue("/admin/products");

    render(<AdminSidebar />);

    const activeMenuItem = screen.getByText("Products").closest("a");
    expect(activeMenuItem).toHaveClass("bg-zinc-200/30");
    expect(activeMenuItem).toHaveClass("shadow-md");
  });

  it("does not highlight inactive menu items", () => {
    (usePathname as jest.Mock).mockReturnValue("/admin/products");

    render(<AdminSidebar />);

    const inactiveMenuItem = screen.getByText("Orders").closest("a");
    expect(inactiveMenuItem).not.toHaveClass("bg-zinc-200/30");
    expect(inactiveMenuItem).not.toHaveClass("shadow-md");
  });
});
