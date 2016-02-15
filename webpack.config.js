var path = require('path');

const entryFilePath = path.join(__dirname, 'index.js');

module.exports = {
  entry: entryFilePath,
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader' }
    ]
  }
};
