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

import autoComponent from '@/plugins/autoComponent'
import debounce from './directives/debounce'
import throttle from './directives/throttle'

Vue.config.productionTip = false
Vue.use(api)
Vue.use(VueAwesomeSwiper)
Vue.use(autoComponent)

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
