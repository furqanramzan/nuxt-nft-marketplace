import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
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
        primary: colors.orange,
        secondary: colors.yellow,
      },
    },
  },
};

export default config;
