//引入文件
// import Vue from 'vue';
import axios from 'axios';
import config from './networkConfig'
//注册使用axios
// Vue.use(axios);
//挂载拦截器 
//设置请求超时时间
axios.defaults.timeout = 10000

// 配置请求的基准URL地址
axios.defaults.baseURL = 'http://localhost:8080/api/'

//请求之前
axios.interceptors.request.use((response) => {
    /**
     * 解析服务器响应状态码，做出不同处理
     * 提示器
     */
    return response
}, (error) => {
    return Promise.reject(error)
})

/*进阶方法*
 *
 *
 */
export function requestData(method, url, params) {
    switch (method) {
        case config.method.GET:
            return get(url, params)
        case config.method.POST:
            return post(url, params)
    }
}


function get(url, params) {
    //通过promise返回数据
    return new Promise((resolve, reject) => {//接收的参数是一个函数 resolve同样是一个函数 会将promise的状态由进行中转成已完成 reject会把promise的状态由进行中转到失败
        axios.get(url, params)
            .then((res) => { resolve(res.data) })
            .catch((err) => { reject(err) })
    })
}

function post(url, params) {
    return new Promise((resolve, reject) => {//接收的参数是一个函数 resolve同样是一个函数 会将promise的状态由进行中转成已完成 reject会把promise的状态由进行中转到失败
        axios.post(url, params)
            .then((res) => { resolve(res) })
            .catch((err) => { reject(err) })
    })
}

export let getTopSearch = (url, params) => { return requestData(config.method.GET, url, params) }

export let getCategory = (url, params) => { return requestData(config.method.GET, url, params) }