const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "SF Pro Text",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
      ],
    },

    extend: {
      fontFamily: {
        Euclid: "Euclid",
      },
      colors: {
        "warning-soft": "#FFEDE3",
        "warning-default": "#F7936F",
        "primary-soft": "#FFE6D6",
        "primary-50": "#FFEDE6",
        primary: "#FF4500",
        "soft-orange": "#F2B199",
        "light-grey": "#333333",
        grey: "#666666",
        "darker-primary": "#E63E00",
        error: "#F16063",
        "success-soft": "#DEFFEE",
        "success-dark": "#4AAE8C",
        "pending-soft": "#FDF6EF",
        "danger-10": "#FCEAE8",
        "secondary-light": "#EBF2FA",
        "secondary-dark": "#A6B7D4",
        "tertiary-dark": "#425D8A",
        "black-30": "#9C9C9C",
        "black-60": "#313134",
        "black-80": "#242428",
      },
      boxShadow: {
        "landing-page-card": "0px 6px 47px 0px #264E761A",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".card": {
          padding: theme("spacing.5"),
          backgroundColor: theme("colors.white"),
        },

        ".input-container": {
          borderStyle: theme("borderStyle.solid"),
          borderRadius: theme("borderRadius.md"),
          borderColor: theme("colors.primary-50"),
          borderWidth: "1px",
          "&:focus-within": {
            borderColor: theme("colors.primary"),
            borderWidth: "1px",
          },
        },

        ".input": {
          borderStyle: theme("borderStyle.solid"),
          borderRadius: theme("borderRadius.md"),
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: theme("spacing.5"),
          paddingRight: theme("spacing.5"),
          borderWidth: "1px",
          borderColor: theme("colors.primary-50"),
          fontSize: "14px",
          "&:focus": {
            borderColor: theme("colors.primary"),
            borderWidth: "1px",
          },
        },

        button: {
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: theme("spacing.5"),
          paddingRight: theme("spacing.5"),
          borderRadius: theme("borderRadius.md"),
          fontSize: "0.875rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: theme("spacing.2"),
          "&:hover": {
            cusor: "pointer",
          },
          "&:active": {
            cusor: "pointer",
          },
        },

        ".outlined-btn": {
          backgroundColor: "#2673D100",
          borderColor: theme("colors.primary-50"),
          borderWidth: "0.09rem",
          color: theme("colors.primary"),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },

        label: {
          fontSize: "0.875rem",
          color: theme("colors.black-30"),
          marginBottom: theme("spacing.2"),
        },

        ".form-error": {
          color: theme("colors.error"),
          fontSize: "0.875rem",
          paddingLeft: theme("spacing.4"),
          paddingRight: theme("spacing.4"),
          marginTop: theme("spacing.2"),
        },

        ".form-row": {
          // display: "flex",
          // flexDirection: "column",
          marginBottom: theme("spacing.5"),
          width: "100%",
        },

        ".table-field": {
          fontWeight: theme("fontWeight.medium"),
          textAlign: "left",
        },

        td: {
          paddingTop: theme("spacing.5"),
        },
      });
    }),
  ],
};
