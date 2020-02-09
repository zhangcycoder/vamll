//network的入口文件 只负责导出请求方法
//引入request函数

import {requestData} from './networkClient'
import config from './networkConfig'
/** 
 * 登录请求
*/

export let login = (url,params)=> {
    return requestData(config.method.GET,url,params)
}

//注册请求

export let register = (url,params)=> {
   return requestData(config.method.POST,url,params)
}