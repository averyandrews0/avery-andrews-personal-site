import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#F7F8FA",
        navy: "#89A7FF",
        steel: "#7F8EAC",
        line: "#2A2D35",
        paper: "#14161C",
        moss: "#C5AAFF",
        void: "#0C0D10",
        lilac: "#C5AAFF",
        mint: "#7EE0C5"
      },
      boxShadow: {
        card: "0 18px 42px rgba(0, 0, 0, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;
