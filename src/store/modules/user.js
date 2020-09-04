const types = {
  SETUSER: 'SETUSER'
}

const state = {
  userInfo: {
    uid: null,
    name: '',
    picture: ''
  }
}

const getters = {
  getUser: state => state.userInfo
}

const actions = {
  setUser ({ commit }, user) {
    commit(types.SETUSER, user)
  }
}

const mutations = {
  /**
   * 設定user info
   * @param {Object} user
   */
  [types.SETUSER] (state, user) {
    state.userInfo = {
      ...user
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
