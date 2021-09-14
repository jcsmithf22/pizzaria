module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        main: ["Roboto"],
        header: ["Nunito"],
        "main-semibold": ["RobotoSemiBold"],
      },
      rotate: {
        270: "270deg",
      },
      spacing: {
        xsmax: "50vh",
      },
    },
  },
  variants: {
    extend: {
      rotate: ["group-hover"],
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
