const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, '../views/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template:'./index.html'
  })],
  devServer:{
    host: '0.0.0.0',
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000,
    open: 'Chrome'
  }
};