import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ro"],
  defaultLocale: "en",
});

export const config = {
  matcher: [`/(en|ro)/:path*`, "/((?!_next|_vercel|.*\\..*).*)"],
};
