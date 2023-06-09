const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()]
  },
  // 打包路径
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  devServer: {
    // host: '192.168.43.80',
    host: '192.168.0.112',
    // host: 'localhost',
    port: 8084,
    open: true, // vue项目启动时自动打开浏览器
    proxy: {
      '/api': { // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
        target: 'http://localhost:80', // 目标地址，一般是指后台服务器地址
        changeOrigin: true, // 是否跨域
        pathRewrite: { // pathRewrite 的作用是把实际Request Url中的'/api'用""代替
          '^/api': ''
        }
      }
    }
  }
})
