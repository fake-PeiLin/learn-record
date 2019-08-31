import axios from 'axios'

// axios.get('/db.json').then(response => {
//     const data = response.data
//     console.log(data)
// })

const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    // baseURL:'/',
    timeout:5000
})

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

// http://localhost:8888/dev-api/db.json

// request.get('/db.json').then(response => {
//     console.log(response.data)
// })

export default request