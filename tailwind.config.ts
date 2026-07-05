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
        brand: {
          DEFAULT: "#ff5361",
          hover: "#e64957",
          light: "#fff0f2",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f5f5f5",
          dark: "#1a1a2e",
          "dark-muted": "#16213e",
        },
        text: {
          DEFAULT: "#333333",
          muted: "#555555",
          subtle: "#999999",
          dark: "#e2e8f0",
          "dark-muted": "#94a3b8",
          "dark-subtle": "#64748b",
        },
        border: {
          DEFAULT: "#cccccc",
          light: "#dddddd",
          dark: "#334155",
          "dark-light": "#475569",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        pill: "50px",
        card: "12px",
      },
      boxShadow: {
        card: "0 0 30px rgba(0,0,0,0.3)",
        nav: "0 5px 10px rgba(0,0,0,0.09)",
        "dark-card": "0 0 30px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
