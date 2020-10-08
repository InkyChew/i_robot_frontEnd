<template>
  <div class="RegistPage">
    <div class="my-2">
      <input type="checkbox" name="contract" v-model="agree">
      我同意【用愛發財聲明】
    </div>

    <div class="registInfo">
      <div class="mb-2">
        <div class="d-flex justify-content-between">
          <div>Name</div>
          <div class="errMsg" v-if="$v.name.$error && !$v.name.required">
            Name is required</div>
        </div>
        <input
          type="text"
          v-model.trim="name"
          @blur="$v.name.$touch">
      </div>

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
            <div class="errMsg" v-if="!$v.password.minLength">
              Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>
          </div>
        </div>
        <input
          type="password"
          v-model="password"
          @blur="$v.password.$touch">
      </div>
      <div class="mb-2">
        <div class="d-flex justify-content-between">
          <div>Confirmed password</div>
          <div class="errMsg" v-if="$v.c_pwd.$error && !$v.c_pwd.sameAsPassword">
            Passwords must be identical.</div>
        </div>
        <input
          type="password"
          v-model="c_pwd"
          @blur="$v.c_pwd.$touch">
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <div
        class="btn"
        @click="validateForm"
        >註冊</div>
    </div>
  </div>
</template>

<script>
import API from '@/httpService'
import { required, sameAs, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'RegistPage',
  data () {
    return {
      agree: false,
      name: '',
      email: '',
      password: '',
      c_pwd: ''
    }
  },
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    },
    c_pwd: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    validateForm () {
      if (!this.agree) {
        this.$alertMsg('請同意用愛發財聲明')
      } else if (this.$v.$invalid) {
        this.$v.$touch()
        this.$alertMsg('註冊資料有誤，請確認')
      } else if (this.$v.$anyError) {
        this.$alertMsg('註冊資料有誤，請確認')
      } else {
        this.regist()
      }
    },
    async regist () {
      const { postNewUser } = API
      try {
        const data = {
          name: this.name,
          email: this.email,
          password: this.password
        }
        this.$apiLoading(true)
        const res = await postNewUser(data)
        if (res.status === 200) {
          this.$alertMsg(res.data.name + ' ' + res.data.description)
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

<style lang='scss'>
.RegistPage {
  .registInfo {
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
