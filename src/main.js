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
import 'animate.css'

import TabBar from '@/components/TabBar'
import ProductList from '@/components/ProductList'
import TagsList from '@/components/TagsList'
import CardList from '@/components/CardList'
import SearchFor from '@/components/SearchFor'
import PopupMenu from '@/components/PopupMenu'
import Loading from '@/components/LoadingImage/index.js'

import debounce from './directives/debounce'
import throttle from './directives/throttle'

Vue.config.productionTip = false
Vue.use(api)
Vue.use(VueAwesomeSwiper)
Vue.use(Loading)

Vue.component('TabBar', TabBar)
Vue.component('ProductList', ProductList)
Vue.component('TagsList', TagsList)
Vue.component('CardList', CardList)
Vue.component('SearchFor', SearchFor)
Vue.component('PopupMenu', PopupMenu)

Vue.directive('debounce', debounce)
Vue.directive('throttle', throttle)

new Vue({
  router,
  store,
  created () {
    if (Object.keys(this.$store.state.user.address).length < 1) {
      this.$router.push('/geolocation')
    }
    this.$store.dispatch('user/getUserInfo')
  },
  render: h => h(App)
}).$mount('#app')
