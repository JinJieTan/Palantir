const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const os = require('os');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const path = require('path');
const port = require('../global.config');
const vueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/render/App/index.js'),
    vendor: ['react', 'vue', 'dva', 'vuex', 'vue-router', 'react-dom', 'axios', 'js-sha1'],
  },
  output: {
    filename: '[name].[hash:8].js',
    path: resolve(__dirname, '../build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: __dirname, // 指定检查的目录
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },

      {
        oneOf: [
          {
            test: /\.(html)$/,
            loader: 'html-loader',
          },
          {
            test: /\.(js|jsx)$/,
            use: [
              {
                loader: 'thread-loader',
                options: {
                  workers: os.cpus().length,
                },
              },
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                },
              },
            ],
          },
          {
            test: /\.(less|css)$/,
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
              },
              {
                loader: 'less-loader',
                options: { javascriptEnabled: true },
              },
            ],
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                },
              },
            ],
          },
          {
            exclude: /\.(js|json|less|css|jsx|vue)$/,
            loader: 'file-loader',
            options: {
              outputPath: 'media/',
              name: '[name].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/render/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new vueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HardSourceWebpackPlugin(),
  ],
  mode: 'development',
  devServer: {
    contentBase: '../build',
    open: false,
    port: port,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', 'vue'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@c': path.resolve(__dirname, '../src/render/App/components'),
      '@v': path.resolve(__dirname, '../src/render/Vue'),
    },
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  externals: [
    (function() {
      var IGNORES = ['electron'];
      return function(context, request, callback) {
        if (IGNORES.indexOf(request) >= 0) {
          return callback(null, "require('" + request + "')");
        }
        return callback();
      };
    })(),
  ],
};
