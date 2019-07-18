import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('@/views/home/index.vue'),
        footer: () => import('@/components/Footer.vue')
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/kind',
      name: 'kind',
      components: {
        default: () => import('./views/kind/index.vue'),
        footer: () => import('@/components/Footer.vue')
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: () => import('./views/cart/index.vue')
      }
    },
    {
      path: '/user',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () => import('./views/user/index.vue'),
        footer: () => import('@/components/Footer.vue')
      },
      children: [
        {
          path: 'noLogin',
          name: 'noLogin',
          component: () => import('@/components/user/NoLogin.vue')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/components/user/Login.vue')
        }
      ]
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./views/detail/index.vue')
    },
    {
      path: '/gobuy/:num',
      name: 'gobuy',
      component: () => import('@/views/gobuy/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('./views/Register.vue')
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('./views/Login.vue')
      }
    },
    {
      path: '*',
      name: 'nofind',
      component: () => import('@/views/NoFind.vue')
    }
  ]
})

export default router
