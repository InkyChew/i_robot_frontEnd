import Vue from 'vue'
import Vuex from 'vuex'

import ui from './modules/ui'
import user from './modules/user'

Vue.use(Vuex)

const types = {
  ISLOADING: 'ISLOADING',
  SETUID: 'SETUID'
}

const rootStore = {
  state: {
    isLoading: false,
    uid: null
  },
  getters: {
    isLoading: state => state.isLoading,
    getUid: state => state.uid
  },
  actions: {
    apiLoading ({ commit }, status) {
      // this._vm.$log("action: apiloading", status)
      commit(types.ISLOADING, status)
    },
    setUid ({ commit }, uid) {
      commit(types.SETUID, uid)
    }
  },
  mutations: {
    /**
     * 呼叫api的時候，切換loading效果
     * @param {Boolean} status
     */
    [types.ISLOADING] (state, status) {
      state.isLoading = status
    },
    /**
     * 儲存userId
     * @param {Number} uid
     */
    [types.SETUID] (state, uid) {
      state.uid = uid
    }
  }
}

export default new Vuex.Store({
  ...rootStore,
  modules: {
    ui,
    user
  },
  strict: false
})
