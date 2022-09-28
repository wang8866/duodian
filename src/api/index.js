import axios from '@/utils/axios'

const api = {
  home: {
    base: () => axios.get('/home')
  },
  product: {
    list: (parmas) => axios.get('/product', parmas),
    category: () => axios.get('/product/category'),
    detail: id => axios.get(`/product/${id}`),
    search: () => axios.get('/search/tip')
  },
  user: {
    login: (parmas) => axios.post('/user/login', parmas),
    sendCode: (parmas) => axios.get('/user/sendMessageCode', parmas),
    info: () => axios.get('/user/info')
  }
}

export default (Vue) => {
  Vue.prototype.$api = api
}
