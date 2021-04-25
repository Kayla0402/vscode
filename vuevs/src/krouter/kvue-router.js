let Vue
// 1.实现一个插件--挂载$router在vue上
// 插件就是一个对象，要实现一个install的方法
class VueRouter {
  constructor (options) {
    this.options = options
  }
}

VueRouter.install = function (_Vue) {
  // 保存构造函数，在KVuerouter中使用
  Vue = _Vue
  // 挂载$router
  // 怎么获取跟实例中main中的router选项-----混入
  Vue.mixin({
    beforeCreate () {
      console.log(this)
    }
  })
}
export default VueRouter
