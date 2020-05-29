<template>
  <div class="perfomanceIntro">
    <div class="d-flex justify-content-center align-items-center">
      <i class="icon icon-xs icon-chart-dark-green"></i>
      <div class="title ml-1">績效試算</div>
    </div>

    <div class="d-flex justify-content-around m-2">
      <div class="step1 d-flex flex-column align-items-center">
        <div class="mb-1">Ⅰ 條件篩選</div>
        <div>選擇日期、公司、金額</div>
      </div>
      <div class="step2">
        <div>Ⅱ 觀看績效</div>
      </div>
      <div class="step3 d-flex flex-column align-items-center">
        <div class="mb-1">Ⅲ 模擬即時通知</div>
        <i class="icon icon-bell-yellow"></i>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PerfomanceIntro',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang='scss'>
.perfomanceIntro {
  width: 100%;
  height: 249px;
  color: $dark-green;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
