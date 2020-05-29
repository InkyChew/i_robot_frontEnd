<template>
  <div class="index d-flex align-items-center">
    <div class="container relative">
      <div class="d-flex justify-content-between intro">
        <div class="menu">

          <router-link :to="'/'">
            <div class="quarter classroom"
              @mouseover="menuItem = 'classroom'"
              >
              <i class="icon icon-bulb"></i>
            </div>
          </router-link>

          <div class="d-flex flex-row mt-3">
            <router-link :to="'/'">
              <div class="quarter news mr-3"
                @mouseover="menuItem = 'news'"
                >
                <i class="icon icon-chat"></i>
              </div>
            </router-link>
            <router-link :to="'/'">
              <div class="quarter performance"
                @mouseover="menuItem = 'performance'"
                >
                <div class="circle">
                  <i class="icon icon-chart"></i>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <div class="d-flex align-items-end">
          <router-link :to="'/auth'">
            <div class="quarter investment"
              @mouseover="menuItem = 'investment'"
              >
              <i class="icon icon-logo-blue"></i>
              <i class="icon icon-invest"></i>
            </div>
          </router-link>
        </div>
      </div>

      <!--功能說明變換-->
      <div class="intro-detail absolute">
        <template v-if="menuItem === 'classroom'">
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
  methods: {

  },
  mounted () {
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
}
</style>
