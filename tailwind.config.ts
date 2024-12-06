import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        gray: {
          light: "#F5F5F5", // Gris humo
          dark: "#333333", // Gris carbón
        },
        gold: "#D4AF37", // Dorado metálico
        silver: "#C0C0C0", // Plateado
        burgundy: "#7A1F35", // Burdeos oscuro
        emerald: "#046307", // Verde esmeralda
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
