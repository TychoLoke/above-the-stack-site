import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        atsSky: "#33C7FF",
        atsOcean: "#2641D6",
        atsMidnight: "#0F1F4B",
        atsCoral: "#FF7A59",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(15,31,75,0.08) 1px, transparent 0)",
      },
      boxShadow: {
        glow: "0 25px 60px -15px rgba(38,65,214,0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config
