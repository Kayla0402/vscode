<template>
  <div>
    <!-- label标签 -->
    <label v-if='label'>{{label}}</label>
    <slot></slot>
    <!-- 错误信息展示 -->
    <p class='error' v-if='error'>{{error}}</p>
    <!-- 校验规则 -->
    <!-- <p>{{form.rules}}</p> -->
  </div>
</template>

<script>
import Schema from 'async-validator'
/* inject接收父组件或者爷爷组件传递过来的数据 */
export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data () {
    return {
      error: ''
    }
  },
  mounted () {
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    validate () {
      // 获取校验规则
      const rules = this.form.rules[this.prop]
      const value = this.form.model[this.prop]
      // 校验描述对象
      const desc = { [this.prop]: rules }
      // 创建schema实例
      const schema = new Schema(desc)
      return schema.validate({ [this.prop]: value }, errors => {
        console.log(errors)
        if (errors) {
          // 校验没有通过
          this.error = errors[0].message
        } else {
          // 校验通过
          this.error = ''
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.error {
  color: red;
}
</style>
