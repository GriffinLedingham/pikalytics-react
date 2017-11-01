const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const formatter = require('eslint-formatter-pretty')
const precss = require('precss')

module.exports = {
  entry: {
    app: ['./js/main.js'],
  },
  output: {
    filename: '/bundle.js',
    path: __dirname + '/build',
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      title: 'ES6 WebPack',
      template: './index.html',
      cache: false,
      inject: true,
    }),
    new CopyWebpackPlugin([
    ]),
  ],
  resolve: {
    modulesDirectories: ['node_modules', './js'],
    extensions: ['', '.js', '.jsx', '.scss', '.sass', '.jade'],
    alias: {
      'css': path.join(__dirname, 'css'),
      'vendor': path.join(__dirname, 'vendor'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass',
      },
      { test: /\.css$/, loader: 'style!css!postcss-loader' },
      { test: /\.jade$/, loader: 'jade-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg|csv)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      {
        test: /\.(jpg|jpe?g|png|gif)$/i,
        loaders: [
          'url-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './node_modules')],
  },
  postcss () {
    return [autoprefixer, precss]
  },
  eslint: {
    formatter,
  },
  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
    stats: {
      assets: false,
      chunks: false,
      children: false,
      chunkModules: false,
      chunkOrigins: false,
      modules: false,
    },
  },
}
