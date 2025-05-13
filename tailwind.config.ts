import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
        neon: {
          cyan: "#00E5E5",
          purple: "#B366FF",
          pink: "#FF66B3",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        outfit: ["'Outfit'", "sans-serif"],
        manrope: ["'Manrope'", "sans-serif"],
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
        "float": {
          "0%, 100%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-10px)"
          }
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            filter: "brightness(1)"
          },
          "50%": {
            opacity: "0.8",
            filter: "brightness(1.2)"
          }
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "fade-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "fade-in": "fade-in 0.7s ease-out",
        "fade-left": "fade-left 0.7s ease-out",
        "fade-right": "fade-right 0.7s ease-out",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-neon': 'linear-gradient(90deg, #00E5E5, #B366FF)',
        'gradient-cyan-purple': 'linear-gradient(to right, #00E5E5, #B366FF)',
        'gradient-purple-pink': 'linear-gradient(to right, #B366FF, #FF66B3)',
        'gradient-cyan-pink': 'linear-gradient(to right, #00E5E5, #FF66B3)',
        'gradient-velvet-dawn': 'linear-gradient(to right, #3f2b96, #a8c0ff)',
        'gradient-electric-violet': 'linear-gradient(to right, #4e65ff, #92eeff)',
      },
      dropShadow: {
        'glow': [
          '0 0 5px rgba(0, 229, 229, 0.6)',
          '0 0 10px rgba(0, 229, 229, 0.4)',
          '0 0 15px rgba(179, 102, 255, 0.4)',
          '0 0 20px rgba(179, 102, 255, 0.2)',
        ],
        'neon-glow': [
          '0 0 8px rgba(0, 229, 229, 0.8)',
          '0 0 16px rgba(179, 102, 255, 0.6)',
          '0 0 24px rgba(0, 229, 229, 0.4)',
          '0 0 32px rgba(179, 102, 255, 0.2)',
        ],
        'neon-glow-md': [
          '0 0 10px rgba(0, 229, 229, 0.8)',
          '0 0 20px rgba(179, 102, 255, 0.6)',
          '0 0 30px rgba(0, 229, 229, 0.4)',
          '0 0 40px rgba(179, 102, 255, 0.2)',
        ],
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
