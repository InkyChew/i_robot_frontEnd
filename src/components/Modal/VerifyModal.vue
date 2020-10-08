<template>
  <div class="verifyModal modal-open">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content text-center">
        <div class="modal-body">
          <div class="mt-1">
            <i class="icon icon-sm icon-logo-green"></i>
          </div>
          <div class="mb-1">
            請至LINE或E-mail信箱查看驗證碼
          </div>
          <div class="modal-title">
            請輸入驗證碼
            <div class="inputCode d-flex justify-content-center">
              <input type="text" maxlength="1"
                v-model="code.c1"
                @keyup="next($event, 'c2')">
              <input type="text" maxlength="1"
                ref="c2"
                v-model="code.c2"
                @keyup="next($event, 'c3')">
              <input type="text" maxlength="1"
                ref="c3"
                v-model="code.c3"
                @keyup="next($event, 'c4')">
              <input type="text" maxlength="1"
                ref="c4"
                v-model="code.c4">
            </div>
          </div>
          <div class="mt-1">重新發送</div>
        </div>
        <div class="modal-footer">
          <div class="btn" @click="verifyCode">Confirm</div>
          <div class="btn btn-green" @click="closeModel">Close</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/httpService'
import { mapGetters } from 'vuex'

export default {
  name: 'VerifyModal',
  components: {
  },
  data () {
    return {
      code: {
        c1: '',
        c2: '',
        c3: '',
        c4: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      getInvInfo: 'getInvInfo'
    })
  },
  methods: {
    next (e, next) {
      const curLength = e.target.value.length
      const nextTarget = this.$refs[next]
      console.log(this.$refs)
      if (curLength === e.target.maxLength) {
        nextTarget.focus()
      }
    },
    async verifyCode () {
      const { verifyCode } = API
      const { c1, c2, c3, c4 } = this.code
      const codes = c1 + c2 + c3 + c4
      try {
        this.$apiLoading(true)
        const res = await verifyCode(codes)
        if (res.status === 200) {
          this.postInvInfo()// 將投資資訊存入資料庫
          this.closeModel()
        }
      } catch (err) {
        this.$err({ err })
      } finally {
        this.$apiLoading(false)
      }
    },
    async postInvInfo () {
      try {
        this.$apiLoading(true)
        const { postInvAct } = API
        const res = await postInvAct(this.getInvInfo)
        if (res.status === 200) {
          this.$alertMsg(res.data.description)
        }
      } catch (err) {
        this.$err({ err })
      } finally {
        this.$apiLoading(false)
      }
    },
    closeModel () {
      this.$modal('VerifyModal', false)
    }
  }
}
</script>

<style lang="scss">
.inputCode {
  input {
    width: 30px;
    outline: none;
    border: none;
    border-bottom: 1px solid $gray;
    &:focus {
      border-bottom: 1px solid $green;
    }
  }
}
</style>
