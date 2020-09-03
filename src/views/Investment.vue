<template>
  <div class="investmentPage">
    <div class="container">
      <div class="row mt-5">
        <div class="col-4">
          <div class="selfInfo d-flex justify-content-start">
            <div class="d-flex flex-column align-items-center">
              <div class="photoBorder">
                <img :src="userInfo.picture" class="photo">
              </div>
              <div class="username mt-1">{{ userInfo.name }}</div>
              <div class="mt-2">
                <div>目前投入總資金: 20,000</div>
                <div>報酬率: 5%</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="nav-tabs d-flex text-center">
            <div
              @click="tab = 'deposit'"
              :class="{'active': tab === 'deposit'}"
              class="tab col-6 p-2">增加資本額</div>
            <div
              @click="tab = 'history'"
              :class="{'active': tab === 'history'}"
              class="tab col-6 p-2">歷史績效</div>
          </div>

          <template v-if="tab === 'deposit'">
            <Deposit></Deposit>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Deposit from '@/components/InvestmentPage/Deposit'
import API from '@/httpService'
import { mapActions } from 'vuex'
import { token } from '@/components/AuthPageDetail/LoginPage'

export default {
  name: 'Investment',
  components: {
    Deposit
  },
  data () {
    return {
      tab: 'deposit',
      userInfo: {
      }
    }
  },
  methods: {
    ...mapActions({
      setUid: 'setUid'
    }),
    async initLogin () {
      // 從資料庫抓取使用者資料
      const { getUserInfo } = API
      const uid = localStorage.getItem('uid')
      this.setUid(uid)
      try {
        this.$apiLoading(true)
        const res = await getUserInfo(uid)
        console.log(res)
        if (res.status === 200) {
          const getUser = res.data.data
          this.userInfo = { ...getUser }
          if (this.userInfo.picture === null) {
            this.userInfo.picture = require('@/assets/images/probot-green.png')
          }
        }
      } catch (err) {
        this.$err({ err })
      } finally {
        this.$apiLoading(false)
      }
    },
    async loginWithLine () {
      const code = this.$route.query.code
      const data = {
        code: code
      }
      const { postCodeToLine } = API
      try {
        this.$apiLoading(true)
        const res = await postCodeToLine(data)
        console.log(res)
        if (res.status === 200) {
          token.accessToken = res.data.access_token
          localStorage.setItem('uid', res.data.uid)
          console.log(token.accessToken)
          this.initLogin()
        }
      } catch (err) {
        this.$err({ err })
      } finally {
        this.$apiLoading(false)
      }
    }
  },
  mounted () {
    const uid = localStorage.getItem('uid')
    if (this.$route.query.code && uid === null) {
      this.loginWithLine()
    } else {
      this.initLogin() // not login with line
    }
  }
}
</script>

<style lang='scss'>
.investmentPage {
  .photoBorder{
    border-radius: 50px;
    .photo{
      @include size(200px);
      border-radius: 50%;
      border: 10px double $dark-green;
    }
  }
  .username{
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
