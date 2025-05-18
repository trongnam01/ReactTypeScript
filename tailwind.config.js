// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Đường dẫn đến file React/TypeScript
  ],
  theme: {
    extend: {
      colors: {
        'base': 'var(--base-color)',
      }
    },
  },
  plugins: [],
};
