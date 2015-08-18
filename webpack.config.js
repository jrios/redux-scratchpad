'use strict';

var webpack = require('webpack');
var path = require('path');

var loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: ['react-hot', 'babel']
  }
];

module.exports = {
  debug: true,
  devtool: '#source-map',
  entry: {
    app: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/app/index.js'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('./src/app/public/scripts')
  },
  module: {
    loaders: loaders
  },
  devServer: {
    contentBase: './src/app/public',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}