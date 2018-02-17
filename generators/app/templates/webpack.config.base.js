const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Extend this base webpack configuration in
 * webpack.config.* for different environments.
 */
module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
    ],
    app: [
      'babel-polyfill',

      './src/index.js',
      // the entry point for our app
    ],
  },

  output: {
    filename: '[name].js',
    // the output bundle

    chunkFilename: '[id].[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
      },
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common', 'vendor'],
      minChunks: 2,
    }),

    new HtmlWebpackPlugin({
      title: '<%= repositoryName %>',
      template: 'index.html',
    }),
  ],
};
