<template>
    <div>
        <div>
            <h4>vue.config.js</h4>
            <p>
                主要讲解 @vue/cli 3 脚手架常用的配置插件的配置，vue2之前的就不再细讲了。
                主要配置还是建议去看
                <a href="https://cli.vuejs.org/zh/config/#" target="_blank">官方文档</a> ，
                配置还是比较细的。
            </p>
            <pre>
        'use strict'
        const path = require('path')
        const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
        const defaultSettings = require('./src/settings.js')

        function resolve(dir) {
            return path.join(__dirname, dir)
        }

        const name = defaultSettings.title || 'vue Element Admin' // 页面标题
        const port = process.env.port || process.env.npm_config_port || 9527 // dev port

        module.exports = {
            publicPath: './',
            outputDir: 'dist',
            assetsDir: 'static',
            lintOnSave: process.env.NODE_ENV === 'development',
            productionSourceMap: false,//去除打包环境产生的.map文件
            lintOnSave: false ,
            devServer: {
                port: port,
                open: true,
                overlay: {
                    warnings: false,
                    errors: true
                },
                proxy: {//跨域配置，可以配置多个
                    [process.env.VUE_APP_BASE_API]: {
                        target: `http://127.0.0.1:${port}/mock`,
                        changeOrigin: true,
                        pathRewrite: {//别名重写
                            ['^' + process.env.VUE_APP_BASE_API]: ''
                        }
                    },
                    '/api':{
                        target:'localhost:6608',
                        changeOrigin: true,
                        pathRewrite: {'^/api' : ''}
                    }
                },
                after: require('./mock/mock-server.js')
            },
            configureWebpack: {
                plugins : [
                    new BundleAnalyzerPlugin({// 打包分析插件
                        analyzerMode: "server",
                        analyzerHost: "127.0.0.1",
                        analyzerPort: 8068, // 运行后的端口号
                    })
                ],
                name: name,// 页面标题
                resolve: {
                    alias: {//配置路劲别名，@表示src文件下
                        '@': resolve('src')
                    }
                }
            },
        }
        
            </pre>
        </div>
        <div>
            <h5>针对环境的配置</h5>
            <div>不同的环境处理插件的玩法</div> 
            <pre>
        module.exports = {
            configureWebpack: config => {
                if (process.env.NODE_ENV === 'production') {
                // 为生产环境修改配置...
                } else {
                // 为开发环境修改配置...
                }
            }
        }        
            </pre>
            <h5>链式操作 (高级)</h5>
            <pre>
        module.exports = {
            chainWebpack: config => {
                // GraphQL Loader
                config.module
                .rule('graphql')
                .test(/\.graphql$/)
                .use('graphql-tag/loader')
                    .loader('graphql-tag/loader')
                    .end()
                // 你还可以再添加一个 loader
                .use('other-loader')
                    .loader('other-loader')
                    .end()
            }
        }        
            </pre>
        </div>
    </div>
</template>
