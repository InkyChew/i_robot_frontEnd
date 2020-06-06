<template>
  <div class="quiz">
    <div class="question my-3">
      Q: AI Bot 以10元買進1張股票，15元賣出，請問 AI Bot 總共獲利多少?
    </div>
    <div class="ans">
      <div :class="{select : ans === 1}" class="choice" @click="ans = 1">A. $2,518</div>
      <div :class="{select : ans === 2}" class="choice" @click="ans = 2">B. $3,246</div>
      <div :class="{select : ans === 3}" class="choice" @click="ans = 3">C. $4,919</div>
    </div>
    <div class="btn mt-3" @click="sendAns">送出答案</div>

    <template v-if="showModal === 'AnsCorrectModal'">
      <AnsCorrectModal @closeModel="showModal = $event"></AnsCorrectModal>
    </template>
    <template v-if="showModal === 'AnsWrongModal'">
      <AnsWrongModal @closeModel="showModal = $event"></AnsWrongModal>
    </template>
  </div>
</template>

<script>
import AnsCorrectModal from '@/components/Modal/AnsCorrectModal'
import AnsWrongModal from '@/components/Modal/AnsWrongModal'

export default {
  name: 'Quiz',
  components: {
    AnsCorrectModal,
    AnsWrongModal
  },
  data () {
    return {
      ans: null,
      showModal: null
    }
  },
  methods: {
    sendAns () {
      if (this.ans === 3) {
        this.showModal = 'AnsCorrectModal'
      } else {
        this.showModal = 'AnsWrongModal'
      }
    }
  }
}
</script>

<style lang="scss">
.quiz {
  .question {
    font-size: 20px;
    font-weight: bold;
  }
  .ans {
    .choice {
      padding: 10px;
      cursor: pointer;
      &:hover {
        color: $green;
      }
      &.select {
        color: $dark-green;
      }
    }
  }
}
</style>
