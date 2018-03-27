var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

// create a javascript object for export, so that
// webpack can read it for configuration
var config = {
	entry: SRC_DIR + "/app/index.js",
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: SRC_DIR,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["react", "es2015", "stage-2"]
					}
				}
			}
		]
	}
};


module.exports = config;