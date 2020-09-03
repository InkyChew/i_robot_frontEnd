<template>
  <div class="errModal modal-open">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="text-center my-2">
            <i class="icon icon-sm icon-robotError"></i>
            <div class="">{{ getError.code }} ERROR</div>
          </div>
          <div class="modal-title d-flex justify-content-center">
            {{ getError.message }}
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
  name: 'ErrModal',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      getError: 'getError'
    })
  },
  methods: {
    closeModel () {
      this.$modal('ErrModal', false)
    }
  }
}
</script>

<style lang="scss">
</style>
