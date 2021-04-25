<template>
  <div>
    <h1>about组件</h1>
    <!-- message组件 -->
    <message v-bind:show.sync='show'>
      <template v-slot:title='slotProps'>
        {{slotProps.title}}
      </template>
      <template>
        新增课程成功！
      </template>
    </message>
    <course-add v-model='course' @add-course='addCourse' />
    <div v-for='(item,index) in courseList' :key='index'>
        <router-link :to='`/about/course/${item}`'>{{ item }}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import courseAdd from '@/components/courseAdd'
import message from '@/components/message'
export default {
  components: {
    courseAdd,
    message
  },
  data () {
    return {
      title: '购物车',
      course: '托尔斯泰',
      courseList: [],
      testData: '',
      show: false
    }
  },
  methods: {
    addCourse () {
      this.courseList.push(this.course)
      this.course = ''
      this.show = true
    }
  },
  created () {
    axios.get('/api/courses')
  }
}
</script>

<style scoped lang='less'>
@iconColor: red;
h3 {
  color: @iconColor;
}
</style>
