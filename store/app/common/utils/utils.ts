import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

export const getCurrentPathWithoutLang = (path: string): string => {
  const parts = path.split("/");

  // Check if the path has at least two parts and the second part is a valid language code
  if (parts.length >= 2 && /^[a-z]{2}$/.test(parts[1])) {
    return "/" + parts.slice(2).join("/");
  }

  // If no language prefix is found, return the original path
  return path || "/";
};
