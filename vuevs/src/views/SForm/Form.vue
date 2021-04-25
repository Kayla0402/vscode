<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
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
      type: Object,
      required: true
    }
  },
  methods: {
    validate (cb) {
      // 获取表单每项的校验结果
      const tasks = this.$children.filter(item => item.prop).map(item => item.validate())
      // 统一处理所有promise的结果，validate返回的是promise
      Promise.all(tasks).then(() => cb(true)).catch(() => cb(false))
    }
  }
}
</script>

<style lang="less" scoped>
</style>
