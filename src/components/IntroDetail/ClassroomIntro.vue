<template>
  <div class="classroomIntro">
    <div class="d-flex justify-content-center align-items-center">
      <i class="icon icon-xs icon-bulb-blue"></i>
      <div class="title ml-1">投資知識小學堂</div>
    </div>

    <div class="d-flex justify-content-around m-2">
      <div class="step">
        <div class="mb-2">Ⅰ 投資知識專欄</div>
        <i class="icon icon-sm icon-article"></i>
      </div>
      <div class="step">
        <div class="mb-2">Ⅱ 小測驗</div>
        <i class="icon icon-sm icon-question"></i>
      </div>
      <div class="step">
        <div class="mb-2">Ⅲ 獲得能量</div>
        <i class="icon icon-sm icon-battery-blue"></i>
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
