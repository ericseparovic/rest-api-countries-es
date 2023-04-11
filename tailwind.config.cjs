/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			darkBlue: 'hsl(209, 23%, 22%)',
			veryDarkBlueBG: 'hsl(207, 26%, 17%)',
			veryDarkBlueText: 'hsl(200, 15%, 8%)',
			darkGrayInput: 'hsl(0, 0%, 52%)',
			white: 'hsl(0, 0%, 100%)',
		},
		extend: {},
	},
	plugins: [],
};
