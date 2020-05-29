module.exports = {
  publicPath: "",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/variables.scss";
        @import "@/assets/css/mixins.scss";`
      }
    }
  }
}
