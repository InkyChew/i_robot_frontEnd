<template>
  <div class="welcomeIntro">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="photoBorder">
        <img :src="getUser.picture" class="photo">
      </div>
      <div class="title ml-1">嗨~{{ getUser.name }}</div>
      <div>目前總收益: 100,000</div>
      <div class="mt-1">快使用【用AI發財】開始投資吧!</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WelcomeIntro',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      getUser: 'getUser'
    })
  },
  methods: {
  }
}
</script>

<style lang='scss'>
.welcomeIntro {
  width: 100%;
  height: 249px;
  .photoBorder{
    border-radius: 50px;
    .photo{
      @include size(100px);
      border-radius: 50%;
      border: 3px double $dark-green;
    }
  }
  .title {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
