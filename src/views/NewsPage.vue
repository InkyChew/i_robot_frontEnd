<template>
  <div class="NewsPage">
    <div class="container">
      <div class="newsArticle my-5">
        <div class="title mb-1">不保2，主計總處下修今年經濟成長率</div>
        <div class="info d-flex justify-content-between">
          <div>2020-05-29</div>
          <div class="d-flex">
            <div class="mr-1">作者: 陳竫詒 張詠晴</div>
            <div>出處: 天下雜誌</div>
          </div>
        </div>
        <hr>
        <div class="article">
          ＃不保2，主計總處下修今年經濟成長率
          主計總處下修今年全年經濟成長率為1.67%，較2月2.37%預測值，下修0.7個百分點。<br>
          儘管爆發疫情，第1季經濟成長有穩住，相較於去年同期，成長1.59%。<br>
          國內疫情相對和緩，幾個產業還維持成長，半導體及資通與視聽產品國內產能大幅擴增；宅經濟盛行，無店面零售業逆勢成長，零售業營業額僅減少0.62％，另電商、外送平台、電玩遊戲消費都呈現擴增趨勢。<br>
          根據IHS Markit 預測，其他四小龍今年都將是負成長，香港-6.6％、南韓-0.9％、新加坡-8.1％，台灣還能夠保一，已是相對良好。<br>
          ＃中美緊張，人民幣匯率可能低到7.4
          人民幣兌美元匯率跌至7.16，創下近9個月來的新低。<br>
          投資市場擔憂中美局勢可能進一步升級，預料短期人民幣可能暫時維穩，等看看美方反應，是否進一步公布制裁措施。<br>
          港版國安法的表決以2878票贊成，1票反對6棄權通過，通過早是預料之事，但美方是不是真的如川普所說，將進一步制裁回應，市場都在觀望。<br>
          外匯市場分析師錢德勒（Marc Chandler）分析，看不到美中緊張情勢在未來幾個月會有什麼緩解，人民幣可能會持續貶值，兌美元匯率貶到7.3、7.4都有可能。

          目前中國人民銀行似乎在「容忍」人民幣的疲軟，人民幣匯率往下是中美緊張升溫時的典型情況，避險操作會加劇人民幣貶值。<br>
          錢德勒警告，人民幣貶值的影響除了擴及到港元，甚至會外擴，使得中國在東亞或者新興市場的競爭對手，爭相貶值。<br>
          長期而言，《路透》指出依全球金融危機的經驗來看，美元終將走弱。<br>
          ＃川普對香港沒動作，因為他在處理社群媒體
          川普今天沒討論香港議題，因為他忙著對社群媒體開刀。<br>
          川普再簽行政命令，很明顯地是要報復推特。兩天前，推特第一次在川普的推文上標誌事實查核警語。<br>
          川普在其中一則推文說，郵箱會被搶劫，且選票可能被偽造，因此通訊投票可能造成「嚴重欺詐」、導致「大選被操縱」。還說加州州長正將數百萬張選票，寄出去。

          川普推文還說，不管是誰、來自哪裡，都可以拿到選票。而這的確偏離事實，因為在美國，要登記成為選民，才有投票權。

          於是，推特在川普的推文下方打上藍色驚嘆號，並用連結帶網友去看有關通訊投票的新聞報導。
        </div>
      </div>

      <hr>
      <div class="promoteBox">
        <div class="title">推薦的文章</div>
        <div class="promoteNews mt-1">台積電向美靠攏，美國最致命的一擊，分析師：華為氣數已盡，台積電可全身而退</div>
        <div class="promoteNews mt-1">【5G開台前哨戰2】手機商搶5G換機潮 台灣手機銷售排行恐大洗牌</div>
        <div class="promoteNews mt-1">台積電向美靠攏，美國最致命的一擊，分析師：華為氣數已盡，台積電可全身而退</div>
      </div>
      <hr>

      <div class="chatMessage mt-3">
        <div class="title">留言板</div>
        <div class="mt-2 chatMessageBox">
          <div class="myMsgBox">
            <div class="myMsg d-flex align-items-center">
              <div class="photoBorder mr-2">
                <img src="@/assets/images/robot-green.png" class="photo text-center">
              </div>
              <textarea id="message" name="message" rows="2" cols="120"></textarea>
              <div>
                <div class="btn ml-3">發送</div>
              </div>
            </div>
          </div>
          <!--others msg-->
          <div class="mt-3">
            <template v-for="index in 10">
              <div :key="index" class="msgBox d-flex align-items-center mb-2">
                <div class="photoBorder mr-2">
                  <img src="@/assets/images/robot-green.png" class="photo">
                </div>
                <div class="">
                  <div class="date">2020-05-30</div>
                  <div class="msg w-100">看漲股票</div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
.newsArticle{
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .info {
    font-size: 14px;
  }
  .article {
    line-height: 32px;
  }
}
.promoteBox {
  .title{
    font-size: 20px;
    font-weight: bold;
  }
  .promoteNews {
    color: $blue;
    cursor: pointer;
    &:hover {
      color: $green;
    }
  }
}
.chatMessage {
  .title{
    font-size: 20px;
    font-weight: bold;
  }
  .myMsgBox {
    textarea {
      resize: none;
    }
  }
  .msgBox {
    .date {
      font-size: 12px;
      color: $dark-gray;
    }
    .msg {
      // height: 50px;
      // border: 1px solid $blue;
    }
  }
  .photoBorder {
    .photo {
      @include size(50px);
      border-radius: 10px;
    }
  }
}
</style>
