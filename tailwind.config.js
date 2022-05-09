module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  darkMode: "class",
  theme: {
    screens: {
      tablet: "725px",
      desktop: "1440px",
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    extend: {
      backgroundImage: {
        header: "url('./assets/images/bg-mobile-light.jpg')",
        "header-dark": "url('./assets/images/bg-mobile-dark.jpg')",
        "header-desktop": "url('./assets/images/bg-desktop-light.jpg')",
        "header-desktop-dark": "url('./assets/images/bg-desktop-dark.jpg')",
      },
    },
  },
  plugins: [],
};
