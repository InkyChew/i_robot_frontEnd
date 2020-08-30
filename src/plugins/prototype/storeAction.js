import Vue from 'vue'

// 設定 api loading 時的效果
Vue.prototype.$apiLoading = function (status) {
  this.$store.dispatch('apiLoading', status)
}

// 顯示 / 關閉 modal
Vue.prototype.$modal = function (name, show) {
  this.$store.dispatch('showModal', { name, show })
}

// 顯示 / 關閉 alert modal
// Vue.prototype.$errMsg = function (err) {
//   this.$store.dispatch('setError', err)
// }
