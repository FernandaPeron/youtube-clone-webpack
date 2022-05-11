## youtube-clone-webpack

> run `npm run build` and then `npm start`

This is an example of the YouTube clone project bundled with webpack.

Instead of inserting each file into the HTML, webpack can be used to
process and bundle all files into one final js file.
This single file (dist/bundle.js) is then inserted into the main HTML automatically through HtmlWebpackPlugin.

[Webpack config](webpack.config.js) is configured with the following options:
```javascript
module.exports = {
  entry: // entry file, so webpack can read and trace every necessary file. This is where all files should be imported, including css files and startup methods
  output: { // options of the final result
    filename: // the name of the bundle file
    path: // Path where the bundle file should be placed
  },
  module: { // configuration to parse modules
    rules: [
      {
        test: /\.js$/, // regex for files that this loader should be applied (all ended with .js)
        loader: 'babel-loader', // use this loader in the files gotten with the test regex. This can be an array and the loaders are executed in a reverse order ([3, 2, 1])
        exclude: /node_modules/, // exclude this folder from the regex search
      },
    ],
  },
};
```
