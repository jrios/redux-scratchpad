var path = require('path');

var loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel'
  }
];

module.exports = {
  debug: true,
  devtool: '#source-map',
  entry: {
    app: ['./src/app/index.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('./src/app/public/scripts')
  },
  module: {
    loaders: loaders
  },
  devServer: {
    contentBase: './src/app/public'
  }
}