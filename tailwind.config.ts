import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        navy: "rgb(var(--navy) / <alpha-value>)",
        steel: "rgb(var(--steel) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        segment: "rgb(var(--segment) / <alpha-value>)",
        contact: "rgb(var(--contact) / <alpha-value>)",
        void: "rgb(var(--void) / <alpha-value>)",
        lilac: "rgb(var(--lilac) / <alpha-value>)"
      },
      boxShadow: {
        card: "0 18px 42px rgba(0, 0, 0, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;
