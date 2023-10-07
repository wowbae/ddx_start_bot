/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'] // здесь прописывается шрифт по умолчанию
      // serif: ['Merriweather', 'serif'],
    },
    container: {
      padding: '2rem',
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}