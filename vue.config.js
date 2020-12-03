const path = require('path')
module.exports = {
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      sass: {
        /* eslint-disable quotes */
        additionalData: `@import "@/styles/sass/global.sass"`
      },
      css: {
        modules: {
          localIdentName: '[local]-[hash:base64:5]'
        },
        localsConvention: 'dashesOnly'
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('Assets', path.resolve(__dirname, 'src/assets/'))
      .set('Config', path.resolve(__dirname, 'config.js'))
      .set('Store', path.resolve(__dirname, 'src/store/'))
      .set('Sass', path.resolve(__dirname, 'src/styles/sass/'))
  }
}
