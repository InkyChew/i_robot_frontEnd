import httpService from './_httpService'

export default {
  // 推播登入成功訊息
  pushLoginMsg (data) {
    const path = '/lineBot/loginMsg'
    return httpService({
      method: 'post',
      path,
      data
    })
  },
  // 傳送驗證碼
  pushCode (data) {
    const path = '/lineBot/sendCode'
    return httpService({
      method: 'post',
      path,
      data
    })
  },
  // 驗證驗證碼
  verifyCode (data) {
    const path = '/lineBot/verifyCode'
    return httpService({
      method: 'post',
      path,
      data
    })
  }
}
