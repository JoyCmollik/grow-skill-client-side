module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: '576px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '992px',
			// => @media (min-width: 1024px) { ... }

			xl: '1200px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1400px',
			// => @media (min-width: 1536px) { ... }
		},
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
