import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#162033",
        navy: "#12355B",
        steel: "#4B6F8F",
        line: "#D8E1EA",
        paper: "#F7FAFC",
        moss: "#58735E"
      },
      boxShadow: {
        card: "0 14px 35px rgba(22, 32, 51, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
