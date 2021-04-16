const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/ant-design-vue/',
  outputDir: 'dist',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    // ngrok避免出现出错： nvalid host header
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 */
          /*
          'primary-color': '#F5222D',
          'link-color': '#F5222D',
          'border-radius-base': '4px',
          */
        },
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production' && !process.env.ELECTRON_PLATFORM) {
      config.plugins.push(new BundleAnalyzerPlugin())
    } else {
      config.devtool = 'source-map'
    }
    // Ignore all locale files of moment.js, from ant-design-vue
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
  },
  chainWebpack: config => {
    config.resolve.alias
      // 设置icon 打包体积太大问题: https://github.com/ant-design/ant-design/issues/12011
      .set('@ant-design/icons/lib/dist$', path.join(__dirname, 'src/plugins/ant-design-icons.js'))
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-icon-loader')
      .loader('vue-svg-icon-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/img/[name].[hash:8].[ext]'
      })
  },
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src-electron/background.js',
      builderOptions: {
        // 采用默认的electron-builder.yml配置文件配置参数
      },
      chainWebpackMainProcess: config => {
        // Chain webpack config for electron main process only
      },
      chainWebpackRendererProcess: config => {
        // Chain webpack config for electron renderer process only
        // The following example will set ELECTRON_PLATFORM to true in your app
        config.plugin('define').tap(args => {
          args[0]['ELECTRON_PLATFORM'] = true
          return args
        })
      }
    }
  }
}
