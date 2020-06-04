<template>
  <div class="deposit">
    <div class="capital my-2">
      <div>增加資本額</div>
      <input type="text" placeholder="請輸入資金" />
      <div class="mt-1">
        可分配報酬率: 10%
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
      請再次確認「匯款資訊」，匯款完成後將方送通知信至您的E-mail信箱
    </div>
    <div class="btn">立即投資</div>
  </div>
</template>

<script>
export default {
  name: 'Deposit',
  data () {
    return {
      stopLossPoint: 15
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.deposit {
  .credit {
    input {
      width: 100px;
    }
  }
}
</style>
