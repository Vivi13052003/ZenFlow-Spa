/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
        "!./src/assets/**/*"
  ],
  theme: {
    extend: {
      fontFamily: {
        suse: ['Suse', 'sans-serif'],
        montserrat:['Montserrat','sans-serif'],
        jacques: ['"Jacques Francois Shadow"', 'serif'],
        amatic: ['"Amatic SC"', 'cursive'],
        ribeye: ['"Ribeye Marrow"', 'cursive'],
        josefin: ['"Josefin Slab"', 'serif'],
        playpen: ['Playpen Sans', 'sans-serif'],
        nerko: ['Nerko One', 'cursive'],
        dancing: ['"Dancing Script"', 'cursive'],
        'yusei-magic': ['"Yusei Magic"', 'sans-serif'],
        'cormorant-sc': ['"Cormorant SC"', 'serif'],




      }
    
    },
  },
  plugins: [],
}