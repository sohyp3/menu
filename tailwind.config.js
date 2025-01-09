/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A505E',
          "bg": '#ececec',
        },
      },
    },
  },

  plugins: []
};
