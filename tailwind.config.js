/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DomaineDisplayNarrow: "Domaine Display Narrow",
        SofiaSansExtraCondensed: 'Sofia Sans Extra Condensed',
      },

      backgroundImage: {
        White: "url('/images/writings/WhiteBG.svg')",
        Black: "url('/images/writings/BlackBG.svg')",
        Doodle: "url('/images/portfolio/BG.webp')",
        People: "url('/images/contact/people.webp')",
      },
      colors: {
        academicColorDark: "#022D6F",
        academicColorLight: "#1A5192",
        academicColorVeryLight: "#76A7D2",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      textColor: ["visited", "hover"],
    },
  },
};
