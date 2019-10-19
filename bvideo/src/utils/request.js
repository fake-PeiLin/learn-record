import axios from 'axios'

// axios.get('').then(response=>{
//     const data = response.data
// })

// axios.get('/db.json').then(response=>{
//     console.log(response.data)
// })

const request = axios.create({
    // baseURL: '/dev-api',
    // 响应 http://localhost:3567/dev-api/db.json 404 (Not Found)  ,因此知道baseURL的作用
    // baseURL:'/',
    // baseURL: '/dev-api',
    baseURL:process.env.VUE_APP_BASE_API,
    // 注意,此处视频有错 125 17:09,后更改过来了 
    timeout: 5000
})

// request.get('/db.json').then(response=>{
//     console.log(response.data)
// })

request.interceptors.request.use(config=>{
    return config
},error=>{
    return Promise.reject(error);
})
request.interceptors.response.use(response=>{
    return response
},error=>{
    return Promise.reject(error);
})

export default request 