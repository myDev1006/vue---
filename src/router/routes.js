import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from "../pages/Login/Login.vue"
//配置所有路由的数组对象
export default[
    {
        path:"/home",
        component:Home
    },
    {
        path:"/order",
        component:Order
    },
    {
        path:"/profile",
        component:Profile
    },
    {
        path:"/search",
        component:Search
    },
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/login",
        component:Login
    }
]