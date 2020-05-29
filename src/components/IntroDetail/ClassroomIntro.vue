<template>
  <div class="classroomIntro">
    <div class="d-flex justify-content-center align-items-center">
      <i class="icon icon-xs icon-bulb-blue"></i>
      <div class="title ml-1">投資知識小學堂</div>
    </div>

    <div class="d-flex justify-content-around m-2">
      <div class="step1">
        Ⅰ 能量補給
      </div>
      <div class="step2">Ⅱ 小測驗</div>
      <div class="step3 d-flex flex-column">
        <div class="mb-1">Ⅲ 獲得能量</div>
        <i class="icon icon-battery-blue"></i>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ClassroomIntro',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang='scss'>
.classroomIntro {
  width: 100%;
  height: 249px;
  color: $blue;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
