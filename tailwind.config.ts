import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      width: {
        "7xl": "80rem",
        "6xl": "72rem",
      },
      fontFamily: {
        rethink: ['"Rethink Sans"', "sans-serif"],
      },
      fontSize: {
        "hero-size": "var(--sds-typography-title-hero-size)",
      },
      letterSpacing: {
        "-tight": "-2.16px",
      },
      backgroundImage: {
        paralex: 'url("/hero.jpg")',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },

        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

// backgroundImage: {
//       'paralex': 'radial-gradient(var
//       (--tw-gradient-stops))',
//       'gradient-conic':
//       "conic-gradient(from 180deg at 50% 50%, var
//       (--tw-gradient-stops))',
//     }
