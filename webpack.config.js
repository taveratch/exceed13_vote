var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    main : './js/main.js',
    index: './js/index.js',
    content: './js/content.js',
    router: './js/router.js'
  },
  output: { path: __dirname, filename: '[name].js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader?importLoaders=1" },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
    root: [
      path.resolve('./lib')
    ]
  }
};
