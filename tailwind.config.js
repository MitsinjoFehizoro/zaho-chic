/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		 colors: {
			primary: "#FF7628",
			secondary: "#0D1014",
			tertiary :"#1D2024",
			onTertiary : "#36393D",
			white: "#F6F6F5",
		 }
	  },
	},
	plugins: [],
 }