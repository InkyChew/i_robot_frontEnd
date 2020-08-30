import axios from 'axios'
import { token } from '@/components/AuthPageDetail/LoginPage'

window.addEventListener('storage', function (event) {
  console.log(event)
  console.log(token.accessToken)
  token.accessToken = ''
  window.location.href = '/'
  alert('logout success')
  console.log(token.accessToken + 'logged out from storage!')
})
// window.dispatchEvent(new Event('storage'))

export default function (params) {
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
