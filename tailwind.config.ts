import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Lora: [
        "Lora",
        "sans-serif",
      ] /*second one is for case when 1st is not supported*/,
      LoraIttalic: [
        "LoraIttalic",
        "sans-serif",
      ] /*second one is for case when 1st is not supported*/,
    },
    extend: {
      colors: {
        backgroundPrimary: "var(--backgroundPrimary)",
        backgroundSecondary: "var(--backgroundSecondary)",
        accent: "var(--accent)",
        text: "var(--text)",
      },
    },
  },
  plugins: [],
};
export default config;
