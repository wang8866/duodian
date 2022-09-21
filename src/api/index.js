import axios from '@/utils/axios'

const api = {
  home: {
    base: () => axios.get('/home')
  },
  product: {
    list: (parmas) => axios.get('/product', parmas),
    category: () => axios.get('/product/category')
  },
  category: {
    list: () => axios.get('/category')
  }
}

export default (Vue) => {
  Vue.prototype.$api = api
}
