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
    const path = '/auth/line'
    return httpService({
      method: 'post',
      path,
      data
    })
  }
}
