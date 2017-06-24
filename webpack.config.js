const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: './source/js/index.js',
  output: {
    path: path.join(__dirname, '/docs/'),
    filename: 'js/app.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'latest', 'stage-0' ],
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './source/index.html',
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      syntax: 'scss',
    }),
  ],
};
