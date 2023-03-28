module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        green_A700: "#1cce18",
        black_900: "#000000",
        bluegray_401: "#898686",
        bluegray_400: "#898787",
        blue_600: "#2e97d2",
        bluegray_100: "#d9d9d9",
        black_900_3f: "#0000003f",
        white_A700: "#ffffff",
        red_A700: "#f80000",
      },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
