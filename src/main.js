import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./store/index"
import Star from "./components/Star/Star.vue"
Vue.component("Star",Star)//全局注册
//入口文件
new Vue({
  render: h => h(App),//相当于下边那么写
  /*el:"#app",
  components:{
    App
  },
  template:"<App/>"*/
  router,//注册路由器，全局使用
  store
}).$mount('#app')
