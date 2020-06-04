<template>
  <div class="footNav">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div class="menu">
          <div>投資小學堂</div>
          <div>新聞交流平台</div>
          <div>績效試算</div>
          <div>開始投資</div>
        </div>
        <div class="question">
          <div>服務條款</div>
          <div>常見問題</div>
          <div>隱私權政策</div>
        </div>
        <div class="contact text-center">
          <div>用AI發財</div>
          <div class="d-flex align-items-center">
            <i class="icon icon-mail mr-1"></i>
            FortuneAI@gmail.com
          </div>
          <!-- <div>國立雲林科技大學 資訊管理系</div>
          <div>周郁穎 張霽 謝鴻銘 陳詩陽</div>
          <div>指導教授 - 許中川</div>
          <div class="d-flex align-items-center">
            <i class="icon icon-mail mr-1"></i>
            B10623050@yuntech.edu.tw
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FootNav',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.footNav {
  background-color: $blue;
  color: $white;
  font-size: 14px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 58px;
  padding: 30px;
  .contact {
    .icon {
      @include size(14px);
    }
  }
}
</style>
