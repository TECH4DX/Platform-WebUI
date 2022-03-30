const webpack = require("webpack");

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },
    devServer: {
        open: true, //配置自动启动浏览器
        host: "localhost",
        https: false,
        hotOnly: true, //热更新
        port: 80,
        proxy: {
            "/api": {
                target: "http://127.0.0.1:8080", //对应自己的接口
                changeOrigin: true,
                ws: true,
            }
        }
    }
}