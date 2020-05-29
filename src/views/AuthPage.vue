<template>
  <div class="authPage">
    <div class="container">
      <div class="row my-5">
        <div class="col-6">
          <template v-if="tab === 'login'">
            <AuthPageLogin></AuthPageLogin>
          </template>
          <template v-else-if="tab === 'regist'">
            <AuthPageRegist></AuthPageRegist>
          </template>
        </div>
        <div class="col-6">
          <div class="nav-tabs d-flex text-center">
            <div
              @click="tab = 'login'"
              :class="{'active': tab === 'login'}"
              class="tab col-6 p-2">登入</div>
            <div
              @click="tab = 'regist'"
              :class="{'active': tab === 'regist'}"
              class="tab col-6 p-2">註冊</div>
          </div>

          <template v-if="tab === 'login'">
            <div class="login">
              <div class="hr-text text-center my-3" data-content="快速登入"></div>
              <a href="javascript:;" @click="linkToLine">
                <div class="line-btn d-flex align-items-center justify-content-center">
                  <i class="icon icon-line"></i>
                  <div class="ml-1">Login in with Line</div>
                </div>
              </a>

              <div class="hr-text text-center my-3" data-content="OR"></div>
              <div>E-mail</div>
              <input type="email" class="w-100">
              <div class="mt-2">Password</div>
              <input type="password" class="w-100">
              <div class="d-flex justify-content-center">
                <div class="btn mt-2">登入</div>
              </div>
            </div>
          </template>

          <template v-if="tab === 'regist'">
            <div class="login">
              <div class="my-2">
                <input type="checkbox" name="contract" value="agree">
                我同意【用愛發財聲明】
              </div>

              <div class="hr-text text-center my-3" data-content="快速開始"></div>
              <div class="line-btn d-flex align-items-center justify-content-center">
                <i class="icon icon-line"></i>
                <div class="ml-1">sign up with Line</div>
              </div>

              <div class="hr-text text-center my-3" data-content="OR"></div>
              <div>E-mail</div>
              <input type="email" class="w-100">
              <div class="mt-2">Password</div>
              <input type="password" class="w-100">
              <div class="d-flex justify-content-center">
                <div class="btn mt-2">註冊</div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthPageLogin from '@/components/AuthPageDetail/AuthPageLogin'
import AuthPageRegist from '@/components/AuthPageDetail/AuthPageRegist'
import API from '@/httpService'
import QS from 'qs'

export default {
  name: 'authPage',
  components: {
    AuthPageLogin,
    AuthPageRegist
  },
  data () {
    return {
      tab: 'login'
    }
  },
  methods: {
    async linkToLine () {
      const { getLineLoginURL } = API
      try {
        // this.$apiLoading(true)
        const res = await getLineLoginURL()
        // if (res.data.status === 'Success')
        const url = res.data.LineloginURL
        window.location.href = url
      } catch (err) {
        console.log(err)
        // this.$err({ err })
        // throw err
      } finally {
        // this.$apiLoading(false)
      }
    },
    async loginWithLine () {
      const code = this.$route.query.code
      const body = QS.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'http://localhost:8080/',
        client_id: '1654259982',
        client_secret: '0f39cf55ed96aa82b4f101fcbe2e7649'
      })
      const { postCodeToLine } = API
      try {
        const res = await postCodeToLine(body)
        if (res.data) {
          console.log(res.data)
        }
      } catch (err) {

      } finally {

      }
    }
  },
  mounted () {
  }
}
</script>

<style lang='scss'>
.authPage {
  .line-btn {
    background-color: $green;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: $dark-green;
    }
  }
}
</style>
