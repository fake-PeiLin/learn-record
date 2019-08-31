// 测试github

module.exports={
    devServer:{
        port:8888,
        host:"localhost",
        https:false,
        open:true,
        proxy:{
            'dev-api':{
                target:'http://localhost:8001',
                changeOrigin:true,
                pathRewrite:{
                    '^/dev-api':'',
                }
            }
        }
    },

    lintOnSave:false,
    productionSourceMap:false,
}