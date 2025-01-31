import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '898px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        saraswati: {
          primary: '#E6D5F7',    // Light purple
          secondary: '#B088F9',  // Medium purple
          accent: '#8B0AA5',     // Dark purple
          text: '#4A4A4A',       // Dark gray for text
          light: '#F9F6FF',      // Very light purple for backgrounds
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'custom-gradient': 'linear-gradient(150deg, #F9F6FF 1.28%, #E6D5F7 90.75%)',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
