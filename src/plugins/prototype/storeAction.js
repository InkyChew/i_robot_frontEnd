import Vue from 'vue'

// 設定 api loading 時的效果
Vue.prototype.$apiLoading = function (status) {
  this.$store.dispatch('apiLoading', status)
}

// 顯示 / 關閉 modal
Vue.prototype.$modal = function (name, show) {
  this.$store.dispatch('showModal', { name, show })
}

// 設定alertMsg
Vue.prototype.$alertMsg = function (msg) {
  this.$store.dispatch('setMsg', msg)
  this.$modal('MsgModal', true)
}
