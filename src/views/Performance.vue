<template>
  <div class="performance">
    <div class="container">
      <div class="title text-center mt-2">績效試算</div>

      <div class="mt-2">
        <canvas id="myChart" ref="myChart" height="100"></canvas>
      </div>

      <div class="d-flex px-3 mt-3">
        <input type="date">
        <div class="mx-2">-</div>
        <input type="date">
      </div>

      <div class="info d-flex mt-4">
        <div class="strategy w-100 px-4 py-3">
          <div class="d-flex justify-content-between">
            <div>
              <div>總交易次數</div>
              <div>獲利次數</div>
              <div>虧損次數</div>
              <div>勝率</div>
              <div>總報酬率</div>
              <div>平均報酬率</div>
            </div>
            <div>
              <div>5,474</div>
              <div>4,655</div>
              <div>819</div>
              <div>85.04%</div>
              <div>95.87%</div>
              <div>50.55%</div>
            </div>
          </div>
        </div>
        <div class="notify text-center w-100 px-4 py-3">
          <div class="title mb-2">
            LINE Bot 即時通知
          </div>
          <div class="message">
            <div class="msgDate">2019.01.01-2020.01.01</div>
            您投資 $20,000 的目前報酬率為 782.87%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'Performance',
  data () {
    return {
      chart: null
    }
  },
  methods: {
    initChart () {
      this.chart = new Chart(this.$refs.myChart, {
        type: 'line',
        data: {
          labels: [new Date(2020, 1), new Date(2020, 2), new Date(2020, 3), new Date(2020, 4)],
          datasets: [{
            label: '績效',
            data: [5, 8, 12, 15],
            fill: false,
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            xAxes: [{
              type: 'time',
              time: {
                unit: 'month'
              }
            }],
            yAxes: [{
              stacked: true
            }]
          }
        }
      })
    }
  },
  mounted () {
    this.initChart()
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
    .strategy {
      height: 200px;
      background-color: $green;
    }
    .notify {
      height: 200px;
      background-color: $dark-green;
      color: $white;
      .title {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>
