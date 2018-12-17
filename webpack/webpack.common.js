const path = require('path');
const webpack =require('webpack');
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
  }), new webpack.HotModuleReplacementPlugin()],
  devServer:{
    hot: true,
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000,
    open: 'Chrome'
  }
};