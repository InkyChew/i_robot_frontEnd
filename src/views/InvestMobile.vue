<template>
  <div class="investMobile">
    <div class="container">
      <div class="capital my-2">
        <div class="mb-1">用愛發財總資本額: {{ totalAssets }}</div>
        <div>增加資本額</div>
        <input
          type="text"
          v-model="inputAssets">
        <div class="mt-1">
          可分配報酬率: {{ PayoutRatio }} %
        </div>
      </div>
      <div class="stopLossPoint mb-2">
        <div>設定停損點</div>
        <div class="d-flex align-items-center">
          <input
            type="number"
            id="stopLossPoint"
            name="stopLossPoint"
            min="5"
            max="15"
            v-model="stopLossPoint"
          />
          <div class="ml-1">%</div>
        </div>
      </div>
      <div class="credit mb-2">
        <div>信用卡號</div>
        <div class="d-flex align-items-center mb-1">
          <div class="d-flex mr-2">
            <input type="text" maxlength="4" />
            <label class="mx-1">-</label>
            <input type="text" maxlength="4" />
            <label class="mx-1">-</label>
            <input type="text" maxlength="4" />
            <label class="mx-1">-</label>
            <input type="text" maxlength="4" />
          </div>
          <i class="icon icon-sm icon-visa"></i>
          <i class="icon icon-sm icon-mastercard"></i>
          <i class="icon icon-sm icon-jcb"></i>
        </div>

        <div>背面末三碼</div>
        <div class="d-flex align-items-center">
          <input type="text" maxlength="3" />
          <i class="icon icon-sm icon-backThree ml-1"></i>
        </div>
      </div>
      <div class="check mb-2">
        <input type="checkbox" />
        請再次確認「匯款資訊」，匯款完成後將方送通知信至您的E-mail信箱或LINE
      </div>
      <div class="btn" @click="sendCode">立即投資</div>
    </div>
  </div>
</template>

<script>
// import API from '@/httpService'

export default {
  name: 'InvestMobile',
  data () {
    return {
      totalAssets: '10,000',
      stopLossPoint: 15,
      inputAssets: '請輸入資金'
    }
  },
  computed: {
    PayoutRatio: function () {
      var totalAssets = Number(this.totalAssets.replace(/[^0-9-]+/g, ''))
      var inputAssets = Number(this.inputAssets.replace(/[^0-9-]+/g, ''))
      totalAssets = totalAssets + inputAssets
      return inputAssets / totalAssets * 100
    }
  },
  methods: {
    async sendCode () {
      this.$modal('VerifyModal', true)
      // const { pushCode } = API
      // const res = await pushCode()
      try {
        this.$apiLoading(true)
      } catch (err) {
        this.$err({ err })
      } finally {
        this.$apiLoading(false)
      }
    }
  }
}
</script>

<style lang="scss">
.investMobile {
  .credit {
    input {
      width: 55px;
    }
  }
}
</style>
