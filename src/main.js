// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 配置axios
import Axios from 'axios'
// 配置公共的URL
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
Vue.prototype.$axios = Axios

// 配置mint-ui
import MintUI from 'mint-ui'
// 引入css样式，此时的路径表示去node-modules直接中mint-ui文件中的内容
import 'mint-ui/lib/style.css'
// 安装全局插件，挂载属性
Vue.use(MintUI)

// 引入适配
import "./js/rem.js";
// 引入自己文件中的css文件
import "./assets/css/main.scss";
// 引入图标的css
import "./assets/font/iconfont.css";

// 引入自己的ul和li组件
import MyUl from "@/components/Common/MyUl"
import MyLi from "@/components/Common/MyLi"
// 注册全局组件
Vue.component(MyUl.name,MyUl)
Vue.component(MyLi.name,MyLi)

// 引入
import NavBar from "@/components/Common/NavBar"
// 全局注册
Vue.component(NavBar.name,NavBar)

// 定义moment全局日期过滤器
import Moment from 'moment'

Vue.filter('converTime',function(data, formatStr){
  return Moment(data).format(formatStr)
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
