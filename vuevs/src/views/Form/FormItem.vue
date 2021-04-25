<template>
  <div>
    <!-- label -->
    <label v-if="label">{{label}}</label>
    <!-- input组件 -->
    <!-- <Input v-model='userInfo.username'></Input> -->
    <slot></slot>
    <!-- 检验不通过提示 -->
    <p class='red' v-if="error">{{error}}</p>
  </div>
</template>

<script>
// import Input from './Input'
import Schema from 'async-validator'

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
  components: {
    // Input
  },
  data () {
    return {
      error: ''
    }
  },
  methods: {
    validate () {
      const rules = this.form.rules[this.prop]
      const value = this.form.model[this.prop]
      // 校验描述对象
      const des = { [this.prop]: rules }
      const schema = new Schema(des)
      return schema.validate({ [this.prop]: value }, error => {
        if (error) {
          // 校验未通过
          this.error = error[0].message
        } else {
          this.error = ''
        }
      })
    }
  },
  mounted () {
    this.$on('validate', () => {
      this.validate()
    })
  }
}
</script>
<style lang="less">
.red {
  color: red;
  font-size: 12px;
}
</style>
