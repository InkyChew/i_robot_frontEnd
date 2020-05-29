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
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav d-flex align-items-center ml-auto">
          <router-link class="nav-item nav-link active" :to="'/'">
            <i class="icon icon-xs icon-battery-blue mr-3"></i>
          </router-link>
          <router-link class="nav-item nav-link active" :to="'/'">
            <i class="icon icon-xs icon-bell-yellow mr-3"></i>
          </router-link>
          <router-link class="nav-item nav-link active" :to="'/'">
            <i class="icon icon-xs icon-user mr-3"></i>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
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
    font-weight: bold;
  }
  // .nav-item {
  //   // padding: 20px;
  // }
}
</style>
