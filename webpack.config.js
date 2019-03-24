const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;

const mode = process.env.NODE_ENV || 'development';

const commonConfigurator = () => ({
  entry: {
    index: ['core-js/stable', 'regenerator-runtime/runtime', './src/index.js']
  },
  resolve: {
    modules: ['./src/', './node_modules/'],
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules|dist/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React-Canvas',
      template: 'templates/index.template.html'
    }),
    new CompressionPlugin({
      filename: 'compressed/[file]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      deleteOriginalAssets: false,
      minRatio: 1
    })
  ],
  output: {
    path: path.resolve(`./dist/${mode}`),
    publicPath: path.resolve(`./public`),
    filename: '[name].js'
  }
});

const developmentConfigurator = () => ({
  mode: 'development',
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  },
  devServer: {
    port,
    host,
    watchOptions: {
      aggregateTimeout: 3000,
      poll: 10000
    },
    historyApiFallback: true,
    contentBase: './dist/development'
  },
  devtool: 'inline-source-map'
});

const productionConfigurator = () => ({
  devtool: 'source-map'
});

module.exports =
  mode === 'production'
    ? { ...commonConfigurator(), ...productionConfigurator() }
    : { ...commonConfigurator(), ...developmentConfigurator() };
