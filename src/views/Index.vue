<template>
  <div class="index d-flex align-items-center">
    <div class="container relative">
      <div class="d-flex justify-content-between intro">
        <div class="menu">

          <router-link :to="'/classroom'">
            <div class="quarter classroom"
              @mouseover="menuItem = 'classroom'"
              @mouseleave="menuItem = ''"
              >
              <i class="icon icon-bulb"></i>
            </div>
          </router-link>

          <div class="d-flex flex-row mt-3">
            <router-link :to="'/news'">
              <div class="quarter news mr-3"
                @mouseover="menuItem = 'news'"
                @mouseleave="menuItem = ''"
                >
                <i class="icon icon-chat"></i>
              </div>
            </router-link>
            <router-link :to="'/performance'">
              <div class="quarter performance"
                @mouseover="menuItem = 'performance'"
                @mouseleave="menuItem = ''"
                >
                <div class="circle">
                  <i class="icon icon-chart"></i>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <div class="d-flex align-items-end">
          <div @click="goInvest">
            <div class="quarter investment"
              @mouseover="menuItem = 'investment'"
              @mouseleave="menuItem = ''"
              >
              <i class="icon icon-logo-blue"></i>
              <i class="icon icon-invest"></i>
            </div>
          </div>
        </div>
      </div>

      <!--功能說明變換-->
      <div class="intro-detail absolute">
        <template v-if="getUid && menuItem === ''">
          <WelcomeIntro></WelcomeIntro>
        </template>
        <template v-else-if="menuItem === 'classroom'">
          <Classroom></Classroom>
        </template>
        <template v-else-if="menuItem === 'news'">
          <News></News>
        </template>
        <template v-else-if="menuItem === 'performance'">
          <Performance></Performance>
        </template>
        <template v-else-if="menuItem === 'investment'">
          <Investment></Investment>
        </template>
        <template v-else>
          <IndexIntro></IndexIntro>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IntroDetail from '@/components/IntroDetail/IntroDetail.js'

export default {
  name: 'Index',
  components: {
    ...IntroDetail
  },
  data () {
    return {
      menuItem: ''
    }
  },
  computed: {
    ...mapGetters({
      getUid: 'getUid'
    })
  },
  methods: {
    goInvest () { // 投資前，判斷是否登入
      const uid = localStorage.getItem('uid')
      if (uid) {
        this.$router.push('investment')
      } else {
        this.$router.push('auth')
      }
    }
  }
}
</script>

<style lang='scss'>
.index {
  height: 80vh;
  .intro {
    .quarter {
      @include size(250px);
      position: relative;
      transition: width .5s, height .5s, box-shadow 1s;
      cursor: pointer;
      &:hover {
        @include size(255px);
      }
      .icon {
        position: absolute;
      }
      &.classroom {
        border-radius: 250px 0 0 0;
        background: $blue;
        &:hover {
          box-shadow: 10px 3px 10px grey;
        }
        .icon-bulb {
          right: 30%;
          bottom: 30%;
        }
      }
      &.news {
        border-radius: 0 0 0 250px;
        background: $green;
        &:hover {
          box-shadow: 10px 3px 10px grey;
        }
        .icon-chat {
          right: 30%;
          top: 30%;
        }
      }
      &.performance {
        background: $dark-green;
        &:hover {
          box-shadow: 8px 10px 10px grey;
        }
        .circle {
          @include size(220px);
          position: absolute;
          border-radius: 0 0 250px 0;
          background: $green;
          margin: 15px;
          cursor: pointer;
          .icon-chart {
            left: 30%;
            top: 26%;
          }
        }
      }
    }
    .investment {
      @include size(250px);
      background: $dark-blue;
      &:hover {
        box-shadow: 8px 10px 10px grey;
      }
      .icon-logo-blue {
        @include size(75px);
        left: 35%;
        top: -29%;
      }
      .icon-invest {
        margin: 90px;
      }
    }
  }
  .intro-detail {
    width: 843px;
    height: 249px;
    top: 0%;
    right: 0%;
  }
  // IntroDetail
  .step {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
