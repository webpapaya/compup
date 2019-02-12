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
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						query: {
							modules: true,
							localIdentName: '[name]__[local]___[hash:base64:5]'
						}
					}
				]
			  },
	  ]
	},
	devServer: {
	  historyApiFallback: true,
	},
	output: {
		chunkFilename: '[name].js'
	},
	optimization: {
		splitChunks: {
		  cacheGroups: {
			styles: {
			  name: 'styles',
			  test: /\.css$/,
			  chunks: 'all',
			  enforce: true
			}
		  }
		}
	  },
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new CleanWebpackPlugin(['dist']),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	]
};