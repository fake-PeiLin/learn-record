import request from '@/utils/request'

export default{
    checkPwd(userId,Password){
        return request({
            url: '/user/pwd',
            method: 'post',
            data:{
                userId,
                password
            }
        })
    },

    updatePwd(userId,Password){
        return request({
            url: '/user/pwd',
            method: 'put',
            data:{
                userId,
                password
            }
        })
    },
}