const path = require('path');

const ROOT_PATH = path.resolve(__dirname);

// Common configuration settings
module.exports = {
  entry: {
    'element': path.resolve(ROOT_PATH, 'element.js'),
    'undoer': path.resolve(ROOT_PATH, 'undoer.js'),
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: '[name].js',
    library: 'undoer',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    futureEmitAssets: true,
  },
  module: {
    rules: [{
      test: /\.(js)$/,
      include: path.resolve(ROOT_PATH),
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
          ],
        },
      },
    }, ],
  },
};