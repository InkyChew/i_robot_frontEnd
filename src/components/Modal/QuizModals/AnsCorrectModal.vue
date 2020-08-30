<template>
  <div class="ansCorrectModal modal-open">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center">
          <div class="modal-title my-2">恭喜答對</div>
          <i class="icon icon-battery-green"></i>
          <div class="energy">能量 +20</div>
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
  name: 'AnsCorrectModal',
  data () {
    return {
    }
  },
  methods: {
    closeModal () {
      this.$modal('AnsCorrectModal', false)
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
</style>
