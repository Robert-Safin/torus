import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bruno: "var(--font-bruno)",
        inter: "var(--font-inter)",
        geist: "var(--font-geist)",
        poppins: "var(--font-poppins)",
      },
      colors: {
        "theme-blue": "#636DFF",
        "theme-secondary-blue": "#B7BCFF",
        "bg-text-white": "#F5F5F7",
        "text-black": "#0C0C0C",
        "text-gray": "#4A4A4A",
        "card-white": "#FFFFFF",
        "line-gray": "#C9C9C9",
        "card-glass": "rgba(222, 224, 255, 0.06)",
        "glass-stroke": "rgba(255, 255, 255, 0.15)",
        "glass-solid": "#16161A",
      },
      screens: {
        phone: "375px",
        tablet: "768px",
        pc: "1024px",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
