import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from "../pages/Login/Login.vue"
//配置所有路由的数组对象
export default[
    {
        path:"/home",
        component:Home,
        meta:{
            showfooter:true
        }
    },
    {
        path:"/order",
        component:Order,
        meta:{
            showfooter:true
        }
    },
    {
        path:"/profile",
        component:Profile,
        meta:{
            showfooter:true
        }
    },
    {
        path:"/search",
        component:Search,
        meta:{
            showfooter:true
        }
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