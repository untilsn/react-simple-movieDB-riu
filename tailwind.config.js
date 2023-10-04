/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#F62682",
        secondary: "#6F5CF1",
        "clr-primary": "hsl(0, 0%, 98%)",
        "clr-white": "hsl(0, 0%, 100%)",
        "clr-page-bg": "hsl(235, 21%, 11%)",
        "clr-card-bg": "hsl(235, 24%, 19%)",
        "clr-blue": "hsl(220, 98%, 61%)",
        "clr-green": "hsl(192, 100%, 67%)",
        "clr-pink": "hsl(280, 87%, 65%)",
        "clr-gb-1": "hsl(236, 33%, 92%)",
        "clr-gb-2": "hsl(234, 39%, 75%)",
        "clr-gb-3": "hsl(234, 11%, 52%)",
        "clr-gb-4": "hsl(237, 12%, 36%)",
        "clr-gb-5": "hsl(233, 14%, 35%)",
        "clr-gb-6": "hsl(235, 19%, 24%)",
        "clr-box-shadow": "hsl(0, 0%, 0%, 0.1)",
      },
    },
  },
  plugins: [],
};
