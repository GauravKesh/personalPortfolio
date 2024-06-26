/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      // that is animation class
      animation: {
        dzoom: "dzoom 6s ease-in",
      },
      // that is actual animation
      keyframes: {
        dzoom: {
          "0% ": { transform: "scale(0)" },
          "2%": { transform: "scale(0.02)" },
          "4%": { transform: "scale(0.04)" },
          "6%": { transform: "scale(0.06)" },
          "8%": { transform: "scale(0.08)" },
          "10%": { transform: "scale(0.1)" },
          "12%": { transform: "scale(0.12)" },
          "14%": { transform: "scale(0.14)" },
          "16%": { transform: "scale(0.16)" },
          "18%": { transform: "scale(0.18)" },
          "20%": { transform: "scale(0.2)" },
          "22%": { transform: "scale(0.22)" },
          "24%": { transform: "scale(0.24)" },
          "26%": { transform: "scale(0.26)" },
          "28%": { transform: "scale(0.28)" },
          "30%": { transform: "scale(0.3)" },
          "32%": { transform: "scale(0.32)" },
          "34%": { transform: "scale(0.34)" },
          "36%": { transform: "scale(0.36)" },
          "38%": { transform: "scale(0.38)" },
          "40%": { transform: "scale(0.4)" },
          "42%": { transform: "scale(0.42)" },
          "44%": { transform: "scale(0.44)" },
          "46%": { transform: "scale(0.46)" },
          "48%": { transform: "scale(0.48)" },
          "50%": { transform: "scale(0.5)" },
          "52%": { transform: "scale(0.52)" },
          "54%": { transform: "scale(0.54)" },
          "56%": { transform: "scale(0.56)" },
          "58%": { transform: "scale(0.58)" },
          "60%": { transform: "scale(0.6)" },
          "62%": { transform: "scale(0.62)" },
          "64%": { transform: "scale(0.64)" },
          "66%": { transform: "scale(0.66)" },
          "68%": { transform: "scale(0.68)" },
          "70%": { transform: "scale(0.7)" },
          "72%": { transform: "scale(0.72)" },
          "74%": { transform: "scale(0.74)" },
          "76%": { transform: "scale(0.76)" },
          "78%": { transform: "scale(0.78)" },
          "80%": { transform: "scale(0.8)" },
          "82%": { transform: "scale(0.82)" },
          "84%": { transform: "scale(0.84)" },
          "86%": { transform: "scale(0.86)" },
          "88%": { transform: "scale(0.88)" },
          "90%": { transform: "scale(0.9)" },
          "92%": { transform: "scale(0.92)" },
          "94%": { transform: "scale(0.94)" },
          "96%": { transform: "scale(0.96)" },
          "98%": { transform: "scale(0.98)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};

