/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Color start
      colors: {
        'paraColor': "#989898",
        'sColor' : "#F0F0F0"
        
       },
       // Color end
      // Container width Start
      maxWidth: {
        "container": "1440px",
        },
      // Container width End
       // Google fonts start
        fontFamily: {
         'open':'Open Sans',
       },
      // Google fonts end


    },
  },
  plugins: [],
}

