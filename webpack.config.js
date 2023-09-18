const { join } = require('path');

module.exports = {
  entry: join(__dirname, 'src', 'index.tsx'),
  output: {
    path: join(__dirname, 'lib'),
    filename: 'index.js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '...'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
};
