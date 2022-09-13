<template>
  <div class="home">
    <vue-particles

        color="#dedede"

        :particleOpacity="0.7"

        :particlesNumber="50"

        shapeType="star"

        :particleSize="4"

        linesColor="#FFFFFF"

        :linesWidth="2"

        :lineLinked="true"

        :lineOpacity="0.4"

        :linesDistance="150"

        :moveSpeed="3"

        :hoverEffect="true"

        hoverMode="grab"

        :clickEffect="true"

        clickMode="push" class="cash"

    >
    </vue-particles>
    <!--  按钮  -->
    <div class="head">
      <div class="left">
        <el-button class="button">监管平台</el-button>
        <el-button class="button">监管平台</el-button>
        <el-button class="button">监管平台</el-button>
      </div>
      <div>
        <h1> 物流大数据监管平台</h1>
      </div>
      <div class="right">
        <el-button class="button">监管平台</el-button>
        <el-button class="button">监管平台</el-button>
        <el-button class="button">监管平台</el-button>
      </div>
    </div>
    <div class="summary">
      <!--  当天车辆报警汇总  -->
      <div class="operate">
        <div class="border">
          <div class="auto">
            <div class="enterprise flex">
              <div class="number flex">
                <div class="total" v-for="(item,index) in this.num" :key="index">
                  <div>{{ item }}</div>
                </div>
              </div>
              <div>企业总数</div>
            </div>
            <div class="enterprise flex">
              <div class="number flex">
                <div class="total" v-for="(item,index) in this.num" :key="index">
                  <div>{{ item }}</div>
                </div>
              </div>
              <div>企业总数</div>
            </div>
            <div class="enterprise flex">
              <div class="number flex">
                <div class="total" v-for="(item,index) in this.num" :key="index">
                  <div>{{ item }}</div>
                </div>
              </div>
              <div>企业总数</div>
            </div>
          </div>
        </div>
        <div class="vehicles flex">
          <div class="online">
            <table cellspacing="0" border="1">
              <tr>
                <th>实时在线</th>
                <td>7061</td>
              </tr>
              <tr>
                <th>今日在线</th>
                <td>123</td>
              </tr>
              <tr>
                <th>3日离线</th>
                <td>123</td>
              </tr>
              <tr>
                <th>7日离线</th>
                <td>123</td>
              </tr>
              <tr>
                <th>30日以上</th>
                <td>123</td>
              </tr>
            </table>
          </div>
          <div style="width:60%;">
            <div style="width: 100%;height: 90%;" id="chart">

            </div>
          </div>
        </div>
        <div class="police">
          <div class="flex around">
            <div class="font">{{ this.name }}</div>
            <div class="distribution">
              <button @click="ap(index)" :id="index" v-for="(item,index) in this.button_id" :key="index">{{
                  item
                }}
              </button>
            </div>
          </div>
          <div id="chart1"></div>
        </div>
      </div>
      <!--  地图  -->
      <div class="analysis">
        <div class="mileage">
          <h2 style="text-align: center;color: white;">车辆行驶里程风险</h2>
          <div class="flex around" style="height: 90%">
            <div class="kilometre">
              <div v-for="(item,index) in this.travel" :key="index">{{ item.title }}安全行驶累计里程 <span>{{
                  item.num
                }}</span> 公里
              </div>
            </div>
            <div class="vehicle-mileage">
              <div style="width: 100%;height: 80%;" id="yesterday-mileage"></div>
            </div>
          </div>
        </div>
        <div class="map">
          <div class="statistics">
            <div>车辆总数：1</div>
            <div>在线数量：2</div>
            <div>离线数量：3</div>
          </div>
          <div class="amap-example">
            <amap
                ref="centerMap"
            >
            </amap>
          </div>
          <div class="vehicle">
            <div>
              <el-button>
                危货车
              </el-button>
            </div>
            <div>
              <el-button>
                客运车
              </el-button>
            </div>
            <div>
              <el-button>
                货运车
              </el-button>
            </div>
            <div>
              <el-button>
                出租车
              </el-button>
            </div>
            <div>
              <el-button>
                公交车
              </el-button>
            </div>
            <div>
              <el-button>
                汇总
              </el-button>
            </div>
          </div>
        </div>
        <div class="roll">
          <el-table
              :data="tableData"
              height="170"
              ref="table"
              :header-cell-style="{
                background: '#00065CFF',
                color: '#fff',
                }"
          >
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <!--  业主车辆报警汇总  -->
      <div class="property">
        <div class="security">
          <div class="flex early-warning">
            <div class="active-safety">
              <div class="align">
                <div class="line"><span class="icon iconfont icon-anquan"></span></div>
                <div class="margin">2350</div>
              </div>
              <div class="align">主动安全车辆数</div>
            </div>
            <div class="police">
              <div class="align">
                <div class="line"><span class="icon iconfont icon-zuoyebaojing-copy"></span></div>
                <div>2</div>
              </div>
              <div class="align">主动安全车辆数</div>
            </div>
          </div>
          <div class="flex around align intelligence">
            <div>
              <div class="high-risk">246</div>
              <div>高风险</div>
            </div>
            <div>
              <div class="medium-risk">246</div>
              <div>中风险</div>
            </div>
            <div>
              <div class="low-risk">246</div>
              <div>低风险</div>
            </div>
          </div>
        </div>
        <div class="suspected-faulty-vehicle">
          <div class="left">驾驶异常报警分布</div>
          <div id="suspected-fault"></div>
        </div>
        <div class="risk">
          <div class="left">近30日风险趋势</div>
          <div id="risk-trend"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import "../css/font_3640822_3f52u20dc27/iconfont.css"
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }],
      title: '',
      positions: [], // 保存坐标
      newList: [], // 数据
      option: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}辆 ({d}%)'
        },
        // color:['red','yellow','green','blue',''],
        series: [
          {
            name: '车辆上线情况',
            type: 'pie',
            radius: ['50%', '100%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },

            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 1048, name: '实时在线'},
              {value: 735, name: '今日在线'},
              {value: 580, name: '3日离线'},
              {value: 484, name: '7日离线'},
              {value: 300, name: '30日以上'}
            ]
          }
        ]
      },
      faulty: {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}辆 '
        },
        xAxis: {
          type: 'category',
          data: ['生理疲劳', '抽烟', '打电话', '分神驾驶', '驾驶员异常', '其他报警'],
          axisLabel: {
            interval: 0,
            rotate: 20,
            margin: 20,
            textStyle: {
              align: 'center'
            },

          },
        },
        yAxis: {
          type: 'value'
        },
        textStyle: {
          color: '#fff'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      },
      options: {
        legend: {
          textStyle: {
            color: "#fff"
          }
        },

        tooltip: {},
        textStyle: {
          color: '#fff'
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            interval: 0,
            rotate: 20,
            margin: 20,
            textStyle: {
              align: 'center'
            },

          },
          data: ['超速报警', '疲劳驾驶', '2-5时禁驾', '偏离路线', '其他报警']
        },
        yAxis: {},
        series: [
          {
            name: '报警总数',
            type: 'bar',
            data: [150, 105, 110, 100, 100],
          },
          {
            name: '已处理',
            type: 'bar',
            data: [220, 82, 100, 100, 63],
          }
        ]
      },
      trend: {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['高风险', '中风险', '低风险'],
          textStyle: {
            color: "#fff"
          }
        },
        textStyle: {
          color: "#fff"
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '单位:分'
          }
        ],
        series: [
          {
            name: '高风险',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [2, 3, 4, 5, 6, 7, 8, 9, 10, 120, 132, 101, 134, 90, 230, 543, 123, 5467, 12, 210, 1, 2, 10, 214, 514, 5234, 213, 412, 423, 543]
          },
          {
            name: '中风险',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [2, 3, 4, 5123, 6, 7, 8, 9, 10, 120, 132, 101, 134, 90, 230, 543, 123, 547, 12, 210, 1, 2, 10, 214, 514, 524, 213, 412, 423, 543]
          },
          {
            name: '低风险',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [2, 3, 4, 5, 6, 437, 8, 9, 10, 120, 132, 101, 134, 90, 230, 543, 123, 467, 12, 210, 1, 2, 10, 214, 514, 5234, 213, 412, 423, 543]
          }
        ]
      },
      vehicle_running: {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '昨日里程',
            type: 'pie',
            radius: '100%',
            data: [
              {value: 1048, name: '100公里以下'},
              {value: 735, name: '100-200公里'},
              {value: 580, name: '200-500公里'},
              {value: 484, name: '500-1000公里'},
              {value: 300, name: '1000-1500公里'},
              {value: 484, name: '超过1500公里'},
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

      num: [0, 0, 0, 6, 0, 9],
      button_id: ['今日报警分布', '驾驶异常分布'],
      name: '今日报警分布',
      travel: [
        {
          title: '车辆',
          num: '94006812'
        },
        {
          title: '本月',
          num: '955980'
        },
        {
          title: '今日',
          num: '504162'
        }
      ]
    }
  },
  mounted() {
    this.getmounted()

  },
  methods: {
    ap(id) {
      this.name = document.getElementById(id).innerHTML
      // console.log(this.option.series[0].name)
      // this.options.series[0].name = '123'
      // this.options.series[1].name = '13'
      if (id == 0) {
        this.options.xAxis.data = ['超速报警', '疲劳驾驶', '2-5时禁驾', '偏离路线', '其他报警']
        this.options.series = [
          {
            name: '报警总数',
            type: 'bar',
            data: [150, 105, 110, 100, 100]
          },
          {
            name: '已处理',
            type: 'bar',
            data: [220, 82, 100, 100, 63]
          }
        ]
      } else if (id == 1) {
        this.options.xAxis.data = ['生理疲劳', '抽烟', '打电话', '分神驾驶', '驾驶员异常', '其他报警']
        this.options.series = [
          {
            name: '报警总数',
            type: 'bar',
            data: [1250, 1205, 1120, 1020, 1200, 500]
          },
          {
            name: '已处理',
            type: 'bar',
            data: [2210, 812, 1010, 1010, 613, 1000]
          }
        ]
      }
      // this.options.xAxis.data = ['生理疲劳', '抽烟', '打电话', '分神驾驶', '驾驶员异常','其他报警']
      // this.options.series =  {
      //   name: '报警总数',
      //   type: 'bar',
      //   data: [1150, 105, 110, 100, 100]
      // }
      console.log(this.options.series)
      this.getEchartData1()
    },
    getmounted() {
      this.getEchartData()
      this.getEchartData1()
      this.getEchartfaulty()
      this.getEcharttrend()
      this.getEchartvehicle()
      this.autoscroll()
    },
    setData() {
      this.newList = [
        {
          wz: [116.415999, 39.907888],
          rybh: "123456789",
          cfsj: "2021-08-27 11:28:46",
          rwmc: "信息查询"
        },
        {
          wz: [116.715999, 39.207888],
          rybh: "123456789",
          cfsj: "2021-08-27 11:28:46",
          rwmc: "信息查询"
        },
        {
          wz: [116.915999, 39.507888],
          rybh: "123456789",
          cfsj: "2021-08-27 11:28:46",
          rwmc: "信息查询"
        },
      ]
      this.positions = this.newList.map(item => item.wz)
    },
    loadmap() {
      // 此处有坑，setTimeout异步加载防止刷新页面地图丢失
      setTimeout(() => {
        let map = new AMap.Map('container', {
          resizeEnable: true,
          center: this.positions[0],
          zoom: 13
        });

        // 创建一个 点标记Icon

        let startIcon = new AMap.Icon({
          size: new AMap.Size(40, 40),
          image: mapIcon,
          imageSize: new AMap.Size(40, 40)
        });

        // 循环多点标记

        let i = 0, marker;
        for (; i < this.newList.length; i++) {
          marker = new AMap.Marker({
            map: map,
            icon: startIcon,
            position: this.newList[i].wz
          })
          marker.content = `<div class="markerContent"><p>任务名称：` + this.newList[i].rwmc + `</p>` + `<p>办理时间：` + this.newList[i].cfsj + `</p></div>`

          //定位标记内容

          let text = new AMap.Text({
            text: `<div class="markerContent"><p><span>任务名称：</span><span class="scrollAuto"><span>` +
                this.newList[i].rwmc +
                `</span></span></p>` +
                `<p>办理时间：` +
                this.newList[i].cfsj +
                `</p></div>`,
            anchor: 'bottom-center',
            draggable: true,
            cursor: 'pointer',
            style: {
              'background-color': 'rgba(0, 255, 255, 0.6)',
              'text-align': 'left',
              'font-size': '14px',
              color: '#fff',
              padding: '5px 15px',
              position: this.newList[i].wz,
              offset: new AMap.Pixel(51, -45)
            },
          })
        }
      })
    },
    getEchartData() {
      const myChart = this.$echarts.init(document.getElementById('chart'));
      const seriesLabel = {
        show: true
      };

      myChart.setOption(this.option);
      window.addEventListener("resize", function () {
        myChart.resize()
      })

    },
    getEchartData1() {
      let myChart = this.$echarts.init(document.getElementById('chart1'));
      const seriesLabel = {
        show: true
      };

      myChart.setOption(this.options);
      window.addEventListener("resize", function () {
        myChart.resize()
      })

    },
    getEchartfaulty() {
      let myChart = this.$echarts.init(document.getElementById('suspected-fault'));
      const seriesLabel = {
        show: true
      };

      myChart.setOption(this.faulty);
      window.addEventListener("resize", function () {
        myChart.resize()
      })
    },
    getEcharttrend() {
      let myChart = this.$echarts.init(document.getElementById('risk-trend'));
      const seriesLabel = {
        show: true
      };

      myChart.setOption(this.trend);
      window.addEventListener("resize", function () {
        myChart.resize()
      })
    },
    getEchartvehicle() {
      let myChart = this.$echarts.init(document.getElementById('yesterday-mileage'));
      const seriesLabel = {
        show: true
      };

      myChart.setOption(this.vehicle_running);
      window.addEventListener("resize", function () {
        myChart.resize()
      })
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
    }
  }
}
</script>
<style lang="scss" scoped>
#particles-js {
  width: 99%;
  height: calc(100% - 100px);
  position: absolute;
}

