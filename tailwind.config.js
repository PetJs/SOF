/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['YourCustomFont', 'system-ui', 'sans-serif'],
        serif: ['YourSerifFont', 'serif'],
        mono: ['YourMonoFont', 'monospace'],
      },
    },
  },
  plugins: [],
}