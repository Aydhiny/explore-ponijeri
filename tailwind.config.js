/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "playwrite-hr": ['"Henny Penny"', "system-ui"],
        "jakarta": ['"Plus Jakarta Sans"', "system-ui"],
        "grotesk": ['"Space Grotesk"', "system-ui"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-color-lighter-green": "#0084FF",
        "main-color-dark-green": "#002F5A",
        "main-color-light-green": "#E9FFCF",
        "glass-border": "rgba(255,255,255,0.15)",
        "glass-bg": "rgba(255,255,255,0.07)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "winter-gradient": "linear-gradient(135deg, #DFF1FF 0%, #CED6FF 50%, #c5e8ff 100%)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-down": "slideDown 0.5s ease-out forwards",
        "meteor": "meteor 5s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "border-beam": "borderBeam 6s linear infinite",
        "snow-fall": "snowFall linear infinite",
        "aurora": "aurora 8s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": { transform: "rotate(215deg) translateX(-500px)", opacity: "0" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 132, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 132, 255, 0.6)" },
        },
        borderBeam: {
          "100%": { offsetDistance: "100%" },
        },
        snowFall: {
          "0%": { transform: "translateY(-10px) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(360deg)", opacity: "0" },
        },
        aurora: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255,255,255,0.15)",
        "glass-lg": "0 20px 60px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255,255,255,0.2)",
        "blue-glow": "0 0 30px rgba(0, 132, 255, 0.3)",
        "blue-glow-lg": "0 0 60px rgba(0, 132, 255, 0.4)",
        "inner-light": "inset 0 1px 0 rgba(255,255,255,0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
    },
  },
  plugins: [],
};
