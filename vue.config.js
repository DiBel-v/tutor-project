const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, './server/public'),
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:5000'
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/media/sass/helpers/helpers.sass"`
      }
    }
  }
};