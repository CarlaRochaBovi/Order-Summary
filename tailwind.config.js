/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(223, 47%, 23%)",
        "primary-blue": " hsl(245, 75%, 52%)",
        "desatured-blue-1": " hsl(224, 23%, 55%)",
        "desatured-blue-2": " hsl(225, 100%, 98%)",
        "desatured-blue-3": " hsl(225, 100%, 94%)"
      },
    },
  },
  plugins: [],
};

