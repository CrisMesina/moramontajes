const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        "gold" : "#efb810"
      },
      screens: {
        "200": "200px",
        "xs": "300px",
        "phone-sm": "400px",
        "phone-md":"500px",
        "phone-lg" : "600px",
      },
      width: {
        "61":"246px",
        "68": "270px",
        "74": "300px",
        "100":"400px"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

