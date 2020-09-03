<template>
  <div class="loginPage">
    <div class="hr-text text-center my-3" data-content="快速登入"></div>
    <a href="javascript:;" @click="linkToLine">
      <div class="line-btn d-flex align-items-center justify-content-center">
        <i class="icon icon-line"></i>
        <div class="ml-1">Login in with Line</div>
      </div>
    </a>

    <div class="hr-text text-center my-3" data-content="OR"></div>
    <div class="loginInfo">
      <div class="mb-2">
        <div class="d-flex justify-content-between">
          <div>E-mail</div>
          <div v-if="$v.email.$error">
            <div class="errMsg" v-if="!$v.email.required">E-mail is required</div>
            <div class="errMsg" v-if="!$v.email.email">E-mail is invalid</div>
          </div>
        </div>
        <input
          type="email"
          v-model="email"
          @blur="$v.email.$touch">
      </div>
      <div class="mb-2">
        <div class="d-flex justify-content-between">
          <div>Password</div>
          <div v-if="$v.password.$error">
            <div class="errMsg" v-if="!$v.password.required">Password is required.</div>
          </div>
        </div>
        <input
          type="password"
          v-model="password"
          @blur="$v.password.$touch">
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <div
        class="btn"
        @click="validateForm">登入</div>
    </div>
  </div>
</template>

<script>
import API from '@/httpService'
import { required, email } from 'vuelidate/lib/validators'

const token = {
  accessToken: ''
}
export { token } // store in memeory

export default {
  name: 'LoginPage',
  components: {

  },
  data () {
    return {
      tab: 'login',
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  methods: {
    async linkToLine () {
      const { getLineLoginURL } = API
      try {
        this.$apiLoading(true)
        const res = await getLineLoginURL()
        if (res.status === 200) {
          const url = res.data.LineloginURL
          window.location.href = url
        }
      } catch (err) {
        this.$err({ err })
      } finally {
        this.$apiLoading(false)
      }
    },
    validateForm () {
      this.$v.$touch()
      if (this.$v.$anyError) {
        this.$alertMsg('登入資料有誤，請確認。')
      } else {
        this.login()
      }
    },
    async login () {
      const { loginAPI } = API
      try {
        const data = {
          email: this.email,
          password: this.password
        }
        this.$apiLoading(true)
        const res = await loginAPI(data)
        if (res.data.status === 401) {
          console.log(res.data.description)
        } else {
          token.accessToken = res.data.access_token
          localStorage.setItem('uid', res.data.uid)
          console.log(res.data.description)
          this.$router.replace('/investment')
        }
      } catch (err) {
        this.$err({ err })
      } finally {
        this.$apiLoading(false)
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang='scss'>
.loginPage {
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
  .loginInfo{
    .errMsg {
      font-size: 14px;
      color: $orange
    }
    input {
      width: 100%;
    }
  }
}
</style>
