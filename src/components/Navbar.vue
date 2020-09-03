<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <router-link class="navbar-brand d-flex flex-row align-items-center" :to="'/'">
        <i class="icon icon-sm icon-logo mr-3"></i>
        <div class="logo">用 AI 發財</div>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <template v-if="getUid !== null">
        <NavUser></NavUser>
      </template>
    </div>
  </nav>
</template>

<script>
import NavUser from './NavUser'
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  components: {
    NavUser
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      getUid: 'getUid'
    })
  },
  methods: {
  }
}
</script>

<style lang='scss'>
.navbar {
  background-color: $green;
  box-shadow: 0px -1px 10px grey;
  .logo {
    cursor: pointer;
    font-weight: bold;
  }
}
</style>
