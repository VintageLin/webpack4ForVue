const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].js'
  },
  // 控制台打印输出配置
  stats: {
    entrypoints: false,
    chunks: false,
    children: false,
    chunkModules: true,
    modules: false
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        loader: 'url-loader',
        options: {
          name: 'images/[name].[hash].[ext]',
          limit: 10000
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory=true', 'eslint-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    // 模块别名，方便import
    alias: {
      '@': path.resolve(__dirname, '../src/'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    // 自动解析扩展名
    extensions: ['.js', '.json', '.vue']
  },
  plugins: [
    // 页面模板
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: './src/index.html',
      chunks: './src/index.js'
    })
  ]
}