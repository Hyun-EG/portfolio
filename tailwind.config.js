module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "duration-[500ms]",
    "bg-orange",
    "bg-blue",
    "bg-sky",
    "bg-purple",
    "bg-olive",
    "bg-yellow",
    "bg-grey",
    "bg-green",
  ],

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
      screens: {
        sm: "360px",
        md: "768px",
        lg: "1024px",
        xl: "1920px",
      },
    },
  },
  plugins: [],
};
