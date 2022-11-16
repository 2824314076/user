import Vue from 'vue'
import axios from 'axios'
Vue.prototype.axios = axios;
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts';
import VueParticles from 'vue-particles'
Vue.prototype.$echarts = echarts
import AmapVue from '@amap/amap-vue'
import echartsAmap from 'echarts-amap'
import App from './App.vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import router from './router'
import store from './store'
import "./request/interceptor.js";
// import '@/assets/'

Vue.config.productionTip = false

AmapVue.config.version = '2.0'; // 默认2.0，这里可以不修改
AmapVue.config.key = 'b3a0570889fe34dc3f6a7693def9da83';
AmapVue.config.plugins = [
    'AMap.ToolBar',
    'AMap.MoveAnimation',
    // 在此配置你需要预加载的插件，如果不配置，在使用到的时候会自动异步加载
];

Vue.use(VueParticles)
Vue.use(echarts)
Vue.use(ElementUI)
Vue.use(AmapVue);
Vue.use(VXETable)
Vue.use(echartsAmap)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
