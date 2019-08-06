// 定义n个接口请求函数的模块
import ajax from "./ajax"
let base = "/api"
//根据经纬度获取地址
export let reqAddress = (longitude,latitude) =>ajax(base+`/position/${latitude},${longitude}`)

//获取食物分类列表
export let reqCategorys = () => ajax(base+"/index_category")

//获取商铺列表
export let reqShops = ({latitude,longitude}) => ajax(base+"/shops",{
  params:{
    latitude,
    longitude
  }
})