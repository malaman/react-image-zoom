'use strict';

const env = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
const path = require('path');
const webpackUMDExternal = require('webpack-umd-external');

const pluginsList = [];
const outputFileName = env === 'production' ?
  'react-image-zoom.min.js' :
  'react-image-zoom.js';

const config = {
  entry: path.join(__dirname, 'src/react-image-zoom.js'),

  optimization: {
    minimize: env === 'production'
  },


  output: {
    path: path.join(__dirname, 'dist'),
    filename: outputFileName,
    library: 'ReactImageZoom',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },

  externals: webpackUMDExternal({
    'react': 'React',
    'js-image-zoom': 'ImageZoom',
  }),

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: pluginsList,

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }],
  },
};

module.exports = config;
