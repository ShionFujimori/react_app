module.exports = {
    mode: "development",
	entry: "./src/index.js",
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader"
			}
		]
	}
};
