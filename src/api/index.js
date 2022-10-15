import axios from '@/utils/axios'

export const api = {
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
  },
  address: {
    create: (parmas) => axios.post('/address', parmas),
    list: () => axios.get('/address'),
    update: (id, parmas) => axios.put('/address/' + id, parmas)
  }
}

export default (Vue) => {
  Vue.prototype.$api = api
}
