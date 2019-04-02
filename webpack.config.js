const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
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
    },{
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devServer: {
    port: 9000,
    open: true,
    hot: true,
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      filename: 'index.html',
      title: 'Title',
      template: './src/index.html'
    })
  ]
}