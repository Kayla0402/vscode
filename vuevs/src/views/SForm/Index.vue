<template>
  <div>
    <Form :model="userInfo" :rules="rules" ref="formRef">
      <FormItem label="用户名" prop="username">
        <Input v-model="userInfo.username" placeholder="请输入用户名"></Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input v-model="userInfo.password" type="password" placeholder="请输入密码"></Input>
      </FormItem>
      <FormItem>
        <button @click="login">登录</button>
      </FormItem>
    </Form>
    {{userInfo.username}}
  </div>
</template>

<script>
import Form from './Form'
import FormItem from './FormItem'
import Input from './Input'
import Notice from '@/components/Notice'
export default {
  components: {
    Form, FormItem, Input
  },
  data () {
    return {
      userInfo: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名' }],
        password: [{ required: true, message: '请输入密码' }]
      },
      error: ''
    }
  },
  methods: {
    login () {
      this.$refs.formRef.validate(valid => {
        const notice = this.$create(Notice, {
          title: '提示信息',
          message: valid ? '请求登录' : '校验失败',
          duration: 3000
        })
        notice.show()
        // if (valid) {
        //   alert('信息填写有错，请重新填写')
        // } else {
        //   alert('提交成功')
        // }
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
