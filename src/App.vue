<template>
  <div id="app">
    <Navbar></Navbar>

    <!--loading特效-->
    <!-- <loading :active.sync="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"></loading> -->

    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
// import mapGetters from 'vuex'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  // computed: {
  //   ...mapGetters({
  //     isLoading: 'isLoading'
  //   })
  // },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
