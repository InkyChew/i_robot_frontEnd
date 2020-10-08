<template>
  <div class="allModels">
    <template v-for="(field, fid) in schema">
      <template v-if="getModal.indexOf(field.fieldType) !== -1">
        <component :key="fid" :is="field.fieldType"></component>
      </template>
    </template>
  </div>
</template>

<script>
import ErrModal from './ErrModal'
import MsgModal from './MsgModal'
import VerifyModal from './VerifyModal'
import QuizModals from './QuizModals'
import { mapGetters } from 'vuex'

export default {
  name: 'AllModels',
  components: {
    ErrModal,
    MsgModal,
    VerifyModal,
    ...QuizModals
  },
  data () {
    return {
      schema: [
        // deposit verify code
        { fieldType: 'VerifyModal' },
        // register
        { fieldType: 'AnsCorrectModal' },
        { fieldType: 'AnsWrongModal' },
        // Err or sysMsg
        { fieldType: 'ErrModal' },
        { fieldType: 'MsgModal' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      getModal: 'getModal'
    })
  },
  methods: {
    closeModal () {
      const modal = this.getModal[0]
      this.$modal(modal, false)
    }
  }
}
</script>

<style lang='scss'>
// .allModels {
//   .modal.show {
//     display: block;
//   }
// }
</style>