.home {
  width: 100%;
  min-width: 1904px;
  height: 911px;
  background: #00065b url(../img/bg.jpg) no-repeat 0 0;
  overflow: hidden;
  background-size: cover;
  margin: 0;
  padding: 0;
  border: none;
  //position: relative;

  .head {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2%;
    position: relative;


    .left {
      width: 25%;
      display: flex;
      justify-content: space-between;
      margin-left: 5%;
    }

    h1 {
      color: white;
    }

    .right {
      width: 25%;
      display: flex;
      justify-content: space-between;
      margin-right: 5%;

      .el-button {

      }
    }

    .el-button {
      width: 25%;
      color: white;
      background: #00065b url(../img/bnt.png) no-repeat;
      text-align: center;
      background-size: cover;
      border: 0;
      margin-top: 10%;
    }
  }

  .summary {
    width: 96%;
    height: 87%;
    display: flex;
    justify-content: space-between;
    margin: auto;


    .operate {
      width: 22%;
      height: 100%;
      background-size: cover;
      //font-family: "Impact";

      .border {
        width: 95%;
        height: 20%;
        //border: 1px solid #00c2fd;
        background: url(../img/1.png) no-repeat;
        background-size: cover;
        padding-top: 10%;
        padding-left: 5%;
        margin-bottom: 5%;
        position: relative;

        .enterprise {
          width: 100%;
          font-size: 15px;
          line-height: 30px;
          color: #00c2fd;
          //margin-left: 5%;
          margin-top: 1%;

          .number {
            width: 70%;
            margin-right: 5%;

            .total {
              width: 19%;
              color: white;
              text-align: center;
              margin-left: 1%;
              font-size: 25px;
              background: #00c3ed;
              border-radius: 5px;
            }
          }
        }
      }

      .vehicles {
        width: 95%;
        height: 24%;
        background: url(../img/1.png) no-repeat;
        background-size: cover;
        color: white;
        padding-top: 5%;
        padding-left: 5%;
        margin-bottom: 5%;
        position: relative;

        .online {
          width: 40%;
          //background: red;
          table {
            width: 100%;
            height: 90%;
            text-align: center;
            border: 1px solid #00c2fd;
            border-collapse: collapse;

            th {
              width: 50%;
              background: #00c2fd;
            }
          }

        }
      }

      .police {
        width: 97%;
        height: 40%;
        color: white;
        background: url("../img/1.png") no-repeat;
        background-size: cover;
        padding-top: 3%;
        position: relative;
        //margin-top: 30%;

        .font {
          font-weight: bolder;
          margin-bottom: 3%;
        }

        .distribution {
          button {
            border-radius: 10px;
            background: #00c2fd;
            color: white;
          }

          button:hover {
            cursor: pointer;
          }
        }

        #chart1 {
          width: 100%;
          height: 95%;
        }
      }

    }

    .analysis {
      width: 55%;
      height: 100%;

      .roll {
        height: 23%;
        overflow: hidden;
        background: url("../img/1.png") no-repeat;
        background-size: cover;

        ::v-deep .el-table {
          width: 90%;
          margin: 4% 0 0 7%;
          height: 100%;
          background: transparent;
          color: white;

          .el-table__body-wrapper::-webkit-scrollbar {
            /*width: 0;宽度为0隐藏*/

            width: 0;
            display: none;
          }

          .gutter {
            background: #00065c;
          }

          .el-table__body-wrapper {
            background: transparent;
          }

          tr {
            background: transparent;
          }

          tr:hover {
            color: black;
          }
        }
      }

      .mileage {
        width: 100%;
        height: 20%;
        margin: 1% auto;
        background: url("../img/1.png") no-repeat;
        background-size: cover;

        .vehicle-mileage {
          width: 35%;
          height: 100%;


          #yesterday-mileage {
            width: 100%;
            height: 100%;
          }
        }
      }

      .kilometre {
        width: 35%;
        color: white;

        span {
          font-size: 3vh;
        }

        div {
          line-height: 3vh;
        }
      }


      .map {
        width: 100%;
        height: 50%;
        background: url(../img/amiddboxttop.png) no-repeat;
        background-size: 100%;
        margin-bottom: 1%;
        position: relative;

        .amap-example {
          width: 93%;
          height: 75%;
          margin-left: auto;
          margin-right: auto;
          margin-top: 1%;
        }

        .statistics {
          width: 50%;
          display: flex;
          justify-content: space-between;
          margin: auto;
          padding-top: 1%;
          color: white;

        }

        .vehicle {
          display: flex;
          color: white;
          width: 80%;
          justify-content: space-between;
          margin: auto;
          padding-top: 5px;

          .el-button {
            width: 100%;
            border: 0;
            color: #00c2fd;
            background: url(../img/bnt.png) no-repeat;
          }
        }
      }
    }


    .property {
      width: 22%;
      background-size: cover;
      color: white;


      .security {

        width: 100%;
        height: 25%;
        background: url(../img/1.png) no-repeat;
        background-size: cover;
        margin-bottom: 5%;

        .early-warning {
          border-bottom: 1px dashed white;

          .active-safety {
            width: 50%;
            padding-bottom: 3%;
            border-right: 1px dashed white;
          }

          .police {
            width: 50%;

          }
        }

        .intelligence {
          margin-top: 3%;

          .high-risk {
            color: red;
          }

          .medium-risk {
            color: orange;
          }

          .low-risk {
            color: yellow
          }
        }

      }

      .suspected-faulty-vehicle {
        width: 100%;
        height: 25%;
        background: url(../img/1.png) no-repeat;
        background-size: cover;
        padding-top: 3%;
        margin-bottom: 5%;

        #suspected-fault {
          width: 100%;
          height: 100%;
        }
      }

      .risk {
        width: 100%;
        height: 40%;
        background: url(../img/1.png) no-repeat;
        background-size: cover;
        //margin-top: 5%;
        padding-top: 3%;

        #risk-trend {
          width: 100%;
          height: 90%;
        }
      }
    }
  }
}

.flex {
  display: flex;
}

.around {
  justify-content: space-around;
}

.align {
  text-align: center;
  margin-top: 15px;
}

//
//.line {
//  line-height: 30px;
//}

.left {
  margin-left: 8%;
}

//.margin{
//  margin-top: -10px;
//}
</style>