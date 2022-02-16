const colors = require("tailwindcss/colors");

module.exports = {
  content: [],
  theme: {
    colors,
    extend: {},
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
