/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // tailwind.config.js
    extend: {
      colors: {
        "test-color-705aaa": "#705AAA",
        "test-color-cbc8d4": "#CBC8D4",
        "activestate-bg-2": "#D8FCF7",
        "activestate-bg-1": "#01F0D0",
        "test-color-0bd984": "#0BD984",
        "test-color-072635": "#072635",
        "test-color-0c3d5d": "#0C3D5D",
        "test-color-084c77": "#084C77",
        "test-color-055a92": "#055A92",
        "test-color-006aac": "#006AAC",
        "test-color-007bc7": "#007BC7",
        "test-color-707070": "#707070",
        "test-color-f6f6f6": "#F6F6F6",
        "test-color-ededed": "#EDEDED",
        "test-color-000000": "#000000",
        "test-color-878787": "#878787",
        "test-color-ffffff": "#FFFFFF",
        "test-color-ff6200": "#FF6200",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        14: "14px",
        18: "18px",
        24: "24px",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
        800: "800",
      },
      lineHeight: {
        19: "19px",
        24: "24px",
        33: "33px",
      },
    },
  },
  variants: {},
  plugins: [],
};
