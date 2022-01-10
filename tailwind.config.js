module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./safeclasses.txt",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "digit-background": "url('/images/background.png')",
        "skyscraper-background": "url('/images/skyscraper.gif')",
      },
    },
    fontFamily: {},
  },
};
