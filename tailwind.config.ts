import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      orangeIA: '#C06014',
      darkGreyIA: '#424642',
      greenIA: '#719192',
      bgIA: '#F6F6F6',
      bgSecondIA: '#EAE9E9',
      fredIA: '#CD3F3E',
      tgreen: '#8AAE92',
      zinc: '#d4d4d8',
    }
  },
  plugins: [],
};
export default config;
