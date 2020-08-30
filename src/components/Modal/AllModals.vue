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
import AlertModal from './AlertModal'
import QuizModals from './QuizModals'
import { mapGetters } from 'vuex'

export default {
  name: 'AllModels',
  components: {
    AlertModal,
    ...QuizModals
  },
  data () {
    return {
      schema: [
        { fieldType: 'AlertModal' },
        // register
        { fieldType: 'AnsCorrectModal' },
        { fieldType: 'AnsWrongModal' }
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
