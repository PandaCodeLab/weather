module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/media.scss";`
      }
    }
  }
}
