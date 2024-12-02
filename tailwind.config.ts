import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Min-width for small devices
        md: "768px", // Min-width for medium devices
        lg: "1024px", // Min-width for large devices
        xl: "1280px", // Min-width for extra-large devices
        cx: { max: "600px" }, // Custom: Max width 600px for small screens
        ms: { min: "601px", max: "711px" }, // Custom: Between 601px and 711px
        df: { min: "712px", max: "832px" }, // Custom: Between 712px and 832px
        ax: { max: "400px" }, // Custom: Max width 400px for very small screens
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
       'white-bottom': '0 4px 15px rgba(255, 255, 255, 0.7)',
      },
      borderImage: {
        'gradient-border': 'linear-gradient(90deg, #FFFFFF 0%, rgba(153, 153, 153, 0.25) 102.64%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
