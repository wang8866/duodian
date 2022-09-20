import axios from 'axios'

const service = axios.create({
  // baseURL: process.env.NODE_ENV === '' ? 'aaa' : 'bbb'
  baseURL: '/api',
  timeout: 5000
})

export default {
  ...service,
  get (url, data = {}) {
    return service.get(url, {
      params: data
    })
  }
}
