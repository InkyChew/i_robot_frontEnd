<template>
  <div class="authPageRegist">
    <div class="title text-center my-2">用愛發財聲明</div>
    <div class="contract pr-2">
    * 信託投資具有風險，委託人簽約前應詳閱各約定書內容全部。<br>
    * 本行除盡善良管理人之注意義務及忠實義務外，不擔保信託資金管理、運用本金之不虧損，亦不保證最低之收益，委託人/受益人應自負盈虧。<br>
    * 本行及提供顧問服務之資產管理公司，以往經營績效不代表日後表現。<br>
    投資人透過本系統辦理『特定金錢信託投資境內股票』業務應注意事項：<br>
    1. 股票投資具投資風險，此一風險可能使本金發生虧損。<br>
    2. 股票投資並非存款，投資人須自負盈虧，受託銀行不保本不保息。<br>
    3. 投資定期定額基金投資人因不同時間進場，將有不同之投資績效；過去之績效亦不代表未來投資績效之保證。<br>
    4. 不收取手續費、平台使用費。但若有投資報酬，採分級抽成方式收取報酬。祥請見。<br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthPageRegist',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
.authPageRegist{
  .contract {
    line-height: 32px;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
