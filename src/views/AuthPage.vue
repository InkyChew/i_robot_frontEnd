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
            <LoginPage></LoginPage>
          </template>

          <template v-if="tab === 'regist'">
            <RegistPage></RegistPage>
          </template>
        </div>
      </div>
    </div>

    <FootNav></FootNav>
  </div>
</template>

<script>
import AuthPageLogin from '@/components/AuthPageDetail/AuthPageLogin'
import AuthPageRegist from '@/components/AuthPageDetail/AuthPageRegist'
import LoginPage from '@/components/AuthPageDetail/LoginPage'
import RegistPage from '@/components/AuthPageDetail/RegistPage'
import FootNav from '@/components/FootNav'

export default {
  name: 'AuthPage',
  components: {
    AuthPageLogin,
    AuthPageRegist,
    LoginPage,
    RegistPage,
    FootNav
  },
  data () {
    return {
      tab: 'login'
    }
  },
  methods: {

  },
  mounted () {
  }
}
</script>

<style lang='scss'>

</style>
