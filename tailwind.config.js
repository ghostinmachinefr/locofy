/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f0f3f6",
        mediumslateblue: "#3354f4",
        white: "#fff",
        gainsboro: {
          "100": "#e2e2e2",
          "200": "#d5d9dd",
        },
        lavenderblush: "#ffe5ee",
        firebrick: "#aa0000",
        darkslateblue: {
          "100": "#252c58",
          "200": "#20285a",
          "300": "rgba(37, 44, 88, 0.5)",
        },
        lightsteelblue: "#a3aed0",
        royalblue: "#597aff",
        darkgray: "#b3b3b3",
        dimgray: "#727272",
        steelblue: {
          "100": "#595e8a",
          "200": "rgba(89, 94, 138, 0.09)",
        },
        lavender: "rgba(212, 219, 252, 0.51)",
      },
      spacing: {},
      fontFamily: {
        lexend: "Lexend",
      },
      borderRadius: {
        "3xs": "10px",
        mini: "15px",
        "81xl": "100px",
        "6xl": "25px",
      },
    },
    fontSize: {
      sm: "14px",
      "sm-9": "13.9px",
      xl: "20px",
      base: "16px",
      xs: "12px",
      "2xs": "11px",
      mid: "17px",
      "3xl": "22px",
      lg: "18px",
      "7xl": "26px",
      "2xl": "21px",
      "11xl": "30px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq525: {
        raw: "screen and (max-width: 525px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
