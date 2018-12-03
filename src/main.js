// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


// import { Tabbar, TabbarItem } from 'vant';
// Vue.use(Tabbar).use(TabbarItem);


import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);


import axios from 'axios'
Vue.prototype.$axios = axios
// axios.defaults.baseURL = '/api'
// axios.defaults.headers.post['Content-Type'] = 'application/json';


Vue.config.productionTip = false

/* eslint-disable注册组件，引用模板 no-new */
new Vue({
  el: '#app2',
  router,
  components: { App },
  template: '<App/>',
  axios,

})


