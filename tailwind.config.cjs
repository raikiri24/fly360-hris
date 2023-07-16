/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  important: true,
  theme: {
    extend: {
      fontFamily: {
        custom: ['Noir', 'sans-serif']
      },
      backgroundImage: {
        'r-o': "url('/src/assets/r-o.jpg')",
        'p-t': "url('/src/assets/p-t.jpg')",
        'c-b': "url('/src/assets/c-b.jpg')",
        't-d': "url('/src/assets/t-d.jpg')",
        'e-r': "url('/src/assets/e-r.jpg')",
        'e-e': "url('/src/assets/e-e.jpg')",
        'fly-404': "url('/src/assets/fly-404.png')"
      }
    }
  },
  plugins: []
};
