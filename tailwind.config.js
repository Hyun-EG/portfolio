module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["duration-[3000ms]"],
  theme: {
    extend: {
      colors: {
        sky: "#86A6C7",
        orange: "#D88062",
        blue: "#168CCB",
        purple: "#C586C0",
        olive: "#D2D8A6",
        yellow: "#FFEA00",
        grey: "#5B5D68",
        green: "#6A9955",
        bgBlack: "#1e1e1e",
      },
    },
  },
  plugins: [],
};
