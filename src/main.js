// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import './assets/css/base.less'
import axios from 'axios'
Vue.use(MintUI);
// import Swiper from "swiper";

Vue.prototype.$ajax = axios
const baseURL = 'https://api-art-app.artmkt.com'
axios.defaults.baseURL = baseURL;

Vue.prototype.debug = false




Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
