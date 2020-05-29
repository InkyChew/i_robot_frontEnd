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
}
</style>
