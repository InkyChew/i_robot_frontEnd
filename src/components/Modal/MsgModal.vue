<template>
  <div class="msgModal modal-open">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="text-center my-2">
            <i class="icon icon-sm icon-logo-green"></i>
          </div>
          <div class="modal-title d-flex justify-content-center">
            {{ getMsg }}
          </div>
        </div>
        <div class="modal-footer">
          <div class="btn" @click="closeModel">Close</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MsgModal',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      getMsg: 'getMsg'
    })
  },
  methods: {
    closeModel () {
      this.$modal('MsgModal', false)
    }
  }
}
</script>

<style lang="scss">
</style>
