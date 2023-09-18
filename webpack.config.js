const path = require('path');

module.exports = function (webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';

  return {
    mode: isEnvDevelopment ? 'development' : 'production',
    entry: './src/index.ts',
    output: {
      filename: '[name].[contenthash:8].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    },
  };
};
