import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/views/main'),
      children: [
        {
          path: '/home',
          component: () => import('@/views/home')
        },
        {
          path: '/classify',
          component: () => import('@/views/classify')
        },
        {
          path: '/car',
          component: () => import('@/views/car')
        },
        {
          path: '/mine',
          component: () => import('@/views/mine')
        }
      ]
    },
    {
      path: '/detail/:id',
      component: () => import('@/views/detail')
    },
    {
      path: '/search',
      component: () => import('@/views/search')
    },
    {
      path: '/test',
      component: () => import('@/views/test')
    }
  ]
})
export default router
