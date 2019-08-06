import routes from "./routes"
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
//配置路由器
export default new VueRouter({
    mode:"history",
    routes
})