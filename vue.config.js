
const path = require('path')
module.exports = {
  configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
    Object.assign(config, { // 开发生产共同配置
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': path.resolve('src'),
          '@config' : path.resolve('config'),
          '@contracts' : path.resolve('build/contracts')
        }
      }
    })
  }
}