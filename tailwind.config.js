/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        drawer: "#161717",
        background: "#242424",
        title: "#FFFFFF",
        scale1: "#4EE2B5",
        scale2: "#A178F1",
        scale3: "#2EC9FF",
      },
      width: {
        297: "227px",
        811: "675px",
        925: "794px",
        400: "390px",
      },
      height: {
        336: "256px",
        155: "155px",
        120: "120px",
        399: "279px",
        8: '8px',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
