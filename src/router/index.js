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
          component: () => import('@/views/home'),
          meta: {
            title: '首页'
          }
        },
        {
          path: '/classify',
          component: () => import('@/views/classify'),
          meta: {
            title: '分类'
          }
        },
        {
          path: '/car',
          component: () => import('@/views/car'),
          meta: {
            isAuthenticated: true,
            title: '购物车'
          }
        },
        {
          path: '/mine',
          component: () => import('@/views/mine'),
          meta: {
            isAuthenticated: true,
            title: '个人中心'
          }
        }
      ]
    },
    {
      path: '/detail/:id',
      component: () => import('@/views/detail'),
      meta: {
        title: '详情'
      }
    },
    {
      path: '/search',
      component: () => import('@/views/search'),
      meta: {
        title: '搜索'
      }
    },
    {
      path: '/test',
      component: () => import('@/views/test')
    },
    {
      path: '/login',
      component: () => import('@/views/login'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/map',
      component: () => import('@/views/map'),
      meta: {
        title: '地图'
      }
    },
    {
      path: '/geolocation',
      component: () => import('@/views/geolocation'),
      meta: {
        title: '定位'
      }
    },
    {
      path: '/address',
      component: () => import('@/views/address'),
      meta: {
        title: '选择地址'
      }
    },
    {
      path: '/create/address',
      component: () => import('@/views/editAddress'),
      meta: {
        title: '新增地址'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  if (to.meta.isAuthenticated) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          callback: to.path
        }
      })
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})
export default router
