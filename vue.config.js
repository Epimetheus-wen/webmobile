const webpack = require('webpack')


module.exports = {
    devServer: {
        proxy: {
            '/console': {
                target: 'http://10.17.49.65:19102', // 代理
                // target: 'http://10.8.51.61:9111',
                // target: 'http://10.8.51.51/',
                changeOrigin: true
            },
            // '/': {
            //     // target: 'http://10.17.49.65:19102', // 代理
            //     target: 'http://10.8.51.61:9120/',
            //     // target: 'http://10.8.51.51/',
            //     changeOrigin: true
            // },
            '/bdservices': {
                target: 'http://10.19.20.103:8077', // 测试
                // target: 'http://10.20.20.233:28010',//线上
                changeOrigin: true, // 跨域访问设置，true代表跨域
            }
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    }
    // outputDir: process.env.outputDir,
}