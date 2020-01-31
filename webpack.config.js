
const path = require('path');

module.exports = {
	entry: './src/index.js',
	externals: {
		react: 'commonjs react'
	},
	mode: 'production',
	module: {
		rules: [
			{
				exclude: /(node_modules)/,
				test: /\.jsx?$/,
				use: 'babel-loader'
			}
		]
	},
	output: {
		filename: 'index.js',
		libraryTarget: 'commonjs2',
		path: path.resolve('build')
	}
}