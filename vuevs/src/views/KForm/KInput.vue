<template>
  <div>
    <!-- v-bind='$attrs'展开 $attrs 属性 -->
    <input :type='type' :value='value' @input='onInput' v-bind='$attrs' />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
      // 派发校验事件
      this.$parent.$emit('validate')
    }
  }
}
</script>

<style lang='less' scoped>
</style>
