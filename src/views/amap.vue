<template>
  <div>
    <div id="mapEcharts" style="width:100%;height: 52vh;"></div>
  </div>
</template>

<script>
import chinaMap from '@/assets/china.json'

export default {

  data() {
    return {};
  },
  mounted() {
    this.amap()
  },
  methods: {
    amap() {

      var geoCoordMap = {
        china: [117.3, 41.03],
        Botswana: [124.68, 41.03],
        Canada: [90.895168, 30.2312],
        Brazil: [100.895168, 30.2312],
      };
      /**
       * 所在点对应数据
       * 上面数据添加修改后务必这里添加修改，value可不用
       */
      var data = [{
        id: 1,
        name: 'china',
        value: 1359821.465,

      }, {
        id: 2,
        name: 'Botswana',
        value: 1969.341
      }, {
        id: 3,
        name: 'Canada',
        value: 34126.24
      },
        {
          id: 4,
          name: 'Brazil',
          value: 195210.154,
        }]

      //  生成出线方法
      function formtGCData(geoData, data, srcNam, dest) {
        var tGeoDt = []
        if (dest) {
          for (var i = 0; i < data.length; i++) {
            if (srcNam !== data[i].name) {
              tGeoDt.push({
                coords: [geoData[srcNam], geoData[data[i].name]]
              })
            }
          }
        } else {
          for (var j = 0; j < data.length; j++) {
            if (srcNam !== data[j].name) {
              tGeoDt.push({
                coords: [geoData[data[j].name], geoData[srcNam]]
              })
            }
          }
        }
        return tGeoDt
      }

      //  生成进线方法
      function formtVData(geoData, data, srcNam) {
        var tGeoDt = []
        for (var i = 0; i < data.length; i++) {
          var tNam = data[i].name
          if (srcNam !== tNam) {
            tGeoDt.push({
              name: tNam,
              value: geoData[tNam]
            })
          }
        }
        tGeoDt.push({
          name: srcNam,
          value: geoData[srcNam],
          symbolSize: 8,
        })
        tGeoDt.forEach((item) => {
          if (item.name == 'china') {
            item.itemStyle = {
              color: 'red'
            }

          } else {
            item.itemStyle = {
              color: '#9E992F'
            }

          }
        })
        return tGeoDt
      }

      this.$echarts.registerMap("China", {geoJSON: chinaMap});
      var planePath = 'arrow'//箭头类型 //''circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin',  'arrow', 'none''
      let myChart = this.$echarts.init(document.getElementById('mapEcharts'))
      var option = {
        geo: {
          map: 'China',
          zoom: 1.2,//地图的缩放
          label: {
            emphasis: {
              show: true,
              color: '#fff'
            }
          },
          roam: true,//是否滚动缩放
          regions: [
            {
              name: 'beijing', //这个名字可以是map（世界地图），China（中国地图高亮）
              itemStyle: {
                normal: {
                  areaColor: '#052328',
                  borderColor: '#ffc107',
                  borderWidth: 1,
                },
                emphasis: {
                  areaColor: '#1F5F70',
                },
              },
            },
          ],
          itemStyle: {
            normal: {
              areaColor: '#144351',
              borderColor: 'rgba(114, 225, 255, 0.6)',//国界线颜色
              borderType: 'dotted',//国界线类型
            },
            emphasis: {
              areaColor: '#1F5F70'
            }
          },
        },
        series: [
          {
            type: 'lines',//飞线
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.1,
              color: '#fff',//箭头颜色
              symbol: planePath,
              symbolSize: 8,
            },
            lineStyle: {
              normal: {
                color: '#278FA2',//线的颜色
                width: 1,
                opacity: 0.4,
                curveness: 0.2,
                type: 'dotted',//'dotted'点型虚线 'solid'实线 'dashed'线性虚线
              },
              emphasis: {
                type: 'dotted',
                color: 'yellow',//线的颜色
              }

            },
            data: formtGCData(geoCoordMap, data, 'china', false)
          },
          {
            type: 'scatter',//圆点
            coordinateSystem: 'geo',
            zlevel: 10,
            symbolSize: 10,
            hoverAnimation: false,
            silent: true,
            data: formtVData(geoCoordMap, data, 'Brazil')
          },
        ]
      }
      myChart.setOption(option);
    }
  },
};
</script>
