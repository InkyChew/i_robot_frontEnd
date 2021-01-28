<template>
  <div class="performance">
    <div class="container">
      <div class="title text-center mt-2">績效試算</div>

      <div class="mt-2">
        <canvas id="myChart" ref="myChart" height="100"></canvas>
      </div>

      <!-- <div class="d-flex px-3 mt-3">
        <input type="date">
        <div class="mx-2">-</div>
        <input type="date">
      </div> -->

      <div class="info d-flex mt-2">
        <div class="strategy col-5 px-4 py-2">
          <div class="d-flex justify-content-between">
            <div>
              <div>總交易次數</div>
              <div>獲利次數</div>
              <div>虧損次數</div>
              <div>勝率</div>
              <div>總報酬率</div>
              <div>平均報酬率</div>
            </div>
            <div :class="{ metric : !stop}">
              <div>{{ backTestResult.backtest_metric.trade }}次</div>
              <div>{{ backTestResult.backtest_metric.profit_trade }}次</div>
              <div>{{ backTestResult.backtest_metric.loss_trade }}次</div>
              <div>{{ backTestResult.backtest_metric.win_rate }}%</div>
              <div>{{ backTestResult.backtest_metric.total_profit }}%</div>
              <div>{{ backTestResult.backtest_metric.avg_profit }}%</div>
            </div>
          </div>
        </div>
        <div class="notify text-center col-7 px-4 py-2">
          <div id="message" class="message">
            {{ displayInvestMessage }}
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <div class="btn btn-green mt-2 mr-2 p-2"
          @click="startBackTest">
          Start It
        </div>
        <router-link :to="'/exhibit'" class="btn mt-2 p-2">
          Try It
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
// import data from '@/fakeData'
import API from '@/httpService'

export default {
  name: 'Performance',
  data () {
    return {
      chart: null,
      backTestResult: { // 用來儲存讀進來的資料
        backtest_metric: {},
        totalAssets: [],
        investMsgs: []
      },
      // 用來儲存顯示的資料
      displayInvestMessage: '',
      // js中的全域變數
      stop: false,
      index: 0
    }
  },
  methods: {
    initChart () {
      this.chart = new Chart(this.$refs.myChart, {
        type: 'line',
        data: {
          labels: [],
          datasets: [{
            label: '資本總額',
            data: [],
            fill: false,
            borderColor: [
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 7
          }]
        },
        options: {
          legend: {
            labels: {
              fontSize: 20
            }
          },
          scales: {
            xAxes: [{
              ticks: {
                display: false // 隱藏x軸
              }
            }],
            yAxes: [{
              ticks: {
                fontSize: 40,
                callback: function (label, index, labels) {
                  var n = label
                  var c = 0
                  var d = '.'
                  var t = ','
                  var s = n < 0 ? '-' : ''
                  var i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)))
                  var j
                  j = (j = i.length) > 3 ? j % 3 : 0

                  return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '')
                }
              }
            }]
          }
        }
      })
    },
    addData () {
      var chartData = this.chart.data
      var index = this.index
      if (index <= this.backTestResult.totalAssets.length) {
        chartData.datasets[0].data.push(this.backTestResult.totalAssets[index])
        chartData.labels.push(index)
        this.chart.update()
        // 同步更新投資訊息在lineBot
        this.displayInvestMessage += this.backTestResult.investMsgs[index]
        this.index++

        // scroll to end
        var message = this.$el.querySelector('#message')
        message.scrollTop = message.scrollHeight
      } else {
        this.stop = true
      }
    },
    startBackTest () {
      var timer = setInterval(this.addData, 80)
      if (this.stop) {
        clearInterval(timer)
      }
    },
    async initBackTestResult () {
      const { getBackTestResult } = API
      try {
        this.$apiLoading(true)
        const res = await getBackTestResult()
        if (res.status === 200) {
          this.backTestResult.backtest_metric = res.data.backtest_metric
          this.backTestResult.totalAssets = res.data.total_asset
          this.backTestResult.investMsgs = res.data.line_bot_push_msg
        }
        console.log(res)
      } catch (err) {
        this.$err({ err })
      } finally {
        this.$apiLoading(false)
      }
    }
  },
  mounted () {
    this.initChart()
    this.initBackTestResult()
    // console.log(data)
  }
}

</script>

<style lang='scss'>
.performance{
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .info {
    font-size: 20px;
    font-weight: bold;
    height: 220px;
    .strategy {
      background-color: $green;
    }
    .metric {
      visibility: hidden;
    }
    .notify {
      background-color: $dark-green;
      color: $white;
      .message {
        height: 185px;
        overflow: hidden;
        overflow-y: auto;
        white-space:pre-line;
        text-align: start;
      }
    }
  }
}
</style>
