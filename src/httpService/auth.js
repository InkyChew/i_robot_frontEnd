import httpService from './_httpService'

export default {
  // 取得 line 登入網址
  getLineLoginURL () {
    const path = '/auth/line/login_url'
    return httpService({
      method: 'get',
      path
    })
  },
  //  將 code 傳到 Line API，取得 AccessToken
  postCodeToLine (data) {
    const path = `/auth/line/${data.code}`
    return httpService({
      method: 'post',
      path,
      data
    })
  },
  // 新使用者註冊
  postNewUser (data) {
    const path = '/auth/regist'
    return httpService({
      method: 'post',
      path,
      data
    })
  },
  // 使用者登入
  loginAPI (data) {
    const path = '/auth/login'
    return httpService({
      method: 'post',
      path,
      data
    })
  },
  // 取得investment使用者資訊
  getUserInfo (uid) {
    const path = `/auth/getUserInfo/${uid}`
    return httpService({
      method: 'get',
      path
    })
  }
}
