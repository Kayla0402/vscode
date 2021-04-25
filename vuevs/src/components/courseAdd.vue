<template>
  <div>
    <input type="text" :value='value' @input="onInput" @keydown.enter="addCourse" />
    <button @click='addCourse'>添加</button>
  </div>
</template>

<script>
  export default {
    props:['value'],
    methods: {
      addCourse() {
        this.$emit('add-course')
        // this.course=''
      },
      onInput(e) {
        this.$emit('input',e.target.value)
      }
    },
  }
</script>

<style scoped>

</style>