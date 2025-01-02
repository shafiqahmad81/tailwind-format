/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.js"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    extend: {
      fontFamily: {
        open: ['"Open Sans", sans-serif'],
        inter: ['"Inter", sans-serif'],
      },
      colors: {
        "off-black": "hsl(var(--off-black))",
        orange: {
          DEFAULT: "hsl(var(--orange))",
          50: "hsl(var(--light-orange-hover))",
          100: "hsl(var(--light-orange))",
          750: "hsl(var(--dark-orange-alt))",
          900: "hsl(var(--dark-orange))",
        },
        gray: {
          DEFAULT: "hsl(var(--off-gray))",
          550: "hsl(var(--off-gray-dark))",
        },
        red: {
          DEFAULT: "hsl(var(--red-color))",
        },
        green: {
          DEFAULT: "hsl(var(--green))",
        },
        theme: {
          DEFAULT: "hsl(var(--theme-color))",
          100: "hsl(var(--theme-color-light))",
          200: "hsl(var(--theme-copy))",
          240: "hsl(var(--theme-copy-dark-light))",
          250: "hsl(var(--theme-copy-dark))",
          300: "hsl(var(--theme-red))",
          400: "hsl(var(--theme-off-gray))",
        },
      },
    },
  },
  plugins: [],
};
