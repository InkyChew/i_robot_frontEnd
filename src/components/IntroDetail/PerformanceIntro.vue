<template>
  <div class="perfomanceIntro">
    <div class="d-flex justify-content-center align-items-center">
      <i class="icon icon-xs icon-chart-dark-green"></i>
      <div class="title ml-1">績效試算</div>
    </div>

    <div class="d-flex justify-content-around m-2">
      <div class="step">
        <div class="mb-2">Ⅰ 條件篩選</div>
        <i class="icon icon-sm icon-sort"></i>
      </div>
      <div class="step">
        <div class="mb-2">Ⅱ 觀看績效</div>
        <i class="icon icon-sm icon-chart-dark-green"></i>
      </div>
      <div class="step">
        <div class="mb-2">Ⅲ 模擬即時通知</div>
        <i class="icon icon-sm icon-bell-dark-green"></i>
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
