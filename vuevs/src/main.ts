import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import router from './krouter'
import store from './store'
// 弹窗组件
// import create from './utils/create'

Vue.config.productionTip = false
// Vue.prototype.$create = create

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
