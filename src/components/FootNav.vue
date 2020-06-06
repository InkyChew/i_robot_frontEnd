<template>
  <div class="footNav">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div class="menu d-flex flex-column">
          <router-link :to="'/classroom'">投資小學堂</router-link>
          <router-link :to="'/news'">新聞交流平台</router-link>
          <router-link :to="'/performance'">績效試算</router-link>
          <router-link :to="'/investment'">開始投資</router-link>
        </div>
        <div class="question d-flex flex-column">
          <router-link :to="'/auth'">服務條款</router-link>
          <router-link :to="'/auth'">常見問題</router-link>
          <router-link :to="'/auth'">隱私權政策</router-link>
        </div>
        <div class="contact">
          <div>國立雲林科技大學 資訊管理系</div>
          <div>周郁穎 張霽 謝鴻銘 陳詩陽</div>
          <div>指導教授 - 許中川</div>
          <div class="d-flex align-items-center">
            <i class="icon icon-mail mr-1"></i>
            FortuneAI@gmail.com
          </div>
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
  a {
    color: $white;
    &:hover {
      color: $yellow;
    }
  }
}
</style>
