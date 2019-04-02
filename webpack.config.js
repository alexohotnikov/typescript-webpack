const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.tsx$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'awesome-typescript-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    }]
  },
  devServer: {
    port: 9000,
    open: true,
    hot: true,
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Hello, TSX', template: './src/index.html'})
  ]
}