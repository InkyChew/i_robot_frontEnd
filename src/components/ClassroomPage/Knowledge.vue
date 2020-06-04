<template>
  <div class="knowledge">
    <div class="kTitle mt-3">
      怎麼知道我賺了多少錢呢?
    </div>
    <div class="content mt-2">
      <div>
        實際獲利 = 買賣總金額 - 交易成本<br>
        買賣總金額 = 股價✖買賣張數✖1000<br>
        交易成本 = （買進總金額+賣出總金額✖手續費率✖折扣） + （賣出總金額✖交易稅率）<br>
        手續費率: 0.1425% 買進賣出時都要付給證券商<br>
        交易稅率: 0.3% 賣出時付給政府<br>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Knowledge',
  data () {
    return {

    }
  },
  methods: {}
}
</script>

<style lang="scss">
.knowledge {
  .kTitle {
    font-size: 20px;
    font-weight: bold;
  }
  .content {
    line-height: 32px;
  }
}
</style>
