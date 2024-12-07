/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "playwrite-hr": ['"Henny Penny"', "system-ui"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-color-lighter-green": "#0084FF",
        "main-color-dark-green": "#002F5A",
        "main-color-light-green": "#E9FFCF",
      },
    },
  },
  plugins: [],
};
