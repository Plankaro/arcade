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
      accent: "#21ADE8",
      primary:"#575452",
      white: "#FEFEFE",
      gray: "#636466",
      dark: "#454647",
      extra: "#14213D",
      black: "#000000",
    },
    fontSize: {
      'xs': '0.605rem',
      'sm': '0.875rem',  // Small font size
      'md': '0.925rem',
      'base': '1rem',    // Base font size
      'lg': '1.25rem',   // Large font size
      'xl': '1.5rem',    // Extra large font size
      '2xl': '2rem',
      '3xl':'3rem',
      
    },
    fontFamily:{
      roboto: ['Roboto', 'sans-serif'],
      'roboto-light': ['Roboto', 'sans-serif', '300'], // Light (300) weight
      'roboto-bold': ['Roboto', 'sans-serif', '700'],  // Bold (700) weight
      // 'sans': ['open sans', ...defaultTheme.fontFamily.sans],
      // 'serif': [...defaultTheme.fontFamily.serif],
      // 'mono': [...defaultTheme.fontFamily.mono]
    },
    boxShadow: {
      'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // Small shadow
      'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)', // Medium shadow
      'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)', // Large shadow
      'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)', // Extra large shadow
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // 2x large shadow
      'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)', // Inner shadow
      'outline': '0 0 0 3px rgba(66, 153, 225, 0.5)', // Outline shadow
      'outline-long': '0 0 0 6x rgba(66, 153, 225, 0.5)', // Outline shadow
      'none': 'none', // No shadow
    },
  },
  plugins: [],
}