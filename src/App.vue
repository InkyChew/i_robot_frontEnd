<template>
  <div id="app">
    <Navbar :key="getUid"></Navbar>

    <!--loading特效-->
    <loading
      :active.sync="isLoading"
      :background-color="'rgba(255,255,255, 0.8)'"
      :color="'#45BB89'"
      :width= "128"
      :height= "128"></loading>

        <!-- alert 系統訊息 -->
    <AllModals></AllModals>

    <transition name="pageFade" mode="out-in">
      <router-view/>
    </transition>

    <Footer></Footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AllModals from '@/components/Modal/AllModals'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    AllModals
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading',
      getUid: 'getUid'
    })
  },
  methods: {
    ...mapActions({
      setUid: 'setUid'
    })
  },
  mounted () {
    this.setUid(localStorage.getItem('uid'))
  }
}
</script>

<style lang="scss">
.pageFade {
  &-enter {
    transition: all .5s ease-in-out;
    opacity: 0;
  }
  &-enter-to {
    transition: all .5s ease-in-out;
    opacity: 1;
  }
  &-leave {
    transition: all .5s ease-in-out;
    opacity: 1;
  }
  &-leave-to {
    transition: all .5s ease-in-out;
    opacity: 0;
  }
}
</style>
