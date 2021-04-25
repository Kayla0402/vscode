<template>
  <div>
    <router-link to='/'>home </router-link>
    <a>=====</a>
    <router-link to='/about'>about</router-link>
    <keep-alive include='course'>
      <router-view></router-view>
    </keep-alive>

    <!-- KForm表单控件的实现 -->
    <!-- <K-form v-model='value'></K-form> -->
    <Form></Form>
    <h1>===========</h1>
    <SInput></SInput>
  </div>
</template>

<script>
// import KForm from '@/views/KForm/index'
// import Input from '@/views/Form/Input'
import Form from '@/views/Form/Index'
import SInput from '@/views/SForm/Index'

export default {
  components: {
    // KForm,
    // Input,
    Form, SInput
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>
