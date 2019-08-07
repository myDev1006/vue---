/** 
 * 发送ajax的函数
 * 对请求和响应数据进行处理
*/
import axios from "axios"
import qs from "qs"

axios.interceptors.request.use(config =>{
  let {method,data} = config
  if(method.toUpperCase() == "POST" && data instanceof Object){
    //将data数据格式转换成encoded格式查询字符串
    config.data = qs.stringify(data)
  }
  return config
})

axios.interceptors.response.use(response =>{
  return response.data
},error =>{
  alert(error.message)
  return new Promise(()=>{})
})
export default axios