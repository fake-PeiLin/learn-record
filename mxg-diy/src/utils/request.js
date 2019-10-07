import axios from 'axios'

const request = axios.create({
    // baseURL:'/dev-api',
    // baseURL:'/',
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:5000
})

// 请求拦截器
request.interceptors.request.use(config => {
    // 请求拦截
    return config
}, error => {
    // 出现异常
    return Promise.reject(error);
})
// 响应拦截器
request.interceptors.response.use(response =>{
    // response.data
    return response
}, error => {
    return Promise.reject(error);
})

//  http://localhost:8888/dev-api/db.json 404
// request.get('/db.json').then(response => {
//     console.log(response.data)
// })

export default request // 导出自定义创建 axios 对象