const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'awesome-typescript-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  devServer: {
    port: 9000,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}