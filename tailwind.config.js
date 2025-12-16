/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1677ff', // Màu chủ đạo (trùng với Antd)
        secondary: '#ff0000', // Màu phụ
        'text-main': '#1677ff', // Màu chữ chính
        'text-light': '#888888', // Màu chữ phụ
      },
    },
  },
  plugins: [],
}
