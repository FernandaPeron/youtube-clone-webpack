const path = require('path');
const common = require('./webpack.config.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'bundle.[hash].js', // [hash] will be replaced with a unique hash that corresponds to the entry point content. Whenever the content changes, the hash changes and the browser does not cache it.
    // without the hash, we usually insert dist/bundle.js inside our HTML file and it works fine. But with hash, we have to use HTMLWebpackPlugin to generate the index.html file with the correct bundle.
    path: path.resolve(__dirname, 'dist')
  },
});
