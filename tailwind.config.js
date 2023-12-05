/** @type {import('tailwindcss').Config} */
export default = {
  content: ["index.html","./src/**/*.{jsx,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
      inter: ["Inter", "serif"],
    }},
  },
  plugins: [],
}

