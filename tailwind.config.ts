import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Elite Truck Dispatch brand palette (supplied 2026-09-10, R9).
        //   #0A1931 near-black navy · #1A3D63 deep blue · #4A7FA7 mid blue
        //   #B3CFE5 light blue     · #F6FAFD near-white
        // Swapping these tokens rethemes the whole site — no component hard-codes a
        // theme hex. The one deliberate exception is Footer.tsx, which hard-codes
        // Facebook/Instagram/LinkedIn/WhatsApp brand colours; those must stay fixed.
        primary: {
          // Deep blue leads on buttons and links: #4A7FA7 measures 4.30:1 on white,
          // below the 4.5:1 WCAG AA threshold for normal text. #1A3D63 is 11.1:1.
          DEFAULT: "#1A3D63",
          light: "#4A7FA7",   // hover, lighter accents
          dark: "#0A1931",    // pressed state
          tint: "#F6FAFD",    // soft wash on light sections
        },
        navy: {
          950: "#0A1931",     // deepest — footer / deep bands
          900: "#1A3D63",     // hero / dark sections
          800: "#22496F",     // derived between 900 and 600
          700: "#2E5A82",     // dark cards
          600: "#4A7FA7",     // borders on dark
        },
        // Light blue from the palette, for soft fills and dividers on light sections
        sky: "#B3CFE5",
        gold: "#F5B841",      // stars and small highlights
        // Signal amber — deliberately NOT part of the brand palette. It marks the
        // highest-value conversion CTAs (Call Dispatch) and is meant to contrast with
        // the blues rather than match them. Confirmed to stay, R9.
        accent: {
          DEFAULT: "#F59E0B",
          dark: "#D97706",
          tint: "#FEF3C7",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"], // Manrope
        sans: ["var(--font-body)", "system-ui", "sans-serif"],        // Outfit
      },
      maxWidth: { container: "1200px" },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        // the review track renders its cards twice, so shifting by half the width
        // lands exactly on the seam and the loop is invisible
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up .6s ease both",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(26,61,99,.25)",   // matches primary #1A3D63
      },
    },
  },
  plugins: [],
};

export default config;
