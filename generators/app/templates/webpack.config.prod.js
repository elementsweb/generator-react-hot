const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('./webpack.config.base');

const baseConfig = Object.assign({}, config);

const sourceCodePath = baseConfig.module.rules[0].include;

Object.assign(baseConfig.output, {
  filename: 'static/[name].js',
  path: path.resolve(__dirname, 'dist'),
  publicPath: '',
});

baseConfig.module.rules.push({
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    use: [{
      loader: 'css-loader',
    }, {
      loader: 'sass-loader',
      options: {
        includePaths: sourceCodePath,
      },
    }],
    fallback: 'style-loader',
  }),
});

baseConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),

  new ExtractTextPlugin({
    filename: '[name].css',
  })
);

module.exports = baseConfig;
