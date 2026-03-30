import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#F0F5F1",
          100: "#E8F0E9",
          200: "#D1E2D3",
          300: "#B5CDB8",
          400: "#87A98A",
          500: "#6B9170",
          600: "#527557",
          700: "#3D5840",
          DEFAULT: "#87A98A",
        },
        cream: {
          50: "#FEFCF9",
          100: "#FAF7F2",
          200: "#F0EBE1",
          300: "#E5DDD1",
          DEFAULT: "#FAF7F2",
        },
        text: {
          main: "#374151",
          muted: "#6B7280",
          light: "#9CA3AF",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
