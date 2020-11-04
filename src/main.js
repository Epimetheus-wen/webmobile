import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'font-awesome/css/font-awesome.min.css'
import Vant from 'vant';
import axios from 'axios';
import store from './store'
import { post, fetch, patch, put } from './utils/fetch.js'
import { updateToken } from './utils/common.js'
// import VueJsonp from 'vue-jsonp'
//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

Vue.prototype.$updateToken = updateToken;


import echarts from 'echarts'
Vue.prototype.$echarts = echarts


import 'vant/lib/index.css';
import moment from "moment"
Vue.use(Vant);
Vue.use(moment);
// Vue.use(VueJsonp)
Vue.config.productionTip = false



new Vue({
    moment,
    router,
    axios,
    store,
    render: h => h(App),
}).$mount('#app')