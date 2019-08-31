import request from '@/utils/request'

// request.get('/db.json').then(response=>{
//     console.log(response.data)
// })

const BASE_URI='/dev-api'

request({
    method:'get',
    url:BASE_URI+'/db.json'
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
            url:BASE_URI+'/db.json'
        })
        console.log(req)
        return req
    }
}