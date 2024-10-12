import { getCurrentPathWithoutLang } from "../../common/utils/utils";

describe("getCurrentPathWithoutLang", () => {
  it("should remove the language prefix from the path", () => {
    expect(getCurrentPathWithoutLang("/en/about")).toBe("/about");
    expect(getCurrentPathWithoutLang("/fr/contact")).toBe("/contact");
  });

  it("should handle paths with multiple segments", () => {
    expect(getCurrentPathWithoutLang("/en/blog/post-1")).toBe("/blog/post-1");
    expect(getCurrentPathWithoutLang("/de/products/category/item")).toBe(
      "/products/category/item",
    );
  });

  it("should return root path when only language is present", () => {
    expect(getCurrentPathWithoutLang("/en")).toBe("/");
    expect(getCurrentPathWithoutLang("/fr/")).toBe("/");
  });

  it("should handle paths without language prefix", () => {
    expect(getCurrentPathWithoutLang("/about")).toBe("/about");
    expect(getCurrentPathWithoutLang("/")).toBe("/");
  });

  it("should handle empty string", () => {
    expect(getCurrentPathWithoutLang("")).toBe("/");
  });
});
