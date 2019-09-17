import request from '@/utils/request'

export default {
    search(page, size, searchMap) {
        return request({
            url: `/goods/list/search/${page}/${size}`,
            method: 'post',
            data: searchMap
        })
    },

    add(pojo){
        return request({
            url:`/goods`,
            method:'post',
            data: pojo
        })
    }
}