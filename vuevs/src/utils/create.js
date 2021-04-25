import Vue from 'vue'

function create (Component, props) {
  /* 组件构造函数如何获取？
  Vue.extend()
  render: main.js中new Vue就是采用挂载虚拟dom的方式
  new Vue({
  router,
  store,
  render: h => h(App)
  }).$mount('#app')
  h是createElement，返回虚拟dom， h(App)最终在挂载之后$mount('#app')会变成真实dom，
  通过vm.$el 可以获取真实dom，手动挂载到body上 document.body.appendChild(vm.$el)

   */
  const vm = new Vue({
    render: h => h(Component, { props })
  }).$mount() // 不指定宿主元素，则会创建真实dom，但是不会做dom的追加，且不能使用body
  document.body.appendChild(vm.$el)
  const comp = vm.$children[0]
  // 删除 释放内存
  comp.remove = function () {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  return comp
}
export default create
