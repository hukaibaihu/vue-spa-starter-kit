var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var context = path.join(__dirname, '..')

module.exports = {
  entry: {
    vendor: ['./src/vendor.js']
  },
  output: {
    path: path.join(context, 'static/js'),
    filename: '[name].dll.[chunkhash].js',
    library: '[name]'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(context, '[name].manifest.json'),
      name: '[name]',
      context: context
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: path.join(context, 'index.html'),
      template: 'index.tpl'
    })
  ]
}
