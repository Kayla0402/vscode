<template>
  <div>
    <KForm :model='userInfo' :rules='rules' ref='loginForm'>
      <KFormItem label='用户名' prop='username'>
        <K-input v-model='userInfo.username' placeholder='请输入用户名'></K-input>
      </KFormItem>
      <KFormItem label='密码' prop='password'>
        <K-input v-model='userInfo.password' :type='`password`' placeholder='请输入密码'></K-input>
      </KFormItem>
      <KFormItem>
        <button @click="login">登录</button>
      </KFormItem>
    </KForm>
    {{userInfo.username}}
  </div>
</template>

<script>
import KInput from '@/views/KForm/KInput'
import KFormItem from '@/views/KForm/KFormItem'
import KForm from '@/views/KForm/KForm'

export default {
  components: {
    KInput, KFormItem, KForm
  },
  data () {
    return {
      value: '',
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
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          alert('submit')
        } else {
          console.log('表单校验失败')
          return false
        }
      })
    }
  }
}
</script>
<style lang='less' scoped>
</style>
