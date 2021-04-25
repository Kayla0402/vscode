<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p class="error" v-if="error">{{error}}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  inject: ['form'],
  props: {
    label: {
      type: String
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
      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]
      const des = { [this.prop]: rules }
      const schema = new Schema(des)
      return schema.validate({ [this.prop]: value }, error => {
        if (error) {
          // 校验没有通过
          this.error = error[0].message
        } else {
          this.error = ''
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.error {
  color: red;
  font-size: 12px;
}
</style>
