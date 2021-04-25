<template>
  <div>
    <input :type="type" @blur="onBlur" :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    },
    onBlur () {
      this.$parent.$emit('validate')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
