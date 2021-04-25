<template>
  <div class='message-box' v-if='show'>
    <strong>
      <slot></slot>
    </strong>
    <slot name='title' title='来自message组件的titile值，作用域插槽'></slot>
    <span class='message-box-close' @click='$emit("update:show", false)'
      >X</span
    >
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('close', false)
    }
  }
}
</script>

<style scoped>
.message-box {
  padding: 10px 20px;
  background: #4fc08d;
  border: 1px solid#42b983;
}

.message-box-close {
  float: right;
}
</style>
