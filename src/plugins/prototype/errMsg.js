import Vue from 'vue'

Vue.prototype.$err = function (param) {
  const { err } = param
  // console.log(this)
  console.log(err)

  if (err && err.response && err.response.data) {
    const code = err.response.status
    const message = err.response.data.description
    const errInfo = {
      code: code,
      message: message
    }
    console.log(errInfo)
    this.$store.dispatch('setError', errInfo)

    if (message !== '') {
      this.$modal('ErrModal', true)
    } else {
      this.$modal('ErrModal', true)
    }
  } else {
    const errInfo = {
      message: err.message
    }
    this.$store.dispatch('setError', errInfo)
    this.$modal('ErrModal', true)
  }
}
