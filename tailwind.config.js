/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A3DDCB",   // rgb(163, 221, 203) teal
        secondary: "#E6B566", // rgb(230, 181, 102) orange
        tertiary: "#E8E9A1",  // rgb(232, 233, 161) yellow
        highlight: "#E5707E", // rgb(229, 112, 126) pink
      },
    },
  },
  plugins: [],
}
