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
        Balooc: ["Baloo Chettan 2", "sans-serif"],
        QuickSand: ["Quicksand", "sans-serif"],
        Baloo: ["Baloo Bhaina 2", "sans-serif"],
        Baloo2: ["Baloo 2", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        'custom-red': '#FF0066',
        'custom-white': '#FFFFFF',
        'black': '#272727',
        'custom-black': '#3B3B3B',
        'b-black': '#000000',
        'grey': '#5F5F5F',
        'pink': '#FF0066',
        'bb': '#333333',
        'p': '#FF006666',
      },
      fontSize: {
        '12': '12px',
        '13': '13px',
        '14': '14px',
        '15': '15px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '22': '22px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '36': '36px',
        '40': '40px',
        '72': '72px',
        '76': '76px',
      },
      backgroundImage: {
        hero: "url('/shape1.png')",
        section4: "url('/O-nas.jpg')",
        video: "url('/video7.jpg')",
        img1: "url('/img1.jpg')",
        img2: "url('/img2.jpg')",
        img3: "url('/img3.jpg')",
        img4: "url('/img4.jpg')",
        eimg1: "url('/img4.jpg')",
        eimg2: "url('/img4.jpg')",
        eimg3: "url('/img4.jpg')",
      },
      screens: {
        'xl': '1400px',
        'large': '1200px',
        'fourK': '2000px'
      }
    }
  },
  plugins: [],
};
export default config;
