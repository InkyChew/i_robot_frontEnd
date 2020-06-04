<template>
  <div class="newsIntro">
    <div class="d-flex justify-content-center align-items-center">
      <i class="icon icon-xs icon-chat-green"></i>
      <div class="title ml-1">新聞交流平台</div>
    </div>

    <div class="d-flex justify-content-around m-2">
      <div class="step">
        <div class="mb-1">Ⅰ 國內外財金新聞</div>
        <i class="icon icon-news"></i>
      </div>
      <div class="step">
        <div class="mb-1">Ⅱ 留言互動</div>
        <i class="icon icon-chatBoard"></i>
      </div>
      <div class="step">
        <div class="mb-2">Ⅲ 獲得能量</div>
        <i class="icon icon-sm icon-battery-green"></i>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NewsIntro',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang='scss'>
.newsIntro {
  width: 100%;
  height: 249px;
  color: $green;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
