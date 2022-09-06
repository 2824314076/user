<template>
  <div class="home">
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
            <div style="width: 100%;height: 100%;" id="chart">

            </div>
          </div>
        </div>
        <div class="police">
          <div class="flex around">
            <div class="font">今日报警分布</div>
            <div class="distribution">
              <button id="add" @click="ap">今日报警</button>
              <button>驾驶异常</button>
              <button>疑似故障</button>
            </div>
          </div>
          <div id="chart1"></div>
        </div>
      </div>
      <!--  地图  -->
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
      <!--  业主车辆报警汇总  -->
      <div class="property">
        <div class="security">
          <div class="flex early-warning">
            <div class="active-safety">
              <div class="flex around">
                <div class="line">1</div>
                <div>2</div>
              </div>
              <div class="align">主动安全车辆数</div>
            </div>
            <div class="police">
              <div class="flex around">
                <div class="line">1</div>
                <div>2</div>
              </div>
              <div class="align">主动安全车辆数</div>
            </div>
          </div>
          <div class="flex around align risk">
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
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

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
      option: {},
      num: [0, 0, 0, 6, 0, 9],
      saw: ''
    }

  },
  mounted() {
    // window._AMapSecurityConfig = {
    //   securityJsCode: 'e14aeb7facfe80db15705ce0c89d0b7c',
    // }
    this.getEchartData()
    this.getEchartData1()
  },
  methods: {
    ap() {
      console.log(document.getElementById("add").innerHTML)
      // console.log(this.$refs.add.innerHTML)
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
          size: new AMap.size(40, 40),
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
      var myChart = this.$echarts.init(document.getElementById('chart'));
      const seriesLabel = {
        show: true
      };
      this.option = {
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
              {value: 580, name: '今日在线'},
              {value: 484, name: '7日离线'},
              {value: 300, name: '30日以上'}
            ]
          }
        ]
      };

      myChart.setOption(this.option);
      // window.addEventListener("resize", function() {
      //   myChart.resize()
      // })

    },
    getEchartData1() {
      var myChart = this.$echarts.init(document.getElementById('chart1'));
      const seriesLabel = {
        show: true
      };
      this.option = {
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
            interval: 0
          },
          data: ['超速报警', '疲劳驾驶', '2-5时禁驾', '偏离路线', '其他报警']
        },
        yAxis: {},
        series: [
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
      };

      myChart.setOption(this.option);
      // window.addEventListener("resize", function() {
      //   myChart.resize()
      // })

    },
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  min-width: 1904px;
  height: 911px;
  background: #00065b url(../img/bg.jpg) no-repeat 0 0;
  background-size: cover;
  margin: 0;
  padding: 0;
  border: none;

  .head {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    //background: red;
    margin-bottom: 2%;

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
      //background: url(../img/arightboxtop.png) no-repeat;
      background-size: cover;
      font-family: "Impact";

      .border {
        width: 97%;
        height: 20%;
        //border: 1px solid #00c2fd;
        margin-bottom: 1%;
        //margin-left: 10%;

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
        //border: 1px solid #00c2fd;
        color: white;
        padding: 1%;
        margin-bottom: 1%;

        .online {
          width: 40%;
          //background: red;
          table {
            width: 100%;
            height: 100%;
            text-align: center;
            border: 1px solid #00c2fd;

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

    .map {
      width: 55%;
      height: 490px;
      background: url(../img/amiddboxttop.png) no-repeat;
      background-size: 100%;

      .amap-example {
        width: 93%;
        height: 400px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1%;
      }

      .statistics {
        width: 50%;
        display: flex;
        justify-content: space-between;
        margin: 1% auto;
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

    .property {
      width: 22%;
      background-size: cover;
      color: white;

      .security {
        width: 100%;

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

        .risk {
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
}

.line {
  line-height: 50px;
}
</style>