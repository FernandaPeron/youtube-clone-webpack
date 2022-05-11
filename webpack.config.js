const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './js/index.js',
  output: {
    assetModuleFilename: 'images/[name].[hash].[ext]' // configuring the output of assets
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname), // key to a path, so it can shorten paths if there are several folders. @ is now an alias to the root folder. Example in recommendations.js.
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', //2. inject styles into DOM loading the js css below
          'css-loader', //1. turns the css into js
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: ['html-loader'], // parse assets from html by requiring them in JS. Then other loaders can take charge of what to do with the required assets as long as the extension is configured here
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|svg)/,
        type: 'asset/resource' // configure these files as assets without having to configure additional loaders
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html' // the file that should be parsed to add the correct paths for the generated files
    }),
  ],
};
