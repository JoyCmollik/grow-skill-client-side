module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#2B4EFF',
				light: '#EDEEF3',
				brand: '#FF3614',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
