import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  theme: {
    fontSize: {
      base: "1rem",
      h6: "1.188rem",
      h5: "1.438rem",
      h4: "1.75rem",
      h3: "2.062rem",
      h2: "2.5rem",
      h1: "3rem",
    },
    screens: {
      mobile: { max: "1280px" },
      pc: "1280px",
    },
    colors: {
      text: "#000000",
      main: "#03C75a",
      secondary: "#f5f5f5",
      gray: "#a2a2a2",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            fontFamily: "Pretendard, sans-serif",
            "*:not(.no-prose) a:not(.no-prose)": {
              fontWeight: 400,
            },
            "h1, h2, h3, h4, h5, h6": {
              marginBottom: 0,
              marginTop: 0,
              fontWeight: 800,
            },
            "p, span": {
              fontWeight: 400,
            },
            h1: {
              fontSize: "3rem",
            },
            h2: {
              fontSize: "2.5rem",
            },
            h3: {
              fontSize: "2.062rem",
            },
            h4: {
              fontSize: "1.75rem",
            },
            h5: {
              fontSize: "1.438rem",
            },
            h6: {
              fontSize: "1.188rem",
            },
            hr: {
              borderColor: "text",
              marginTop: "10px",
              marginBottom: "10px",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
