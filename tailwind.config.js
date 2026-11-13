/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#17231D',
          darker: '#0F1813',
          forest: '#113525',
          forestHover: '#0B2419',
          accentGreen: '#E4F1E8',
          accentGreenLight: '#F3F9F5',
          accentGreenBorder: '#C8E0D1',
          accentYellow: '#FFF3C4',
          accentYellowDark: '#E2BA46',
          muted: '#52665B',
          mutedLight: '#85998E',
          cardBg: '#FFFFFF',
          borderSubtle: '#E8EFEA',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        quote: ['"Playfair Display"', 'Georgia', 'serif'],
        casual: ['"Caveat"', '"Kalam"', 'cursive', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(23, 35, 29, 0.05), 0 1px 4px -1px rgba(23, 35, 29, 0.03)',
        'soft': '0 10px 30px -5px rgba(23, 35, 29, 0.06), 0 4px 10px -2px rgba(23, 35, 29, 0.03)',
        'soft-lg': '0 20px 40px -10px rgba(23, 35, 29, 0.08), 0 8px 16px -4px rgba(23, 35, 29, 0.04)',
        'glow-green': '0 0 25px -5px rgba(228, 241, 232, 0.8)',
      }
    },
  },
  plugins: [],
}
