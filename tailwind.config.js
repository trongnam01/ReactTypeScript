// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Đường dẫn đến file React/TypeScript
  ],
  theme: {
    extend: {
      colors: {
        'base': 'var(--base-color)',
      },
      boxShadow: {
        'sd-b': '0px 1px 5px #394056',
        'my-unique-shadow': '5px 5px 10px rgba(100, 0, 200, 0.3)',
        // Thêm các đổ bóng tùy chỉnh khác của bạn ở đây
      },
    },
  },
  plugins: [],
};
