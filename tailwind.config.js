module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#00938d',
				light: '#eaf1ed',
				brand: '#fd661f',
				lighter: '#f8f7f3',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
