import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        QuickSand: ["QuickSand", "sans-serif"],
        Baloo: ["Baloo Bhaina 2", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Balooc: ["Baloo Chettan 2", "sans-serif"],
      },
      colors: {
        'custom-red':'#FF0066',
        'custom-white':'#FFFFFF',
        'black':'#272727',
        'custom-black':'#3B3B3B',
        'b-black':'#000000',
        'grey':'#5F5F5F',
      },
      fontSize: {
        '12': '12px',
        '13': '13px',
        '14': '14px',
        '15': '15px',
        '16': '16px',
        '18': '18px',
        '22': '22px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
