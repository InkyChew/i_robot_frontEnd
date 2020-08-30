<template>
  <div class="welcomeIntro">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="photoBorder">
        <img :src="picture" class="photo">
      </div>
      <div class="title ml-1">嗨~鈺穎</div>
      <div>快使用【用AI發財】開始投資吧!</div>
    </div>

    <div class="d-flex justify-content-around m-2">
      <div class="d-flex justify-content-center">
        <div
          class="btn"
          @click="logout">登出</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WelcomeIntro',
  data () {
    return {
      picture: require('@/assets/images/robot-green.png')
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      window.dispatchEvent(new Event('storage'))
    }
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
