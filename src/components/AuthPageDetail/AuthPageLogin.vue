<template>
  <div class="authPageLogin">
    <div class="paragraph">
      <div class="title">Ⅰ 投資方式</div>
      集合投資人的資金，以AI預測最佳買賣點，自動買賣股票。
    </div>
    <div class="paragraph">
      <div class="title">Ⅱ 投資步驟</div>
      <div>
        登入<br>
        決定投資金額並匯款至用愛發財的戶頭。<br>
        設置停損點。預設15%<br>
      </div>
    </div>
    <div class="paragraph">
      <div class="title">Ⅲ 投資報酬</div>
      <div>依據投入資金比例分配報酬</div>
    </div>
    <div class="paragraph">
      <div class="title">Ⅲ 投資費用</div>
      <div>不收取任何費用。（ex：手續費、平台使用費）</div>
      <div>依據報酬分級抽成</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthPageLogin',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
.authPageLogin{
  .paragraph{
    margin-bottom: 20px;
    .title {
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
