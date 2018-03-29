REACT tutorial

Dependencies for the project
webpack : for bundling assets, compile assets components to single files
BABEL(dev): for transpiling ES6 to ES5
npm for package manager


Other libraries:
-material-ui : see link
https://material-ui-next.com/getting-started/installation/
also include font and icon cdn for the material fonts and svg icons

Set Up Process (for self learning)
1. run npm init to start a new project
2. install dependencies with npm
	run npm install <dependencies> --save for production
	run npm install <dependencies> --save-dev for development
	Production:
		react:
		react-dom:
	Development:
		webpack:for compiling
		webpack-cli: for running webpack commands
		webpack-dev-server: to serve the react app/ simulate http protocol server
		babel-loader: for loading babel
		babel-preset-es2015
		babel-preset-react
		babel-preset-stage-2
3. Create a folder called src,
	Inside src, create index.html for the entry html,
	<script src="/app/bundle.js"></script>
	on produciton, the whole application will be minified into bundle.js.
	then create a folder called app,
	Inside app, create index.js for app entry point.
	Create components folder, to store all the components
	Use camel case to name component. eg: Home.js

4. create file called webpack.config.js
	This file is used for configuring webpack for bundling assets for dev and production
	for this project, we will compile all assets from "src" folder into "dist" folder
	all javascript(ES6 or vanilla) will be compiled into a single file called "bundle.js" for production server use
	include module for bundling ES6 codes

5. create compiling script inside package.json
	
	webpack -d : bundle the app for dev
	webpack -p : bundle the app for production, this will minify and uglify the assets

	cp src/index.html dist/index.html : copy the index.html to dist folder
	webpack-dev-server: run the app on dev
		--content-base src/ : tells the app the base folder
		--inline
		--hot : for reloading realtime


To start the app on dev:
run:  npm start
Project will then run on port 3000

On production, setup a node/nginx server to serve the static files.

REACT NOTES:
1. Passing values in react
-pass by props
using prop-types to define the prop typing
Set the defaultProps property so that it wont run into error if no props are present
eg: 
MyComponent.defaultProps = {
	propName: "default value"
}
MyComponent.propTypes = {
	propName: PropTypes.string
}

-pass by children 
any tag inside a component tag is children
eg: <Home>
		<div>
		</div>
	</Home>
then get children inside the Home component by
	{props.children}
2. Event handling
  generally, use 'on' followed by the event
  eg: to register a click , use onClick


