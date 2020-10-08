const types = {
  SETUSER: 'SETUSER',
  SETINVINFO: 'SETINVINFO'
}

const state = {
  userInfo: {
    uid: null,
    name: '',
    picture: ''
  },
  investInfo: {
    uid: null,
    totalAssets: null,
    stopLossPoint: null
  }
}

const getters = {
  getUser: state => state.userInfo,
  getInvInfo: state => state.investInfo
}

const actions = {
  setUser ({ commit }, user) {
    commit(types.SETUSER, user)
  },
  setInvInfo ({ commit }, invInfo) {
    commit(types.SETINVINFO, invInfo)
  }
}

const mutations = {
  /**
   * 設定 user info
   * @param {Object} user
   */
  [types.SETUSER] (state, user) {
    state.userInfo = {
      ...user
    }
  },
  /**
   * 設定 user invest  info
   * @param {Object} invInfo
   */
  [types.SETINVINFO] (state, invInfo) {
    state.investInfo = {
      ...invInfo
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
