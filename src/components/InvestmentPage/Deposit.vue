<template>
  <div class="deposit">
    <div class="capital my-2">
      <div class="mb-1">用愛發財總資本額: {{ totalAssets }}</div>
      <div>增加資本額</div>
      <div class="d-flex align-items-center">
        <input
          type="text"
          placeholder="請輸入資金"
          v-model="inputAssets"
          @blur="$v.inputAssets.$touch">
        <div class="errMsg ml-1" v-if="!$v.inputAssets.numeric">
          請輸入正整數</div>
        <div class="errMsg ml-1" v-if="$v.inputAssets.$error && !$v.inputAssets.required">
            請增加資本額</div>
      </div>
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
      <div class="d-flex align-items-center">
        <div>信用卡號</div>
        <div class="errMsg ml-1" v-if="$v.credit.$error && !$v.credit.required">
              信用卡格式錯誤</div>
      </div>
      <div class="d-flex align-items-center mb-1">
        <div class="d-flex mr-2">
          <input type="text" maxlength="4"
            v-model="credit.c1"
            @keyup="next($event, 'c2')"
            @blur="$v.credit.c1.$touch">
          <label class="mx-1">-</label>
          <input type="text" maxlength="4"
            ref="c2"
            v-model="credit.c2"
            @keyup="next($event, 'c3')"
            @blur="$v.credit.c2.$touch">
          <label class="mx-1">-</label>
          <input type="text" maxlength="4"
            ref="c3"
            v-model="credit.c3"
            @keyup="next($event, 'c4')"
            @blur="$v.credit.c3.$touch">
          <label class="mx-1">-</label>
          <input type="text" maxlength="4"
            ref="c4"
            v-model="credit.c4"
            @keyup="next($event, 'b3')"
            @blur="$v.credit.c4.$touch">
        </div>
        <i class="icon icon-sm icon-visa"></i>
        <i class="icon icon-sm icon-mastercard"></i>
        <i class="icon icon-sm icon-jcb"></i>
      </div>

      <div>背面末三碼</div>
      <div class="d-flex align-items-center">
        <input type="text" maxlength="3"
          ref="b3"
          v-model="credit.b3"
          @blur="$v.credit.b3.$touch">
        <i class="icon icon-sm icon-backThree ml-1"></i>
      </div>
    </div>
    <div class="check mb-2">
      <input type="checkbox" v-model="agree">
      請再次確認「匯款資訊」，匯款完成後將方送通知信至您的E-mail信箱或LINE
    </div>
    <div class="btn" @click="validateForm">立即投資</div>
  </div>
</template>

<script>
import API from '@/httpService'
import { mapGetters, mapActions } from 'vuex'
import { required, numeric, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Deposit',
  data () {
    return {
      totalAssets: '10,000',
      stopLossPoint: 15,
      inputAssets: '',
      credit: {
        c1: '',
        c2: '',
        c3: '',
        c4: '',
        b3: ''
      },
      agree: false
    }
  },
  validations: {
    inputAssets: {
      required,
      numeric
    },
    credit: {
      c1: {
        required,
        minLength: minLength(4)
      },
      c2: {
        required,
        minLength: minLength(4)
      },
      c3: {
        required,
        minLength: minLength(4)
      },
      c4: {
        required,
        minLength: minLength(4)
      },
      b3: {
        required,
        minLength: minLength(3)
      }
    }
  },
  computed: {
    ...mapGetters({
      getUid: 'getUid'
    }),
    PayoutRatio: function () {
      var totalAssets = Number(this.totalAssets.replace(/[^0-9-]+/g, ''))
      var inputAssets = Number(this.inputAssets.replace(/[^0-9-]+/g, ''))
      totalAssets = totalAssets + inputAssets
      return inputAssets / totalAssets * 100
    }
  },
  methods: {
    ...mapActions({
      setInvInfo: 'setInvInfo'
    }),
    next (e, next) {
      const curLength = e.target.value.length
      const nextTarget = this.$refs[next]
      if (curLength === e.target.maxLength) {
        nextTarget.focus()
      }
    },
    validateForm () {
      if (!this.agree) {
        this.$alertMsg('請確認匯款資訊，並勾選表示確認')
      } else if (this.$v.$invalid) {
        this.$v.$touch()
        this.$alertMsg('匯款資訊有誤，請確認')
      } else if (this.$v.$anyError) {
        this.$alertMsg('匯款資訊有誤，請確認')
      } else {
        this.sendCode()
      }
    },
    async sendCode () {
      this.$modal('VerifyModal', true)
      const { pushCode } = API
      try {
        this.$apiLoading(true)
        const res = await pushCode(this.getUid)
        if (res.status === 200) {
          const invInfo = {
            uid: this.getUid,
            totalAssets: this.inputAssets,
            stopLossPoint: this.stopLossPoint
          }
          this.setInvInfo(invInfo)
          console.log('success')
        }
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
.deposit {
  .credit {
    input {
      width: 100px;
    }
  }
  .errMsg {
    font-size: 14px;
    color: $orange
  }
}
</style>
