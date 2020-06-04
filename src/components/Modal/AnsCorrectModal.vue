<template>
  <div :class="{'close' : close}" class="ansCorrectModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <button type="button" class="close" @click="close = true">
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="modal-body text-center">
          <div class="modal-title my-2">恭喜答對</div>
          <i class="icon icon-battery-green"></i>
          <div class="energy">能量 +20</div>
        </div>
        <div class="modal-footer">
          <div class="btn" @click="close = true">Close</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnsCorrectModal',
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
.ansCorrectModal {
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  outline: 0;
  .modal-title {
    font-size: 20px;
    font-weight: bold;
  }
}
.close {
  display: none;
}
</style>
