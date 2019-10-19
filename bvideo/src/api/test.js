import request from '@/utils/request'
// request.get('/db.json').then(response => {
//     console.log(response.data)
// })
const BASE_URI = process.env.VUE_APP_BASE_API

request({
    method: 'get',
    // url: BASE_URI + '/db.json'
    url: '/db.json'
}).then(response => {
    console.log('get2', response.data)
})

export default {
    getList() {
        const req = request({
            method: 'get',
            // url: BASE_URI + '/db.json'
            url: '/db.json'
        })
        console.log(req) //Promise.then
        return req
    }
}