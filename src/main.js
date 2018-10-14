// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import './assets/css/base.less'
// import fastClick from 'fastclick'
import axios from 'axios'
Vue.use(MintUI);
Vue.prototype.$ajax = axios
const baseURL = 'https://api-art-app.artmkt.com'
axios.defaults.baseURL = baseURL;


// 当使用FastClick 时，input框在ios上点击输入调取手机自带输入键盘不灵敏，有时候甚至点不出来。而安卓上完全没问题。这个原因是因为FastClick的点击穿透。解决方法
// fastClick.attach(document.body)
// fastClick.prototype.onTouchEnd = function(event) {
//   if(event.target.hasAttribute("type") && event.target.getAttribute("type") === "text") {
//     event.preventDefault();　　　
//     return false;　　
//   }
// }


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
