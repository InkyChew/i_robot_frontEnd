import Vue from 'vue'

// 設定 api loading 時的效果
Vue.prototype.$apiLoading = function (status) {
  this.$store.dispatch('apiLoading', status)
}
