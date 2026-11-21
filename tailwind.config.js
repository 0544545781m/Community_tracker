/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Government & Civic Palette: Deep Executive Navy, Warm Gold, Emerald Green
        gov: {
          navy: {
            50: '#F0F4F8',
            100: '#D9E2EC',
            200: '#BCCCDC',
            300: '#9FB3C8',
            400: '#829AB1',
            500: '#627D98',
            600: '#486581',
            700: '#334E68',
            800: '#102A43',
            900: '#0A192F',
            950: '#050D1A',
          },
          gold: {
            DEFAULT: '#D97706',
            light: '#FDE68A',
            dark: '#B45309',
          },
          green: {
            DEFAULT: '#059669',
            light: '#D1FAE5',
            dark: '#047857',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
