/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'LightBlue': "#7EA0C5",
        'Blue': "#011023",
        'Gray': "#",
        'LightGray': "#808080",
        'DarkGray': "#161616",
        'Black': "#1A1A1E",
      },
    },
  },
  plugins: [
    function({addUtilities}) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }
      }
      addUtilities(newUtilities);
    }
  ],
}

