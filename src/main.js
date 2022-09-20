import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import '@/utils/rem'

import '@/assets/css/reset.css'
import '@/assets/iconfont/iconfont.css'

import TabBar from '@/components/TabBar'
import ProductList from '@/components/ProductList'
import TagsList from '@/components/TagsList'

Vue.config.productionTip = false
Vue.use(api)
Vue.use(VueAwesomeSwiper)

Vue.component('TabBar', TabBar)
Vue.component('ProductList', ProductList)
Vue.component('TagsList', TagsList)
console.log(123)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
console.log(456)
console.log(654)
