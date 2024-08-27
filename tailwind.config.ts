import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
