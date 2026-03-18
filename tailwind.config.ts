import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366f1",
          dark: "#4f46e5",
        },
        secondary: {
          DEFAULT: "#f59e0b",
          dark: "#d97706",
        },
        accent: {
          DEFAULT: "#10b981",
          dark: "#059669",
        },
      },
    },
  },
  plugins: [],
};

export default config;
