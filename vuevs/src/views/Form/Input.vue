<template>
  <div>
    <input :type="type" :value='value' @blur="onBlur" @input='onInput' v-bind="$attrs">
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    },
    onBlur () {
      // input发生变化，通知父级执行校验规则
      this.$parent.$emit('validate')
    }
  }
}
</script>
