import axios from 'axios'
import { token } from '@/components/AuthPageDetail/LoginPage'
import store from '../store'

window.addEventListener('storage', function () {
  // console.log(token.accessToken)
  token.accessToken = ''
  // Vue.prototype.$alertMsg('logout success')
  store.dispatch('setMsg', 'logout success')
  store.dispatch('showModal', { name: 'MsgModal', show: true })
  // console.log(token.accessToken + 'logged out from storage!')
})

export default function (params) {
  // const baseURL = 'http://192.168.43.19:8888'
  const baseURL = 'http://localhost:8888'

  const { method, header, path, data, auth } = params

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
    ...header
  }

  if (auth) {
    console.log(token.accessToken)
    headers.Authorization = `Bearer ${token.accessToken}`
  }

  return axios({
    method: method || 'get',
    url: baseURL + path,
    headers,
    data
  })
}
