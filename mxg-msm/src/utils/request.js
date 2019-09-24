import axios from 'axios'
import { Loading, Message } from 'element-ui'

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
        this.loadingInstance = null
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
    const resp = response.data
    if (resp.code !== 2000) {
        Message({
            message: resp.message || '系统异常',
            type: 'warning',
            duration: 5 * 1000
        })
    }

    return response
}, error => {
    loading.close()
    console.log('response.erro', error.response.status)
    Message({
        message: error.message,
        type:'error',
        duration: 5*1000
    })
    return Promise.reject(error);
})


export default request