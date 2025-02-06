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
        "phone" : "600px",
        "phone-sm": "300px",
        "phone-md": "400px",
        "iphone": "360px"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

