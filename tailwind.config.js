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
      screen: {
        "phone" : "600px"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

