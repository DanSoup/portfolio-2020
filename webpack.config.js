const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname , 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js)$/, use:'babel-loader'},
      {test: /\.s[ac]ss$/i, use:['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.(png|jpe?g|gif|ttf)$/i, use:['file-loader']}
    ]
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: 'src/index.html'
    })
  ]
}