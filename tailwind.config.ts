import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: { min: '0px', max: '639px' },
      md: { min: '640px', max: '767px' },
      lg: { min: '768px', max: '1023px' },
      xl: { min: '1024px', max: '1279px' },
      xl2: { min: '1280px', max: '1479px' },
      xl3: { min: '1480px', max: '1524px' },
      xl4: { min: '1525px', max: '1599px' },
      xl5: { min: '1600px', max: '1719px' },
    },
    extend: {
      animation: {
        'fade-in-right': 'fadeInRight 1s ease-in-out',
        'fade-in-left': 'fadeInLeft 1s ease-in-out',
      },
      keyframes: {
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(300px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-300px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        '.textAlignCenter': {
          'text-align': '-webkit-center',
        },
      });
    },
  ],
};
export default config;
