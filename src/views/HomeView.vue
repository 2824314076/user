<template>
  <div class="home">
    <div>
      <div class="flex between title">
        <!--        <div>{{ NewTime | formatDate }}</div>-->
        <div>2022-8-20 星期二 13:43:10</div>
        <h2>惠浩运网络货运平台可视化大屏</h2>
        <div>2022-8-20 星期二 13:43:10</div>
        <!--        <div style="text-align: right;">{{ NewTime | formatDate }}</div>-->
      </div>
      <div class="flex between ">
        <div class="ranking">
          <div class="row">
            <div class="flex groundcolor">
              <div class="font">货主排名top10</div>
              <div class="flex mar button" v-for="(item,index) in ranking" :key="index">
                <el-button :class="item.origin" @click="ownercargo(index)">{{ item.name }}</el-button>
              </div>
            </div>
            <div id="consignor" style="width: 100%;height: 250px;"></div>
          </div>
          <div class="volume">
            <div class="flex model">
              <div class="font">车型和发运量</div>
              <div class="flex button">
                <el-button>车辆占比</el-button>
                <el-button>发运量占比</el-button>
              </div>
            </div>
            <div id="shipping" style="width: 95%;height:85%;"></div>
          </div>
          <div class="carrier">
            <div class="flex groundcolor titleinto">
              <div class="font">承运商排名top10</div>
              <div class="flex mar button" v-for="(item,index) in acceptcarriage" :key="index">
                <el-button :class="item.green" @click="undertaketransport(index)">{{ item.name }}</el-button>
              </div>
            </div>
            <div>
              <ul v-for="(item,index) in 10" class="flex" style="list-style-type:none;padding: 0;margin:0 0 10px 0;">
                <li style="width: 30px;height:30px;text-align: center;background:orange;">
                  <div style="border-radius: 50%;background: red;width: 20px;line-height: 20px;margin-top:15%;">
                    {{ index + 1 }}
                  </div>
                </li>
                <li style="width: 300px;line-height:30px;background:orange;">北京中兴路车联网有限公司</li>
                <li style="line-height:30px;background:orange;">5000</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="statistics">
          <div class="StatisticalAnalysis" style="height: 29%;">
            <h2 style="padding-left:5%;padding-top: 5%;">统计分析</h2>
            <div>
              <div class="flex wrap" style="width: 100%;line-height: 3vh;">
                <div style="width: 45%;text-align: center;" v-for="(item,index) in amountnum" :key="index">
                  <div>{{ item.title }}</div>
                  <div class="flex" style="justify-content: center;">
                    <div class="flex ">
                      <div id="growth" style="margin-right:3%;" v-for="(ite,ind) in item.num"
                           :key="ind">
                        <div style="background: red;width: 20px;text-align: center;">{{ ite }}</div>
                      </div>
                      <div>
                        {{ item.company }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="growthtrend">
            <div class="flex seven">
              <div class="font">7日增长趋势</div>
              <div class="flex button">
                <el-button>货主</el-button>
                <el-button>司机</el-button>
                <el-button>车辆</el-button>
              </div>
            </div>
            <div id="trend" style="width: 100%;height: 95%;"></div>
          </div>
          <div>
            <div>热门路线发运量排名(月度)</div>
            <div class="flex between" v-for="(item,index) in 10" :key="index"
                 style="margin-top: 3%;height: 29px;width: 100%;background-color:;">
              <div class="flex">
                <div class="marginRight Monthlyranking" style="background: orange;">top{{ index + 1 }}</div>
                <div class="marginRight">安阳</div>
              </div>
              <div class="marginRight">-------</div>
              <div class="marginRight">梅州</div>
            </div>
          </div>
        </div>
        <div style="width: 20%;margin-top:0.8%;">
          <div class="stateimg">
            <tr>
              <td v-for="(item,key,index) in state" style="width:10%;" :key="index">
                <div style="text-align: center;">{{ key }}</div>
                <div class="flex between" v-for="(ite,ind) in item" :key="ind">
                  <div>⭐</div>
                  <div>{{ ite.title }}</div>
                  <div>{{ ite.num }}</div>
                </div>
              </td>
            </tr>
          </div>
          <div style="height: 47  %;">
            <amap/>
          </div>
          <div class="table">
            <el-table
                :data="tableData"
                height="30vh"
                ref="table">
              <el-table-column
                  prop="date"
                  label="日期">
              </el-table-column>
              <el-table-column
                  prop="name"
                  label="姓名">
              </el-table-column>
              <el-table-column
                  prop="address"
                  label="地址">
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div style="width: 20%;">
          <div class="flex wrap consignor" style="width: 100%; height: 29%;">
            <div class="consignor_line" v-for="(item,index) in 9"
                 style="margin-right: 10px;text-align: center;margin-bottom: 10px;width: 30%;">
              <div style="font-size: 10px">累计货主</div>
              <div style="font-size:20px">300家</div>
            </div>
          </div>
          <div>
            <div class="freightindex">
              <div class="font">7日运价指数</div>
              <div id="trends" style="width: 100%;height: 270px;"></div>
            </div>
          </div>
          <div>
            <div>热门线路运次排名(月度)</div>
            <div class="flex between" v-for="(item,index) in 10" :key="index"
                 style="margin-top: 3%;height: 29px;width: 100%;background-color:;">
              <div class="flex">
                <div class="marginRight Monthlyranking" style="background: orange;">top{{ index + 1 }}</div>
                <div class="marginRight">安阳</div>
              </div>
              <div class="marginRight">-------</div>
              <div class="marginRight">梅州</div>
            </div>
          </div>
        </div>
        <div style="width:20%;">
          <div class="spacing">
            <div class="font">线路运距占比</div>
            <div id="line" style="width: 100%;height: 250px;"></div>
          </div>
          <div>
            <div class="shippingvolume">
              <div class="flex">
                <div class="font">货物比例</div>
                <div class="flex button">
                  <el-button>月度</el-button>
                  <el-button>年度</el-button>
                </div>
              </div>
              <div id="goods" style="width: 100%;height: 270px;"></div>
            </div>
          </div>
          <div>
            <div>各省发货量</div>
            <div>
              <div v-for="(item,index) in 10" :key="index">
                <div class="delivery flex between">
                  <div class="titlelist">{{ index + 1 }}</div>
                  <div>北京中兴路车联网有限公司</div>
                  <div>5000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import amap from '@/views/amap'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    amap
  },
  data() {
    return {
      ranking: [
        {
          name: '发布总量',
          origin: '',
        },
        {
          name: '完成总量',
          origin: '',
        },
        {
          name: '运费总额',
          origin: '',
        },
      ],
      acceptcarriage: [
        {
          name: '发运量',
          green: '',
        },
        {
          name: '发运车次',
          green: '',
        },
        {
          name: '运费收入',
          green: '',
        },
      ],
      NewTime: '',
      timer: '',
      timeData: '',
      amountnum: [
        {
          title: '今日运单量',
          num: '300',
          company: '单'
        },
        {
          title: '今日发运量',
          num: '300',
          company: '单'
        },
        {
          title: '今日发运车次',
          num: '300',
          company: '单'
        },
        {
          title: '今日',
          num: '30000',
          company: '单'
        },
        {
          title: '今日运单量',
          num: '300',
          company: '单'
        },
        {
          title: '今日运单量',
          num: '300',
          company: '单'
        },
      ],
      optiontrend: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['12.01', '12.02', '12.03', '12.04', '12.05', '12.06', '12.07']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [13, 13, 11, 12, 14, 12, 14],
            type: 'line',
            areaStyle: {},
            smooth: true,
          }
        ]
      },
      optiontrends: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['12.01', '12.02', '12.03', '12.04', '12.05', '12.06', '12.07']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [13, 13, 11, 12, 14, 12, 14],
            type: 'line',
            color: '#f2637c',
            areaStyle: {},
            smooth: true,
          }
        ]
      },
      optiongoods: {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'right',
          top: 'bottom',
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              {value: 1048, name: '钢铁'},
              {value: 735, name: '煤炭'},
              {value: 580, name: '焦炭'},
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
      optionconsignor: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (params) {
            var tar = params[0];
            // return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            return "第" + tar.name + '名' + '<br/>' + tar.value + "辆"
          }
        },
        xAxis: {
          type: 'category',
          data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']
        },
        yAxis: {
          type: 'value'
        },
        grid: {
          left: 50
        },
        series: [
          {
            data: [5004, 4020, 3500, 3500, 3000, 2600, 2000, 1600, 1000, 400],
            type: 'bar',
            showBackground: true,
            color: '#f6a02e',
            backgroundStyle: {
              color: 'rgb(8,32,78)'
            },
            label: {
              show: true,
              position: 'inside',
              color: '#fff'
            },
          }
        ]
      },
      optionline: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (params) {
            var tar = params[0];
            // return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            return tar.name + '<br/>' + tar.value + "公里"
          }
        },
        xAxis: {
          type: 'category',
          data: ['0-20', '20-50', '50-100', '100-150', '150-200', '200+'],
          axisLabel: {
            interval: 0
          }
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110],
            type: 'bar',
            showBackground: true,
            color: '#43c7c9',
            backgroundStyle: {
              color: 'rgb(7,29,76)'
            },
            label: {
              show: true,
              position: 'inside',
              color: '#fff'
            },
          }
        ]
      },
      optionshipping: {
        legend: {
          orient: 'vertical',
          left: 'right',
          top: 'bottom',
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '40%',
            center: ['40%', '50%'],
            data: [
              {value: 1, name: '高栏车'},
              {value: 2, name: '冷藏车'},
              {value: 3, name: '危险品车'},
              {value: 4, name: '普通货车'},
              {value: 5, name: '牵引车'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              }
            },
          }
        ]
      },
      state: {
        运单状态: [
          {
            title: "装货中",
            num: '15'
          },
          {
            title: "运输中",
            num: '10'
          },
          {
            title: "待签单",
            num: '5'
          },
          {
            title: "待回单",
            num: '75'
          }
        ],
        车辆状态: [
          {
            title: "在线",
            num: '15'
          },
          {
            title: "离线",
            num: '10'
          },
          {
            title: "重驶",
            num: '5'
          },
          {
            title: "空驶",
            num: '75'
          }
        ]

      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  mounted() {
    this.getmounted()
  },
  methods: {
    ownercargo(i) {
      for (let index = 0; index < this.ranking.length; index++) {
        console.log(index, i)
        this.ranking[index].origin = ''
        if (i == index) {
          this.ranking[i].origin = 'origin'
        }
      }
    },
    undertaketransport(i) {
      for (let index = 0; index < this.acceptcarriage.length; index++) {
        console.log(index, i)
        this.acceptcarriage[index].green = ''
        if (i == index) {
          this.acceptcarriage[i].green = 'green'
        }
      }
    },
    getTrends() {
      const myChart = this.$echarts.init(document.getElementById("trend"))
      myChart.setOption(this.optiontrend);
      window.addEventListener("resize", function () {
        myChart.resize()
      })
    },
    getgoods() {
      const myChart = this.$echarts.init(document.getElementById("goods"))
      myChart.setOption(this.optiongoods);
      window.addEventListener("resize", function () {
        myChart.resize()
      })
    },
    getTrend() {
      const myChart = this.$echarts.init(document.getElementById("trends"))
      myChart.setOption(this.optiontrends);
      window.addEventListener("resize", function () {
        myChart.resize()
      })
    },
    getconsignor() {
      const myChart = this.$echarts.init(document.getElementById("consignor"))
      myChart.setOption(this.optionconsignor);
      window.addEventListener("resize", function () {
        myChart.resize()
      })
    },
    getline() {
      const myChart = this.$echarts.init(document.getElementById("line"))
      myChart.setOption(this.optionline);
      window.addEventListener("resize", function () {
        myChart.resize()
      })
    },
    getshipping() {
      const myChart = this.$echarts.init(document.getElementById("shipping"))
      myChart.setOption(this.optionshipping);
      window.addEventListener("resize", function () {
        myChart.resize()
      })
    },
    getTime() {
      this.timer = setInterval(() => {
        this.NewTime = new Date()
      }, 100)

    },
    autoscroll() {
      const table = this.$refs.table
      const divData = table.bodyWrapper
      setInterval(() => {
        divData.scrollTop += 1
        if (divData.clientHeight + divData.scrollTop === divData.scrollHeight) {
          divData.scrollTop = 0
        }
      }, 30)
    },
    getNum() {
      for (let i = 0; i < this.amountnum.length; i++) {
        if (this.amountnum[i].num.length >= 5) {
        } else {
          this.amountnum[i].num = "00" + this.amountnum[i].num
        }
      }
    },
    getmounted() {
      this.autoscroll()
      this.getNum()
      this.getTime()
      this.getTrends()
      this.getTrend()
      this.getgoods()
      this.getconsignor()
      this.getline()
      this.getshipping()
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);

    }
  },
}
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  min-height: 1080px;
  min-width: 1920px;
  background: url(../img/huihao/组2.png) no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
  color: white;

  .ranking {
    width: 19%;
    margin-left: 1%;

    .row {
      height: 28%;
      background: url(@/assets/row.png) no-repeat;
      background-size: cover;
      padding: 1%;

      .groundcolor {
        margin-top: 5%;
        margin-left: 5%;
      }

      .font {
        color: #f59f2e;
        width: 100%;
      }

      .button {
        width: 65%;

        .el-button {
          line-height: 0;
          background: #0406c0;
          color: white;
          border: 0;
          padding: 5px;
        }

        .el-button:hover {
          background: #f59f2e;
        }

        .origin {
          background: #f59f2e;
        }
      }
    }


    .carrier {
      .font {
        color: #2ac2de;
        width: 100%;
      }

      .titleinto {
        height: 15px;
        margin-bottom: 3%;
      }

      .button {
        width: 50%;

        .el-button {
          height: 20px;
          line-height: 0;
          background: #0406bf;
          color: white;
          border: 0;
          padding: 5px;
          margin-bottom: 30px;
        }

        .el-button:hover {
          background: green;
        }

        .green {
          background: green;
        }
      }
    }
  }

  .statistics {
    width: 19%;
    margin-top: -0.8%;

    .StatisticalAnalysis {
      background: url(@/assets/row.png) no-repeat;
      // padding: 5%;
    }

    #trend {
      width: 100%;
      height: 100%;
    }

    .growthtrend {
      height: 28%;
      background: url(@/assets/growthtrend.png) no-repeat;
      margin-top: -1vh;

      .font {
        width: 60%;
        margin-top: 3%;
      }

      .seven {
        padding-top: 3%;
        padding-left: 5%;
      }

      .button {
        width: 50%;
        margin-top: 3%;

        .el-button {
          height: 3vh;
          line-height: 0;
          background: #0406bf;
          color: white;
          border: 0;
          padding: 5px;
        }
      }
    }

    .freightindex {
      .font {
        width: 60%;
      }
    }


  }

  .shippingvolume {
    .font {
      width: 55%;
    }

    .button {
      width: 40%;

      .el-button {
        line-height: 0;
        background: #0406be;
        color: white;
        border: 0;
        padding: 5px;
      }
    }
  }

  ::v-deep .table {
    .el-table {
      background: transparent;
      //.el-table__cell{
      //  background: transparent;
      //}
      tr {
        background: transparent;
      }

      td {
        color: white;
        border: 0;
      }

      th {
        background: #033b76;
        border: 0;
      }
    }

    .el-table__body tr:hover > td {
      background-color: #3D52984F !important;
    }

    .el-table__body-wrapper::-webkit-scrollbar {
      /*width: 0;宽度为0隐藏*/

      width: 0;
      display: none;
    }

    .el-table__row {
      background: #2ac2de;
    }

    .el-table::before {
      height: 0;
    }
  }

  .volume {
    height: 30%;
    background: url(@/assets/volume.png);

    .model {
      padding-top: 5%;
      padding-left: 5%;
    }

    .font {
      width: 50%;
    }

    .button {
      width: 40%;

      .el-button {
        line-height: 0;
        background: #0406bf;
        color: white;
        border: 0;
        padding: 5px;
      }
    }
  }
}

.flex {
  display: flex;
}

.title {
  line-height: 80px;
  height: 11vh;

  h1 {
    margin-left: 2%;
  }
}


.between {
  justify-content: space-between;
}

.around {
  justify-content: space-around;
}

.wrap {
  flex-wrap: wrap;
}

.list-type {
  list-style-type: none;
}

.mar {
  margin-left: 2%;
}

// .marginRight{
//   margin-right:10%;
// }
.delivery {
  margin-top: 2.3%;
  background-color: #f59f2e;
  padding: 1%;

  .titlelist {
    width: 1vw;
    text-align: center;
    border-radius: 50%;
    background-color: red;
  }
}

.content {
  justify-content: center;
  text-align: center;
}

.Monthlyranking {
  width: 2.5vw;
}

.stateimg {
  background: url(@/assets/state.png);
  padding: 4%;
}

.consignor {
  background: url(@/assets/consignor.png) no-repeat;
  background-size: 100%;

  .consignor_line {
    margin-top: 10%;
  }
}

.spacing {
  background: url(@/assets/row.png) no-repeat;
  padding: 5%;

  .font {
    width: 95%;
    color: #43c6c8;
  }
}
</style>