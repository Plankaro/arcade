/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      lineHeight: {
        'tight': 1.2,      // Tight line height
        'normal': 1.5,     // Normal line height
        'relaxed': 1.75,   // Relaxed line height
      },
    },
    colors: {
      primary:"#AEA5A0",
      white: "#fff",
      gray: "#636466",
      extra: "#14213D"
    },
    fontSize: {
      'sm': '0.875rem',  // Small font size
      'base': '1rem',    // Base font size
      'lg': '1.25rem',   // Large font size
      'xl': '1.5rem',    // Extra large font size
    },
    fontFamily:{
      roboto: ['Roboto', 'sans-serif'],
      'roboto-light': ['Roboto', 'sans-serif', '300'], // Light (300) weight
      'roboto-bold': ['Roboto', 'sans-serif', '700'],  // Bold (700) weight
    }
  },
  plugins: [],
}