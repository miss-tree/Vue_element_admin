'use strict'
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const defaultSettings = require('./src/settings.js')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css','png','jpg']

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'vue Element Admin' // page title

const port = process.env.port || process.env.npm_config_port || 9527 // dev port

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  lintOnSave: false ,
  devServer: {
    port: port,
    hot : true,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // "/":{
      //     target: 'http://127.0.0.1:3009',
      //     changeOrigin: true,
      //   pathRewrite: {
      //     '^/': '/'
      //   }
      // }
      [process.env.VUE_APP_BASE_API]: {
        // target: `http://127.0.0.1:${port}/mock`,
        target: 'http://134.175.79.34:5000',
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    // after: require('./mock/mock-server.js')
  },
  configureWebpack: {
    plugins : [
     // 配置compression-webpack-plugin压缩
        new CompressionWebpackPlugin({
      // filename: '[path].gz[query]', // 目标资源名称。
      // [file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
        filename: '[path][base].gz', 
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 1024*20,
          minRatio: 0.8
        }), 
      new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerHost: "127.0.0.1",
          analyzerPort: 8068, // 运行后的端口号
      })
    ],
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
  }
}
