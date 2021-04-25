<template>
  <div>
    <Form :model='userInfo' :rules='rules' ref='formRef'>
      <form-item label='用户名' :userInfo='userInfo' prop='username'>
        <Input v-model="userInfo.username"  placeholder='请输入用户名'/>
      </form-item>
      <form-item label='密码' :userInfo='userInfo' prop='password'>
        <Input v-model="userInfo.password" :type="`password`" placeholder='请输入密码'/>
      </form-item>
      <form-item>
        <button @click="login">登录</button>
      </form-item>
    </Form>
  </div>
</template>

<script>
import Form from '@/views/Form/Form'
import FormItem from '@/views/Form/FormItem'
import Input from './Input'

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
      }
    }
  },
  methods: {
    login () {
      // 登录时获取所有表单项的验证信息，
      this.$refs.formRef.validate(valid => {
        if (valid) {
          alert('校验通过')
        } else {
          alert('信息填写错误，请重新填写')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
