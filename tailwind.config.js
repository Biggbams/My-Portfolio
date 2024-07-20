/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midpage: {1: "#FFDE4D"}
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl:'1.25rem',
      '2xl':'1.563',
      '3xl':'1.953rem',
      '4xl':'2.441rem',
      '5xl':'3.052rem',
      '6xl':'6.5rem',
      '7xl':'7.5rem',
      '8xl':'8.5rem',
      '9xl':'12.5rem',
    }
  },
  plugins: [],
}

