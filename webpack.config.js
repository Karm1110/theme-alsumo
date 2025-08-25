const twilight = require('@salla.sa/twilight');
const path = require('path');

module.exports = {
  entry: {
    app: './src/assets/js/app.js',
    home: './src/assets/js/home.js',
    product: './src/assets/js/product.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'mini-css-extract-plugin/loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new twilight.MiniCssExtractPlugin({
      filename: 'app.css',
    }),
  ],
};
