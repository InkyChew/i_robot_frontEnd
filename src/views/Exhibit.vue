<template>
  <div class="Exhibit">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="exhibitForm">
            <div class="asset mt-4">
              本金 : 10,000,000 元
            </div>
            <div class="name mt-2 d-flex align-items-center">
              <div class="mr-3">Name</div>
              <input type="text" v-model="name" @blur="$v.name.$touch">
              <div v-if="$v.name.$error">
                <div class="errMsg" v-if="!$v.name.required">Name is required</div>
              </div>
            </div>
            <div class="stopLossPoint mt-2">
              <div class="d-flex align-items-center">
                <div class="mr-3">設定停損點</div>
                <input
                  type="number"
                  id="stopLossPoint"
                  name="stopLossPoint"
                  placeholder="0-100"
                  v-model.number="stopLossPoint"
                  @blur="$v.stopLossPoint.$touch"
                />
                <div class="ml-1">%</div>
                <div v-if="$v.stopLossPoint.$error">
                  <div class="errMsg" v-if="!$v.stopLossPoint.required">停損點 is required</div>
                  <div class="errMsg" v-if="!$v.stopLossPoint.integer">停損點 should be integer</div>
                  <div class="errMsg" v-if="!$v.stopLossPoint.between">停損點 should between 0-100</div>
                </div>
              </div>
            </div>
            <div class="stopEarnPoint mt-2">
              <div class="d-flex align-items-center">
                <div class="mr-3">設定停利點</div>
                <input
                  type="number"
                  id="stopEarnPoint"
                  name="stopEarnPoint"
                  placeholder="0-100"
                  v-model.number="stopEarnPoint"
                  @blur="$v.stopEarnPoint.$touch"
                />
                <div class="ml-1">%</div>
                <div v-if="$v.stopEarnPoint.$error">
                  <div class="errMsg" v-if="!$v.stopEarnPoint.required">停利點 is required</div>
                  <div class="errMsg" v-if="!$v.stopEarnPoint.integer">停利點 should be integer</div>
                  <div class="errMsg" v-if="!$v.stopEarnPoint.between">停利點 should between 0-100</div>
                </div>
              </div>
            </div>
            <div class="buyPercentage mt-2">
              <div class="d-flex align-items-center">
                <div class="mr-3">買入比例</div>
                <input
                  type="number"
                  id="buyPercentage"
                  name="buyPercentage"
                  min="4"
                  max="100"
                  placeholder="4-100"
                  v-model.number="buyPercentage"
                  @blur="$v.buyPercentage.$touch"
                />
                <div class="ml-1">%</div>
                <div v-if="$v.buyPercentage.$error">
                  <div class="errMsg" v-if="!$v.buyPercentage.required">買入比例 is required</div>
                  <div class="errMsg" v-if="!$v.buyPercentage.integer">買入比例 should be integer</div>
                  <div class="errMsg" v-if="!$v.buyPercentage.between">買入比例 should between 4-100</div>
                </div>
              </div>
            </div>
            <div class="sold mt-2">
              <div class="d-flex align-items-center">
                <div class="mr-3">賣出交易數</div>
                <input
                  type="number"
                  id="sold"
                  name="sold"
                  min="0"
                  max="10"
                  placeholder="0-10"
                  v-model.number="sold"
                  @blur="$v.sold.$touch"
                />
                <div class="ml-1">個</div>
                <div v-if="$v.sold.$error">
                  <div class="errMsg" v-if="!$v.sold.required">賣出交易數 is required</div>
                  <div class="errMsg" v-if="!$v.sold.integer">賣出交易數 should be integer</div>
                  <div class="errMsg" v-if="!$v.sold.between">賣出交易數 should between 0-100</div>
                </div>
              </div>
            </div>
            <div
              class="btn mt-3"
              @click="validateForm"
              >送出</div>
          </div>
          <hr>

          <div class="mt-3">
            <!-- Name:  -->
            <div class="result d-flex">
              投資報酬率: {{ ROI }}%
            </div>
          </div>
        </div>
        <div class="exhibitRank col-6">
          <div class="title text-center mt-2">排行榜</div>
          <div class ="tScroll">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">報酬率</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(rank, index) in ranks">
                  <tr :key="index">
                    <th scope="row">{{index+1}}</th>
                    <td>{{rank.name}}</td>
                    <td>{{rank.rate}}%</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/httpService'
import { required, integer, between } from 'vuelidate/lib/validators'
// import data from '@/fakeData'

export default {
  name: 'Exhibit',
  data () {
    return {
      name: '',
      stopLossPoint: null,
      stopEarnPoint: null,
      buyPercentage: null,
      sold: null,
      ROI: 0,
      ranks: null
    }
  },
  validations: {
    name: {
      required
    },
    stopLossPoint: {
      required,
      integer,
      between: between(0, 100)
    },
    stopEarnPoint: {
      required,
      integer,
      between: between(0, 100)
    },
    buyPercentage: {
      required,
      integer,
      between: between(4, 100)
    },
    sold: {
      required,
      integer,
      between: between(0, 10)
    }
  },
  methods: {
    validateForm () {
      this.$v.$touch()
      if (this.$v.$anyError) {
        this.$alertMsg('輸入資料格式有誤')
      } else {
        this.sendExhibitForm()
      }
    },
    async sendExhibitForm () {
      const { postExhibitForm } = API
      try {
        this.$apiLoading(true)
        const data = {
          name: this.name,
          loss: this.stopLossPoint,
          profit: this.stopEarnPoint,
          buy: this.buyPercentage,
          sell: this.sold
        }
        const res = await postExhibitForm(data)
        this.ROI = res.data.total_profit_rate
        // init form
        this.name = ''
        // this.stopLossPoint = null
        // this.stopEarnPoint = null
        // this.buyPercentage = null
        // this.sold = null
        // update rank
        this.getRank()
      } catch (err) {
        this.$err({ err })
      } finally {
        this.$apiLoading(false)
      }
    },
    async getRank () {
      const { getExhibitRank } = API
      try {
        const res = await getExhibitRank()
        this.ranks = JSON.parse(res.data.exhibit_rank)
      } catch (err) {
        this.$err({ err })
      }
    }
  },
  mounted () {
    this.getRank()
  }
}

</script>

<style lang='scss'>
.Exhibit{
  .result {
    font-size: 24px;
    color: red
  };
  .exhibitRank {
    .title {
      font-weight: bold;
      font-size: 28px;
    };
    .tScroll {
      height: 74vh;
      overflow-y: scroll;
    }
  }
  .exhibitForm {
    .asset {
      font-weight: bold;
    }
    input {
      width: 100px;
    }
    .errMsg {
      font-size: 14px;
      color: $orange;
      margin-left: 10px
    }
  }
}
</style>
