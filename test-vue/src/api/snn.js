/* eslint-disable prettier/prettier */
import request from '@/utils/request'

export default {
    getList(){
        return request({
            url:'/snn/list',
            method:'get'
        })
    }
}