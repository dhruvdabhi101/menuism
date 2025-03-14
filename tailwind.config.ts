import type { Config } from "tailwindcss";
import * as tailwindAnimate from "tailwindcss-animate";

export default {
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
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom theme colors
        saffron: {
          50: "#FFF9ED",
          100: "#FFF2D9",
          200: "#FFE6B3",
          300: "#FFD98C",
          400: "#FFCC66",
          500: "#FF9933", // Deep saffron
          600: "#E67300",
          700: "#B35900",
          800: "#804000",
          900: "#4D2600",
        },
        teal: {
          50: "#F0FAFA",
          100: "#D1EEEE",
          200: "#A2DDDD",
          300: "#8AD4D4",
          400: "#73CBCB",
          500: "#5BBFBA", // Soft teal
          600: "#459995",
          700: "#367371",
          800: "#254D4B",
          900: "#142A29",
        },
        cream: {
          50: "#FFFDF9",
          100: "#FFFAF0",
          200: "#FFF7E6",
          300: "#FFF2D6",
          400: "#FFEDC7",
          500: "#FFF5E1", // Base cream
          600: "#F5E5C7",
          700: "#E6D5B3",
          800: "#D6C49F",
          900: "#C7B38A",
        },
        burgundy: {
          50: "#F9EFEF",
          100: "#F0D9D9",
          200: "#E1B4B4",
          300: "#D28E8E",
          400: "#C36868",
          500: "#800020", // Rich burgundy
          600: "#730000",
          700: "#660000",
          800: "#590000",
          900: "#4C0000",
        },
        charcoal: {
          50: "#F2F2F2",
          100: "#E6E6E6",
          200: "#CCCCCC",
          300: "#B3B3B3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4D4D4D",
          800: "#333333", // Deep charcoal
          900: "#1A1A1A",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "zoom-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
        "zoom-in": "zoom-in 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["var(--font-sf-pro)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        glass: "0 0 20px rgba(0, 0, 0, 0.05)",
        "glass-hover": "0 0 30px rgba(0, 0, 0, 0.1)",
        subtle: "0 4px 12px rgba(0, 0, 0, 0.05)",
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
        button: "0 4px 14px 0 rgb(0 0 0 / 0.1)",
      },
      backgroundImage: {
        "dot-pattern":
          "radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "spice-gradient":
          "linear-gradient(135deg, rgba(255, 153, 51, 0.05) 0%, rgba(128, 0, 32, 0.05) 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionDuration: {
        "2000": "2000ms",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
