<template>
  <div class="investmentPage">
    <div class="container">
      <div class="row mt-5">
        <div class="col-4">
          <!-- <div class="selfInfo d-flex flex-column align-items-center"> -->
            <div class="photoBorder">
              <img :src="idTokenDecode.picture" class="photo">
            </div>
            <div class="username">{{ idTokenDecode.name }}</div>
          <!-- </div> -->
          <div>目前投入總資金: 20,000</div>
          <div>報酬率: 5%</div>
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
import QS from 'qs'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

export default {
  name: 'Investment',
  components: {
    Deposit
  },
  data () {
    return {
      tab: 'deposit',
      tokenResult: {},
      idTokenDecode: {}
    }
  },
  methods: {
    initLogin () {
      const code = this.$route.query.code // 綁定 line 成功，取得 userId
      // const decline = this.$route.query.error // 拒絕綁定 line
      const body = QS.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'http://localhost:8080/investment',
        client_id: '1654259982',
        client_secret: '0f39cf55ed96aa82b4f101fcbe2e7649'
      })
      axios.post('https://api.line.me/oauth2/v2.1/token', body, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
        .then(res => {
          this.tokenResult = res.data
          this.idTokenDecode = jwtDecode(res.data.id_token)
        })
    }
  },
  mounted () {
    this.initLogin()
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
