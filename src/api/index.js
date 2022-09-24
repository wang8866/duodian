import axios from '@/utils/axios'

const api = {
  home: {
    base: () => axios.get('/home')
  },
  product: {
    list: (parmas) => axios.get('/product', parmas),
    category: () => axios.get('/product/category'),
    detail: id => axios.get(`/product/${id}`),
    search: parmas => axios.get('/search/tip', parmas)
  }
}

export default (Vue) => {
  Vue.prototype.$api = api
}
