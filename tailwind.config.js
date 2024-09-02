/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgLeft: "url('img/bg-main-desktop.png')",
      },
    },
  },
  plugins: [],
};
