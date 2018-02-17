const webpack = require('webpack');

const config = require('./webpack.config.base');

const baseConfig = Object.assign({}, config);

const sourceCodePath = baseConfig.module.rules[0].include;

baseConfig.entry.app.splice(1, 0, ...[
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:<%= port %>',
  'webpack/hot/only-dev-server',
]);

baseConfig.devtool = 'inline-source-map';

baseConfig.module.rules.push({
  test: /\.scss$/,
  use: [{
    loader: 'style-loader'
  }, {
    loader: 'css-loader'
  }, {
    loader: 'sass-loader',
    options: {
      includePaths: sourceCodePath,
    },
  }],
});

baseConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
);

Object.assign(baseConfig.output, {
  publicPath: '/'
});

baseConfig.devServer = {
  host: 'localhost',
  port: <%= port %>,
  historyApiFallback: true,
  hot: true,
  overlay: true,
};

module.exports = baseConfig;
