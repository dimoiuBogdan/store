export const useViewport = (): "desktop" | "mobile" => {
  const DESKTOP_WIDTH = 1024;
  const MOBILE_WIDTH = 480;

  const width = window.innerWidth;

  if (width >= DESKTOP_WIDTH) return "desktop";
  if (width >= MOBILE_WIDTH) return "mobile";

  return "mobile";
};
