const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg||eot|ttf)$/i,
        use: [
          { loader: 'file-loader' },
        ],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.scss|\.css$/,
        use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.m?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          }
        }
      }
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js', '.tsx', '.jsx', '.vue'],
  },
  plugins: [ new VueLoaderPlugin()],
};
