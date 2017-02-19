var path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'MDCReact.js',
    library: 'MDCReact',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};

