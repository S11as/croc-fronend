const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        /* eslint-disable quotes */
        additionalData: `@import "@/styles/sass/global.sass"`
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
