/*
 * @Descripttion:
 * @Author: chenjunwei
 * @Date: 2020-06-28 15:17:18
 * @LastEditors: chenjunwei
 * @LastEditTime: 2020-08-12 09:13:15
 */

const path = require('path')

function resolve(dir = '') {
  return path.join(__dirname, './src', dir)
}

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: 6255 // 九键输入法的 「mall」= 「6255」
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  },
  configureWebpack: {
    resolve: {
      alias: {
        core: resolve('core')
      }
    },
    optimization: {
      runtimeChunk: {
        name: entrypoint => `runtime~${entrypoint.name}`
      },
      splitChunks: {
        minChunks: 2,
        minSize: 20000,
        maxAsyncRequests: 20,
        maxInitialRequests: 30,
        name: false
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/global.scss";`
      }
    }
  }
}
