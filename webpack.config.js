const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/App.jsx',

  output: {
    chunkFilename: "js/[name].js",
    path: path.resolve(__dirname, './docs'),
    filename: '[name].js'
  },
  devServer: {
    // contentBase: './dist',
    // host: 'localhost',
    // port: 4000,
    // inline: true,  //缺少该配置，会出现上面的错误
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }, {
        test: /\.(css|postcss)$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/inline',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}