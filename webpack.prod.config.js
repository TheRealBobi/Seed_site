const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  // define the filename for the entry point in the app
  entry: {
    app: './index.jsx',
  },

  // define where the Js bundle will be put and it's name
  output: {
    path: path.join(__dirname, '/public'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    loaders: [
      { test: /\.pug$/, loader: 'pug-html-loader' },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader?name=[path][name].[hash].[ext]',
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader',
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true }),
    new HtmlWebpackPlugin({ template: 'app.pug', filename: 'index.html' }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
    }),
  ],
};
