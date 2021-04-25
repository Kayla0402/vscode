import Vue from 'vue'
import VueRouter from './kvue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: '/about/course/:id',
        name: 'Course',
        component: () => import(/* webpackChunkName: "about" */ '../views/Course.vue')
      }
    ],
    meta: {
      auth: true
    }
  },
  {
    path: '/course/:id',
    name: 'Course',
    component: () => import(/* webpackChunkName: "about" */ '../views/Course.vue')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// // 全局导航守卫
// router.beforeEach((to, from, next) => {
//   // to and from are Route Object,next() must be called to resolve the hook}
// // 判断路由是否需要守卫
//   if (to.meta.auth) {
//     // 是否登录
//     if (window.isLogin) {
//       next()
//     } else {
//       next('/login?redirect=' + to.fullPath)
//     }
//   } else {
//     next()
//   }
// })

// 动态路由添加权限控制导航
// router.beforeEach((to, from, next) => {
// // 是否登录
//   if (store.state.isLogin) {
//     // 登录
//     if (to.path === '/login') {
//       next('/')
//     } else {
//       next()
//     }
//   } else {
//     // 没有登录  '/login?redirect=' + to.fullPath
//     if (to.path === '/login') {
//       next()
//     } else {
//       next('/login?redirect=' + to.fullPath)
//     }
//   }
// })

export default router
