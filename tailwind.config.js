// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-dark": "#0d1117",
        "secondary-dark": "#161b22",
        primary: "#608857",
      },
      backgroundImage: {
        avatar: "url('@/assets/images/avatar.jpg')",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [],
};
