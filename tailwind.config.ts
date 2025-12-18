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
        primary: "#0056D8",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        cabin: ["Cabin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
