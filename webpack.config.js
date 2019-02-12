const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	module: {
	  rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
				loader: "babel-loader"
				},
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "react-web-component-style-loader" },
					"css-loader"
				]
			}
	  ]
	},
	devServer: {
	  historyApiFallback: true,
	},
	output: {
		chunkFilename: '[name].js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
		}),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	]
};