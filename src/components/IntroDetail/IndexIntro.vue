<template>
  <div class="indexIntro">
    <div class="d-flex justify-content-center align-items-center">
      <div class="title ml-1">為您量身打造的投資工具</div>
    </div>

    <div class="d-flex justify-content-around m-2">
      <div class="step1 d-flex flex-column align-items-center">
        <div class="mb-1">資金門檻低</div>
        <i class="icon icon-sm icon-cash"></i>
      </div>
      <div class="step2 d-flex flex-column align-items-center">
        <div class="mb-1">無須盯盤</div>
        <i class="icon icon-sm icon-timeline"></i>
      </div>
      <div class="step3 d-flex flex-column align-items-center">
        <div class="mb-1">知識門檻低</div>
        <i class="icon icon-sm icon-book"></i>
      </div>
    </div>

    <div class="d-flex justify-content-center mt-4">
      <router-link
        class="btn btn-green title"
        :to="'/auth'">立即登入</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexIntro',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
.indexIntro {
  width: 100%;
  height: 249px;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .btn {
    width: 30%;
    &:hover {
      transition: transform 0.3s ease-in;
      transform: scale(1.1);
      // box-shadow: 10px 3px 10px grey;
    }
    &:focus {
      box-shadow: unset;
    }
  }
}
</style>
