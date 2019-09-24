import axios from 'axios'
import { Loading } from 'element-ui'

const loading = {
    loadingInstance: null,
    open: function () {
        if (this.loadingInstance === null) {
            console.log('创建加载实例。。。')
            this.loadingInstance = Loading.service({
                target: '.main',
                text: '拼命加载中...',
                background: 'rgba(0,0,0,0.5)'
            })
        }

    },

    close: function () {
        if (this.loadingInstance !== null) {
            this.loadingInstance.close()
        }
        this.loadingInstance=null
    }
}

const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    // baseURL:'/',
    timeout: 5000
})

request.interceptors.request.use(config => {
    loading.open()
    return config
}, error => {
    loading.close()
    return Promise.reject(error);
})

request.interceptors.response.use(response => {
    loading.close()
    return response
}, error => {
    loading.close()
    return Promise.reject(error);
})

// http://localhost:8888/dev-api/db.json

// request.get('/db.json').then(response => {
//     console.log(response.data)
// })

export default request