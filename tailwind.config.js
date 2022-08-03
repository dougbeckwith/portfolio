module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F2F2F2',
          // 100: '#f9fafb',
          200: '#f3f4f6',
          300: '#e5e7eb',
          400: '#d1d5db',
          500: '#9ca3af',
          600: '#393A39',
          700: '#1E1E1E',
        },
        teal: {
          100: '#119c9c',
          200: '#078080',
        },
        dark: {
          100: '#3e3e42',
          200: '#2d2d30',
          300: '#252526',
          400: '#222222',
          500: '#1E1E1E',
        },
        placeholder: '#888888',
      },
    },
  },
  plugins: [],
}
