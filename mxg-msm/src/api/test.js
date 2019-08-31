import request from '@/utils/request'

// request.get('/db.json').then(response=>{
//     console.log(response.data)
// })

const BASE_URI= process.env.VUE_APP_BASE_API

request({
    method:'get',
    url:'/db.json'
}).then(response=>{
    console.log('get2',response.data)
})

// request({
//     method:'get',
//     url:'/db.json'
// })

export default {
    getList(){
        const req=request({
            method:'get',
            url:'/db.json'
        })
        console.log(req)
        return req
    }
}