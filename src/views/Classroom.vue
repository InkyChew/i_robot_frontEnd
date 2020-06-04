<template>
  <div class="classroom">
    <div class="container">
      <div class="title text-center my-3">投資知識小學堂</div>
      <div class="">
        <div class="nav-tabs d-flex text-center">
          <div
            @click="tab = 'knowledge'"
            :class="{'active': tab === 'knowledge'}"
            class="tab col-6 p-2">投資知識專欄</div>
          <div
            @click="tab = 'quiz'"
            :class="{'active': tab === 'quiz'}"
            class="tab col-6 p-2">牛刀小試</div>
        </div>

        <template v-if="tab === 'knowledge'">
          <Knowledge></Knowledge>
        </template>
        <template v-else-if="tab === 'quiz'">
          <Quiz></Quiz>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Knowledge from '@/components/ClassroomPage/Knowledge'
import Quiz from '@/components/ClassroomPage/Quiz'

export default {
  name: 'Classroom',
  components: {
    Knowledge,
    Quiz
  },
  data () {
    return {
      tab: 'knowledge'
    }
  },
  methods: {

  }
}

</script>

<style lang='scss'>
.classroom{
  .title {
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
