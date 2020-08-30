<template>
  <div class="ansWrongModal modal-open">
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
          <div class="btn" @click="closeModal">Close</div>
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
    }
  },
  methods: {
    closeModal () {
      this.$modal('AnsWrongModal', false)
    }
  }
}
</script>

<style lang="scss">
.ansWrongModal {
  .modal-title {
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
