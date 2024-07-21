/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midpage: {1: "#FFff"},
        background: {1: "#1A2130"},
        navbar: {1: "#151515"},
        text: {1: "#A91D3A"}
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl:'1.25rem',
      '2xl':'1.563',
      '3xl':'1.953rem',
      '4xl':'2.441rem',
      '5xl':'4.552rem',
      '6xl':'6.5rem',
      '7xl':'7.5rem',
      '8xl':'8.5rem',
      '9xl':'12.5rem',
    }
  },
  plugins: [],
}

