// import daisyui from "daisyui";
// import daisyUIThemes from "daisyui/src/theming/themes";
// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [daisyui],

// 	daisyui: {
// 		themes: [
// 			"light",
// 			{
// 				black: {
// 					...daisyUIThemes["black"],
// 					primary: "rgb(29, 155, 240)",
// 					secondary: "rgb(24, 24, 24)",
// 				},
// 			},
// 		],
// 	},
// };





/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")], // Correct way to include daisyUI

	daisyui: {
		themes: [
			"light",
			{
				black: {
					"primary": "rgb(29, 155, 240)",
					"secondary": "rgb(24, 24, 24)",
					// "accent": "#37cdbe",
					// "neutral": "#3d4451",
					// "base-100": "#1a1a1a",
					// "info": "#2094f3",
					// "success": "#009485",
					// "warning": "#ff9900",
					// "error": "#ff5724",
				},
			},
		],
	},
};





