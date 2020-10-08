import httpService from './_httpService'

export default {
  // 將使用者投資資訊存入資料庫
  postInvAct (data) {
    const path = '/investment/postInvAct'
    return httpService({
      method: 'post',
      path,
      data
    })
  }
}
