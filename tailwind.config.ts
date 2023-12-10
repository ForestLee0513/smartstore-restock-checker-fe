import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  theme: {
    screens: {
      mobile: { max: "1280px" },
      pc: "1280px",
    },
    colors: {
      text: "#000000",
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
            "p, span, h1, h2, h3, h4, h5, h6": {
              marginBottom: "10px",
              marginTop: 0,
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
