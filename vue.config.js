module.exports = {
  publicPath: "/i_robot_frontEnd/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/variables.scss";
        @import "@/assets/css/mixins.scss";`
      }
    }
  }
}
