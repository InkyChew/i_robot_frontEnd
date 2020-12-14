import httpService from './_httpService'

export default {
  // 送出表單資料計算投資績效
  postExhibitForm (data) {
    const path = '/exhibit/computeProfitRate'
    return httpService({
      method: 'post',
      path,
      data
    })
  },
  // 撈取排行榜csv
  getExhibitRank () {
    const path = '/exhibit/rank'
    return httpService({
      method: 'get',
      path
    })
  },
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
