import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px', // Min-width for small devices
        md: '768px', // Min-width for medium devices
        // lg: '1024px', // Min-width for large devices
        // xl: '1280px', // Min-width for extra-large devices
        la: { max: '767px' },
        cx: { max: '600px' }, // Custom: Max width 600px for small screens
        ms: { min: '601px', max: '711px' }, // Custom: Between 601px and 711px
        df: { min: '712px', max: '832px' }, // Custom: Between 712px and 832px
        ax: { max: '400px' }, // Custom: Max width 400px for very small screens
        ex: { max: '848px' },
        zx: { max: '500px' },
        'max-md': { raw: 'not all and (min-width: 768px)' },
        'max-430': { max: '430px' }, // Custom breakpoint for max-width: 430px
        'max-360': { max: '360px' }, // Custom breakpoint for max-width: 360px
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      boxShadow: {
        'white-bottom': '0 4px 15px rgb(255, 255, 255)',
      },
      borderImage: {
        'gradient-border': 'linear-gradient(90deg, #FFFFFF 0%, rgba(153, 153, 153, 0.25) 102.64%)',
      },
      textHeader: '#3C3C3C',
      textSecondary: '#0E0E0E',
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const headerUtilities = {
        '.text-header': {
          fontSize: '1.125rem', // 18px
          fontWeight: '500', // Bold
          lineHeight: '1.5rem', // Tight line height
          color: '#3C3C3C', // Text color
          marginBottom: '1rem', // Spacing
        },
        '.text-header-active': {
          fontSize: '1.125rem', // 18px
          fontWeight: '500', // Bold
          lineHeight: '1.5rem', // Tight line height
          color: '#0E0E0E', // Text color
          marginBottom: '1rem', // Spacing
        },
      };
      addUtilities(headerUtilities);
    }),
  ],
} satisfies Config;
