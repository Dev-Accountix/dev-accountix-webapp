import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecf7ff",
          100: "#d6ecff",
          200: "#add8ff",
          300: "#7cc2ff",
          400: "#4aa8ff",
          500: "#2f80ed",
          600: "#1f66c7",
          700: "#1a50a1",
          800: "#193f7d",
          900: "#183764"
        }
      },
      keyframes: {
        "bg-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        "bg-pan": "bg-pan 12s ease infinite",
        "float": "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config;
