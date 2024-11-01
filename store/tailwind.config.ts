import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1d1c21",
        "primary-light": "e3efd3",
        primary: "#aec3b0",
        "primary-dark": "#6b8f71",
        "primary-darkest": "#345635",
        secondary: "#4b9c76",
      },
    },
  },
};
export default config;
