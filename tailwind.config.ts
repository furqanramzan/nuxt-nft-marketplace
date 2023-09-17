import type { Config } from 'tailwindcss';
import flowbite from 'flowbite/plugin';

const config: Config = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [flowbite],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f4f3ff',
          '100': '#ebe9fe',
          '200': '#d9d7fd',
          '300': '#bdb6fc',
          '400': '#9c8df8',
          '500': '#6f4ff2',
          '600': '#6a3dea',
          '700': '#5b2bd6',
          '800': '#4c24b3',
          '900': '#3f1f93',
          '950': '#251263',
        },
        dark: {
          primary: '#131129',
          secondary: '#1D1932',
        },
        light: {
          primary: '#F2F2F2',
          secondary: '#FFFFFF',
        },
      },
    },
  },
};

export default config;
