<template>
  <div>
    <h1>course页面</h1>
    <h1>{{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  name: 'course',
  // watch: {
  //   $route (newValue, oldValue) {
  //     console.log('路由发生变化了=====' + newValue.params.id)
  //   }
  // },
  watch: {
    $route: {
      immediate: true,
      handler () {
        console.log('路由发生变化了=====' + this.$route.params.id)
      }
    }
  },
  created () {
    // console.log(this.$route.params.id)
  }
}
</script>

<style lang='less' scoped>
</style>
