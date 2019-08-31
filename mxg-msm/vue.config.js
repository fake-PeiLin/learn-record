// 测试github

module.exports={
    devServer:{
        port:8888,
        host:"localhost",
        https:false,
        open:true,
        proxy:{
            // 'dev-api':{
            [process.env.VUE_APP_BASE_API] :{
                target: process.env.VUE_APP_SERVICE_URL,
                changeOrigin:true,
                pathRewrite:{
                    // '^/dev-api':'',
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        }
    },

    lintOnSave:false,
    productionSourceMap:false,
}