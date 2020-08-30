const types = {
  SHOWMODAL: 'SHOWMODAL',
  SETERRMSG: 'SETERRMSG'
}

const state = {
  modals: [], // 存放所有開啟中的 model,
  errorInfo: {
    code: null,
    msg: ''
  }
}

const getters = {
  getModal: state => state.modals,
  getError: state => state.errorInfo
}

const actions = {
  showModal ({ commit }, modalInfo) {
    // this._vm.$log("action: modal", modalInfo);
    commit(types.SHOWMODAL, modalInfo)
  },
  setError ({ commit }, err) {
    // this._vm.$log("action: alert modal", alertInfo);
    commit(types.SETERRMSG, err)
  }
}

const mutations = {
  /**
   * 設定 modal 顯示與關閉
   * @param {Object} modalInfo
   * @param {String} modalInfo.name  -> modal 名稱
   * @param {Boolean} modalInfo.show -> 控制顯示
   */
  [types.SHOWMODAL] (state, modalInfo) {
    const { name = '', show = false } = modalInfo
    if (show) {
      state.modals.push(name)
    } else {
      const indexOfModal = state.modals.indexOf(name)
      state.modals.splice(indexOfModal, 1)
    }
  },
  /**
   * 設定錯誤訊息 ex: 401, Email invalid
   * @param {Object} err
   */
  [types.SETERRMSG] (state, err) {
    state.errorInfo = {
      ...err
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
