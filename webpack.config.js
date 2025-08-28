const twilight = require('@salla.sa/twilight');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

twilight.webpack(
  {
    entry: {
      app: './src/assets/js/app.js',
      home: './src/assets/js/home.js',
      product: './src/assets/js/product.js',
      'main-menu': './src/assets/js/partials/main-menu.js',
      'product-card': './src/assets/js/partials/product-card.js',
      'wishlist-card': './src/assets/js/partials/wishlist-card.js',
      testimonials: './src/assets/js/testimonials.js',
    },
    output: {
      path: path.resolve(__dirname, 'public', 'dist'),
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'app.css',
      }),
    ],
  }
);
