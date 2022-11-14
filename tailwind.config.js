/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGrey: "hsl(0, 0%, 63%)",
        veryDarkGrey: "hsl(0, 0%, 27%)"
      },
      screens: {
        'xs': '375px',
        // => @media (min-width: 375px) { ... }

        'sm': '768px'
        // => @media (min-width: 600px) { ... }
      }
    },
  },
  plugins: [],
}
