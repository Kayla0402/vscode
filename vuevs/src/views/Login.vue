<template>
  <div>
    <h1>8888{{isLogin}}7777</h1>
    <button @click='login' v-if="!isLogin">登录</button>
    <button @click='loginout' v-else>注销</button>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      this.$store.commit('login')
      // this.$router.push(this.$route.query.redirect)
      // 动态添加路由
      this.$router.addRoutes([
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
          ]
        }
      ])
      console.log(this.$route.query.redirect)
      this.$router.push('/')
      this.$router.push(this.$route.query.redirect)
    },
    loginout () {
      this.$store.mutations('loginOut')
      this.$router.push('/')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style lang='less' scoped>
</style>
