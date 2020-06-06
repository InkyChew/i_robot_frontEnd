<template>
  <div class="ansWrongModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="text-center my-2">
            <i class="icon icon-sm icon-robotError"></i>
            <div class="modal-title ml-1">可惜答錯了</div>
          </div>
          <div class="d-flex justify-content-center">
            賺得金額: (15-10) * 1000 <br>
            手續費: (10000 + 15000) * 0.1425%<br>
            證交稅: 15000*0.3<br>
            賺得金額 - 手續費 - 證交稅 = 實際獲利<br>
          </div>
          <div class="correctAns text-center mt-2">正確答案
            <span>C</span>
          </div>
        </div>
        <div class="modal-footer">
          <div class="btn" @click="$emit('closeModel', null)">Close</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnsWrongModal',
  data () {
    return {
      close: false
    }
  },
  methods: {
  },
  mounted () {
    this.close = false
  }
}
</script>

<style lang="scss">
.ansWrongModal {
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.6);
  .modal-title {
    font-size: 20px;
    font-weight: bold;
    color: $blue;
  }
  .correctAns {
    font-size: 18px;
    span {
      color: $dark-green;
      font-weight: bold;
    }
  }
}
</style>
