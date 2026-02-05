import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Tomato_Grotesk"', 'system-ui', 'sans-serif'],
      'custom':['"Tomato_Grotesk"']
    },
    extend: {
      textShadow: {
        '2xl': '2px 22px 4px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      writingMode: {
        'vertical-rl': 'vertical-rl',
      }
    },
  },
  plugins: [],
};
export default config;
