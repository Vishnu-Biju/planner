import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
	'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
	'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
	'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	'./src/modules/**/*.{js,ts,jsx,tsx}',
	'./src/lib/**/*.{js,ts,jsx,tsx}',
],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary:"#FFCD54",
        secondary: "#FFF8E6",
        info:"#183FA5",
        infoSecondary:"#d7e0f9",
        delete: '#CC2B29',
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        xs: ['0.85rem', { lineHeight: '1.3rem' }],
        sm: ['0.95rem', { lineHeight: '1.4rem' }],
        base: ['1rem', { lineHeight: '1.6rem' }],
        lg: ['1.15rem', { lineHeight: '1.8rem' }],
        xl: ['1.3rem', { lineHeight: '2rem' }],
        '2xl': ['1.6rem', { lineHeight: '2.25rem' }],
        '3xl': ['1.6rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.5rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }], 
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }], 
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};
export default config;
