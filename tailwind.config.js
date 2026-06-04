/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display:  ['"Henny Penny"', "system-ui"],
        jakarta:  ['"Plus Jakarta Sans"', "system-ui"],
        grotesk:  ['"Space Grotesk"', "system-ui"],
      },
      colors: {
        "brand":       "#0084FF",
        "brand-mid":   "#4fa8ff",
        "brand-dark":  "#002F5A",
        "brand-deep":  "#060d1a",
        "surface":     "#f4f9ff",
        "surface-2":   "#eaf4ff",
        /* legacy aliases kept for existing JSX */
        "main-color-lighter-green": "#0084FF",
        "main-color-dark-green":    "#002F5A",
        "main-color-light-green":   "#E9FFCF",
      },
      animation: {
        "float":       "float 6s ease-in-out infinite",
        "pulse-ring":  "pulseRing 2s ease-in-out infinite",
        "shimmer":     "shimmer 2.5s linear infinite",
        "slide-down":  "slideDown 0.25s ease-out",
        "fade-up":     "fadeUp 0.7s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-10px)" },
        },
        pulseRing: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(0,132,255,0.35)" },
          "50%":     { boxShadow: "0 0 0 12px rgba(0,132,255,0)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to:   { backgroundPosition: "-200% 0" },
        },
        slideDown: {
          from: { opacity: 0, transform: "translateY(-8px)" },
          to:   { opacity: 1, transform: "translateY(0)" },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to:   { opacity: 1, transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
