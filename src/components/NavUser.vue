<template>
  <div class="navUser">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav d-flex align-items-center ml-auto">
        <router-link
          class="nav-item nav-link active" :to="'/'"
          @mouseover="user = true">
          <i class="icon icon-xs icon-battery-blue mr-3"></i>
        </router-link>
        <router-link class="nav-item nav-link active" :to="'/'">
          <i class="icon icon-xs icon-bell-yellow mr-3"></i>
        </router-link>
        <div
          class="nav-item nav-link active"
          @mouseenter="user = true"
          @mouseleave="user = false">
          <i class="icon icon-xs icon-user mr-3"></i>
          <!--user menu-->
          <template v-if="user === true">
            <ul class="userMenu navMenu">
              <li>會員中心</li>
              <li @click="logout">登出</li>
            </ul>
          </template>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NavUser',
  data () {
    return {
      user: false
    }
  },
  methods: {
    ...mapActions({
      setUid: 'setUid'
    }),
    logout () {
      localStorage.clear()
      this.setUid(null)
      this.$router.push('/', () => {})
      window.dispatchEvent(new Event('storage'))
    }
  }
}
</script>

<style lang='scss'>
.navUser {
  position: relative;
  .navMenu {
    position: absolute;
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    z-index: 1
  }
  .userMenu {
    right: 0;
    background-color: $green;
    // background-color: $white;
    box-shadow: 4px 5px 10px grey;
    li {
      padding: 10px;
      cursor: pointer;
      &:hover {
        color: $white;
        border-bottom: 1px solid $white;
      }
    }
  }
}
</style>
