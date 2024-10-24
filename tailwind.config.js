/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
		height: {
			'1080%75': '810px'
		},
    fontFamily: {
      'Arima': 'Arima-VariableFont'
    },
    width: {
      '80%': '80%',
      '2xl': '1440px'
    },
    borderWidth: {
      '20': '20px'
    }
	 },
  },
  plugins: [],
}

