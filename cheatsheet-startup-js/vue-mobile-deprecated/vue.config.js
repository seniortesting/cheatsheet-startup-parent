// const FileManagerPlugin = require('filemanager-webpack-plugin')
const pkg = require('./package.json')
process.env.VUE_APP_VERSION = pkg.version + ' build ' + require('dayjs')().format('YYYYMMDDHHmm')
module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/',
  outputDir: 'dist',
  lintOnSave: true,
  productionSourceMap: false,
  runtimeCompiler: true,
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    // ngrok避免出现出错： nvalid host header
    disableHostCheck: true
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
      // config.plugins.push(new BundleAnalyzerPlugin())
    } else {
      config.devtool = 'source-map'
    }
  },
  pluginOptions: {}
}
