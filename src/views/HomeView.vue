<template>
  <div class="home">
    <!--    <div class="wpbox">-->
    <!--      <div class="bnt">-->
    <!--        <div class="topbnt_left fl">-->
    <!--          <ul>-->
    <!--            &lt;!&ndash; <li class="active"><a href="https://gitee.com/iGaoWei/big-data-view">警情警力</a></li> &ndash;&gt;-->
    <!--            <li><a href="https://gitee.com/iGaoWei/big-data-view">智慧物业</a></li>-->
    <!--            <li><a href="https://gitee.com/iGaoWei/big-data-view">智慧停车</a></li>-->
    <!--            <li><a href="https://gitee.com/iGaoWei/big-data-view">智慧门禁</a></li>-->
    <!--          </ul>-->
    <!--        </div>-->
    <!--        <h1 class="tith1 fl">智慧小区大数据分析</h1>-->
    <!--        <div class=" fr topbnt_right">-->
    <!--          <ul>-->
    <!--            <li><a href="https://gitee.com/iGaoWei/big-data-view">智慧安防</a></li>-->
    <!--            <li><a href="https://gitee.com/iGaoWei/big-data-view">社区电商</a></li>-->
    <!--            <li class="active"><a href="https://gitee.com/iGaoWei/big-data-view">数据分析</a></li>-->
    <!--          </ul>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      &lt;!&ndash; bnt end &ndash;&gt;-->
    <!--      <div class="left1">-->
    <!--        <div class="aleftboxttop">-->
    <!--          <h2 class="tith2">设备报修及投诉建议</h2>-->
    <!--          <div class="lefttoday_tit" style=" height:8%">-->
    <!--            <p class="fl">地区：银滩花园</p>-->
    <!--            <p class="fr">时间段：2020-06月</p>-->
    <!--          </div>-->
    <!--          <div class="lefttoday_number">-->
    <!--            <div class="widget-inline-box text-center fl">-->
    <!--              <p>总报修数</p>-->
    <!--              <h3 class="ceeb1fd">54</h3>-->
    <!--              <h4 class="text-muted pt6">环比<img src="img/iconup.png" height="16"/>2%</h4>-->
    <!--            </div>-->
    <!--            <div class="widget-inline-box text-center fl">-->
    <!--              <p>已处理</p>-->
    <!--              <h3 class="c24c9ff">54</h3>-->
    <!--              <h4 class="text-muted pt6">环比<img src="img/icondown.png" height="16"/>3%</h4>-->
    <!--            </div>-->
    <!--            <div class="widget-inline-box text-center fl">-->
    <!--              <p>处理中</p>-->
    <!--              <h3 class="cffff00">4</h3>-->
    <!--              <h4 class="text-muted pt6">环比<img src="img/icondown.png" height="16"/>3%</h4>-->
    <!--            </div>-->
    <!--            <div class="widget-inline-box text-center fl">-->
    <!--              <p>逾期</p>-->
    <!--              <h3 class="c11e2dd">4</h3>-->
    <!--              <h4 class="text-muted pt6">环比<img src="img/icondown.png" height="16"/>3%</h4>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          &lt;!&ndash; lefttoday_number end &ndash;&gt;-->
    <!--        </div>-->
    <!--        <div class="aleftboxtmidd">-->
    <!--          <h2 class="tith2">安防设备</h2>-->
    <!--          <div class="lefttoday_tit height ht">-->
    <!--            <p class="fl">地区：银滩花园</p>-->
    <!--            <p class="fr">时间段：2020-06月</p>-->
    <!--          </div>-->
    <!--          <div id="aleftboxtmidd" class="aleftboxtmiddcont"></div>-->
    <!--        </div>-->
    <!--        <div class="aleftboxtbott">-->
    <!--          <h2 class="tith2">水电费用</h2>-->
    <!--          <div class="lefttoday_tit height">-->
    <!--            <p class="fl">地区：银滩花园</p>-->
    <!--            <p class="fr">时间段：2020-06月</p>-->
    <!--          </div>-->
    <!--          <div id="aleftboxtbott" class="aleftboxtbott_cont"></div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      &lt;!&ndash;  left1 end &ndash;&gt;-->
    <!--      <div class="mrbox">-->
    <!--        <div class="mrbox_topmidd" style="width: 69%;">-->
    <!--          <div class="amiddboxttop">-->
    <!--            <h2 class="tith2 pt1">银滩花园</h2>-->
    <!--            <div class="amiddboxttop_map" style="">-->
    <!--              <span class="camera_l" style=" top:34%;left:32%"></span>-->
    <!--              <span class="camera_l" style=" top:10%;left:10%"></span>-->
    <!--              <span class="camera_l" style=" top:5%;left:40%"></span>-->
    <!--              <span class="camera_l" style=" top:10%;left:50%"></span>-->
    <!--              <span style=" top:30%;left:75%"></span>-->
    <!--              <span style=" top:5%;left:92%"></span>-->
    <!--              <span style=" top:40%;left:83%"></span>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          &lt;!&ndash;  amiddboxttop end&ndash;&gt;-->
    <!--          <div class="amidd_bott">-->
    <!--            <div class="amiddboxtbott1 fl">-->
    <!--              <h2 class="tith2 pt1">社区电商</h2>-->
    <!--              <div id="amiddboxtbott1" class="amiddboxtbott1content"></div>-->
    <!--            </div>-->

    <!--            <div class="amiddboxtbott2 fl">-->
    <!--              <h2 class="tith2 pt1">智慧物业</h2>-->
    <!--              <div id="amiddboxtbott2" class="amiddboxtbott2content"></div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          &lt;!&ndash; amidd_bott end &ndash;&gt;-->
    <!--        </div>-->
    <!--        &lt;!&ndash; mrbox_top end &ndash;&gt;-->
    <!--        <div class="mrbox_top_right">-->
    <!--          <div class="arightboxtop">-->
    <!--            <h2 class="tith2">智慧停车</h2>-->
    <!--            <div class="lefttoday_tit">-->
    <!--              <p class="fl">地区：银滩花园</p>-->
    <!--              <p class="fr">时间段：2018-06-10</p>-->
    <!--            </div>-->
    <!--            <div class="zhtc_table_title">-->
    <!--              <div>车牌</div>-->
    <!--              &lt;!&ndash; 车牌 &ndash;&gt;-->
    <!--              <div>进/出场时间</div>-->
    <!--              &lt;!&ndash; 进场时间 &ndash;&gt;-->
    <!--              <div>图片</div>-->
    <!--              &lt;!&ndash; 图片 &ndash;&gt;-->
    <!--              <div>类型</div>-->
    <!--              &lt;!&ndash; 车辆类型 &ndash;&gt;-->
    <!--            </div>-->
    <!--            <div id="zhtc_table" class="left2_table">-->
    <!--              <ul>-->
    <!--                <li>-->
    <!--                  <p class="fl"><b>银滩花园B区</b>-->
    <!--                  </p>-->
    <!--                  <div class="zhtc_table_li_content">-->
    <!--                    <div>甘A09B12</div>-->
    <!--                    <div>2020-06-17 <br/> 17:09:40</div>-->
    <!--                    <div><img width="80" src="img/carLicensePlate/琼A180Q8.jpg"/></div>-->
    <!--                    <div>临时车</div>-->
    <!--                  </div>-->
    <!--                </li>-->
    <!--                <li class="bg">-->
    <!--                  <p class="fl"><b>银滩花园B区</b>-->
    <!--                  </p>-->
    <!--                  <div class="zhtc_table_li_content">-->
    <!--                    <div>甘A9T528</div>-->
    <!--                    <div>2020-06-17 <br/> 17:09:40</div>-->
    <!--                    <div><img width="80" src="img/carLicensePlate/甘A9T528.jpg"/></div>-->
    <!--                    <div>临时车</div>-->
    <!--                  </div>-->
    <!--                </li>-->
    <!--                <li>-->
    <!--                  <p class="fl"><b>银滩花园B区</b>-->
    <!--                  </p>-->
    <!--                  <div class="zhtc_table_li_content">-->
    <!--                    <div>甘A17J18</div>-->
    <!--                    <div>2020-06-17 <br/> 17:09:40</div>-->
    <!--                    <div><img width="80" src="img/carLicensePlate/甘A17J18.jpg"/></div>-->
    <!--                    <div>临时车</div>-->
    <!--                  </div>-->
    <!--                </li>-->
    <!--                <li class="bg">-->
    <!--                  <p class="fl"><b>银滩花园B区</b>-->
    <!--                  </p>-->
    <!--                  <div class="zhtc_table_li_content">-->
    <!--                    <div>甘A17J18</div>-->
    <!--                    <div>2020-06-17 <br/> 17:09:40</div>-->
    <!--                    <div><img width="80" src="img/carLicensePlate/甘A17J18 (1).jpg"/></div>-->
    <!--                    <div>临时车</div>-->
    <!--                  </div>-->
    <!--                </li>-->
    <!--                <li>-->
    <!--                  <p class="fl"><b>银滩花园B区</b>-->
    <!--                  </p>-->
    <!--                  <div class="zhtc_table_li_content">-->
    <!--                    <div>甘A17M35</div>-->
    <!--                    <div>2020-06-17 <br/> 17:09:40</div>-->
    <!--                    <div><img width="80" src="img/carLicensePlate/甘A17M35.jpg"/></div>-->
    <!--                    <div>临时车</div>-->
    <!--                  </div>-->
    <!--                </li>-->
    <!--                <li class="bg">-->
    <!--                  <p class="fl"><b>银滩花园B区</b>-->
    <!--                  </p>-->
    <!--                  <div class="zhtc_table_li_content">-->
    <!--                    <div>甘A076A6</div>-->
    <!--                    <div>2020-06-17 <br/> 17:09:40</div>-->
    <!--                    <div><img width="80" src="img/carLicensePlate/甘A076A6.jpg"/></div>-->
    <!--                    <div>临时车</div>-->
    <!--                  </div>-->
    <!--                </li>-->
    <!--                <li>-->
    <!--                  <p class="fl"><b>银滩花园B区</b>-->
    <!--                  </p>-->
    <!--                  <div class="zhtc_table_li_content">-->
    <!--                    <div>甘A76L77</div>-->
    <!--                    <div>2020-06-17 <br/> 17:09:40</div>-->
    <!--                    <div><img width="80" src="img/carLicensePlate/甘A76L77.jpg"/></div>-->
    <!--                    <div>临时车</div>-->
    <!--                  </div>-->
    <!--                </li>-->
    <!--                <li class="bg">-->
    <!--                  <p class="fl"><b>银滩花园B区</b>-->
    <!--                  </p>-->
    <!--                  <div class="zhtc_table_li_content">-->
    <!--                    <div>甘A096R2</div>-->
    <!--                    <div>2020-06-17 <br/> 17:09:40</div>-->
    <!--                    <div><img width="80" src="img/carLicensePlate/甘A096R2.jpg"/></div>-->
    <!--                    <div>临时车</div>-->
    <!--                  </div>-->
    <!--                </li>-->
    <!--                <li>-->
    <!--                  <p class="fl"><b>银滩花园B区</b>-->
    <!--                  </p>-->
    <!--                  <div class="zhtc_table_li_content">-->
    <!--                    <div>甘A497D9</div>-->
    <!--                    <div>2020-06-17 <br/> 17:09:40</div>-->
    <!--                    <div><img width="80" src="img/carLicensePlate/甘A497D9.jpg"/></div>-->
    <!--                    <div>临时车</div>-->
    <!--                  </div>-->
    <!--                </li>-->


    <!--              </ul>-->
    <!--            </div>-->

    <!--          </div>-->
    <!--          <div class="arightboxbott">-->
    <!--            <h2 class="tith2 ">小区信息</h2>-->
    <!--            <div class="lefttoday_tit">-->
    <!--              <p class="fl">地区：银滩花园</p>-->
    <!--              <p class="fr">时间段：2020-06月</p>-->
    <!--            </div>-->
    <!--            <div id="arightboxbott" class="arightboxbottcont"></div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        &lt;!&ndash; mrbox_top_right end &ndash;&gt;-->
    <!--      </div>-->

    <!--    </div>-->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
