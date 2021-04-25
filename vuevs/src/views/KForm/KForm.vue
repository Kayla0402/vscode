<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
/* KForm需要把数据model和rules一层层传递到子组件input中，
 */
export default {
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate (cb) {
      // 获取所有的KFormItem，执行validate方法，获取执行的结果
      const tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validate())
      // 统一处理所有promise的结果，validate返回的是promise
      Promise.all(tasks).then(() => cb(true)).catch(() => cb(false))
    }
  }
}
</script>

<style lang='less' scoped>
</style>
