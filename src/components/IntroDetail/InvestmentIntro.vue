<template>
  <div class="investmentIntro">
    <div class="d-flex justify-content-center align-items-center">
      <i class="icon icon-xs icon-invest-blue"></i>
      <div class="title ml-1">立即開始投資</div>
    </div>

    <div class="d-flex justify-content-around m-2">
      <div class="step">
        Ⅰ 簡單步驟立即註冊
        <div class="line-icon mt-2">
          <i class="icon icon-sm icon-line"></i>
        </div>
      </div>
      <div class="step">
        <div class="mb-2">Ⅱ 只要有資金就能投資</div>
        <i class="icon icon-sm icon-creditCard"></i>
      </div>
      <div class="step">
        <div class="mb-2">Ⅲ 設置停損點</div>
        <i class="icon icon-sm icon-stop"></i>
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
  .line-icon {
    @include size(50px);
    border-radius: 10px;
    background-color: $dark-blue;
  }
}
</style>
