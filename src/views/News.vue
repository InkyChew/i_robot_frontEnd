<template>
  <div class="news">
    <div class="container">
      <div class="row mt-5">
        <div class="col-7">
          <div class="title text-center mb-5">新聞交流平台</div>
          <!--幻燈片-->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide relative">
                <img class="d-block w-100" src="@/assets/images/news/news1.jpg">
                <div class="newsTitle">
                  台積電向美靠攏，美國最致命的一擊，分析師：華為氣數已盡，台積電可全身而退
                </div>
              </div>
              <div class="swiper-slide relative">
                <img class="d-block w-100" src="@/assets/images/news/news2.jpg">
                <div class="newsTitle">
                  【5G開台前哨戰2】手機商搶5G換機潮 台灣手機銷售排行恐大洗牌
                </div>
              </div>
              <div class="swiper-slide relative">
                <img class="d-block w-100" src="@/assets/images/news/news3.jpg">
                <div class="newsTitle">
                  不保2，主計總處下修今年經濟成長率
                </div>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <!--熱門與最新-->
        <div class="col-5 newsList">
          <div class="d-flex justify-content-end mb-4">
            <input type="text">
            <div class="btn ml-2">search</div>
          </div>

          <!--熱門與最新-->
          <div class="hotNews">
            <div class="title text-center mb-1">熱門文章</div>
            <router-link
              class="newsItem mt-1"
              :to="'/newsPage'"
              >台積電向美靠攏，美國最致命的一擊，分析師：華為氣數已盡，台積電可全身而退</router-link>
            <div class="newsItem mt-1">【5G開台前哨戰2】手機商搶5G換機潮 台灣手機銷售排行恐大洗牌</div>
            <div class="newsItem mt-1">台積電向美靠攏，美國最致命的一擊，分析師：華為氣數已盡，台積電可全身而退</div>
          </div>

          <div class="latestNews mt-2">
            <div class="title text-center mb-1">最新文章</div>
            <div class="newsItem mt-1">台積電向美靠攏，美國最致命的一擊，分析師：華為氣數已盡，台積電可全身而退</div>
            <div class="newsItem mt-1">【5G開台前哨戰2】手機商搶5G換機潮 台灣手機銷售排行恐大洗牌</div>
            <div class="newsItem mt-1">台積電向美靠攏，美國最致命的一擊，分析師：華為氣數已盡，台積電可全身而退</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'News',
  data () {
    return {
      Newswiper: null
    }
  },
  methods: {
    initSwiper () {
      const config = {
        loop: true,
        speed: 1000,
        effect: 'fade',
        cubeEffect: {
          // slideShadows: false,
          // shadow: false
          shadowOffset: 10,
          shadowScale: 1
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 1500
        }
      }
      this.Newswiper = new Swiper('.swiper-container', config)
    }
  },
  mounted () {
    this.initSwiper()
  }
}
</script>

<style lang='scss'>
.news {
  .title {
    font-weight: bold;
    font-size: 24px;
  }
  .newsList {
    .title {
      color: $blue;
      font-weight: bold;
      font-size: 20px;
    }
    .newsItem {
      color: $dark-green;
      // white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
      &:hover {
        color: $green;
      }
    }
  }
  .swiper-pagination-bullet {
    width: 30px;
    height: 5px;
    background-color: $white;
    border-radius: 0%
  }
  .swiper-container {
    height: 421px;
    border-radius: 10px;
  }
  .newsTitle {
    position: absolute;
    bottom: 10%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px;
  }
}
</style>
