<template>
  <div class="investmentIntro">
    <div class="d-flex justify-content-center align-items-center">
      <i class="icon icon-xs icon-invest-blue"></i>
      <div class="title ml-1">立即開始投資</div>
    </div>

    <div class="d-flex justify-content-around m-2">
      <div class="step1">
        Ⅰ 簡單步驟立即註冊
      </div>
      <div class="step2">Ⅱ 只要有資金就能投資</div>
      <div class="step3 d-flex flex-column">
        <div class="mb-1">Ⅲ 獲得能量</div>
        <i class="icon icon-battery-blue"></i>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'InvestmentIntro',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang='scss'>
.investmentIntro {
  width: 100%;
  height: 249px;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
