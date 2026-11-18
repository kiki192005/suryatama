import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        suryatama: {
          navy: {
            50: "#eef2f9",
            100: "#d9e2f2",
            200: "#b3c6e5",
            300: "#8da9d8",
            400: "#4271be",
            500: "#012060", // Primary Corporate Navy
            600: "#011c55",
            700: "#011746",
            800: "#011135",
            900: "#000b23",
          },
          red: {
            50: "#fff0f0",
            100: "#ffdede",
            200: "#ffbebe",
            300: "#ff8d8d",
            400: "#ff4645",
            500: "#fd0100", // Accent Corporate Red
            600: "#df0100",
            700: "#b90100",
            800: "#920100",
            900: "#6d0100",
          },
          gray: {
            50: "#f8f9fa",
            100: "#f1f3f5",
            200: "#e9ecef",
            300: "#dee2e6",
            400: "#ced4da",
            500: "#7f7f7f", // Secondary Corporate Gray
            600: "#6c757d",
            700: "#495057",
            800: "#343a40",
            900: "#212529",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
