// 间接更新状态数据的方法的对象
import {
  reqAddress,
  reqCategorys,
  reqShops
} from "../api/index"

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from "./mutation-types"
export default{
  async getAddress({commit,state}){//请求地址的action
    let {longitude,latitude} = state
    let result = await reqAddress(longitude,latitude)
    if(result.code == 0){
      let address = result.data
      commit(RECEIVE_ADDRESS,address)
    }
  },
  async getCategorys({commit}){//请求分类的action
    let result = await reqCategorys()
    if(result.code == 0){
      let categorys = result.data
      commit(RECEIVE_CATEGORYS,categorys)
    }
  },
  async getShops({commit,state}){//请求商铺的action
    let {longitude,latitude} = state
    let result = await reqShops({longitude,latitude})
    if(result.code == 0){
      let shops = result.data
      commit(RECEIVE_SHOPS,shops)
    }
  }

  
}