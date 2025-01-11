import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(---primary-background)",
        foreground: "var(---secondary-background)",
        accent: "var(---accent)",
      },
      fontFamily: {
        lexend: ["var(--font-lexend)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
