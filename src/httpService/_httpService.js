import axios from 'axios'

export default function (params) {
  const baseURL = 'http://localhost:8888'

  const { method, header, path, data } = params

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
    ...header
  }

  // const tempToken = 'TnFpFQmSUwqqjfMMDC7QM8Hm5EmyjJnVWHCV76xVZcEPlHpOZWGECuISDKVM'
  // if (auth) {
  //   headers['Authorization'] = `Bearer ${tempToken}`
  // }

  return axios({
    method: method || 'get',
    url: baseURL + path,
    headers,
    data
  })
}
