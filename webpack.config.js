const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');

const HtmlWebpackPlugin = require('html-webpack-plugin');

dotenv.config();

const config = (_, argv) => {
  return {
    mode: argv.mode,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'build/'),
      filename: argv.mode === 'production' ? '[contenthash:8].js' : '[name].[hash].js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          exclude: /\.module\.css$/,
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          exclude: /\.module\.scss$/,
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                mimetype: 'image/png',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/assets/images/logoFcode.ico',
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          APP_ROOT_PORT: JSON.stringify(process.env.APP_ROOT_PORT),
          APP_ROOT_URL: JSON.stringify(process.env.APP_ROOT_URL),
          API_ROOT_URL: JSON.stringify(process.env.API_ROOT_URL),
        },
      }),
      new webpack.HashedModuleIdsPlugin(),
    ],
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      },
    },
    devServer: {
      contentBase: './build',
      port: process.env.APP_ROOT_PORT || 3000,
      historyApiFallback: true,
      hot: true,
      watchContentBase: true,
    },
  };
};

module.exports = config;
