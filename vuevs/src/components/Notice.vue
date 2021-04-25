<template>
  <div class="box" v-if="isShow">
    <h3>{{title}}</h3>
    <p class="box-content">{{message}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    show () {
      this.isShow = true
      setTimeout(this.hide, this.duration)
    },
    hide () {
      this.isShow = false
      // 清除自己，不然页面上会不停的追加弹框组件
      this.remove()
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  position: absolute;
  width: 100%;
  top: 16px;
  left: 0;
  text-align: center;
  pointer-events: none;
  background: rgba(0,0,0,.3);
}
</style>
