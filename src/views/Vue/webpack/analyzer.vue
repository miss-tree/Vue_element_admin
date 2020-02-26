<template>
    <div>
        <div>
            <h4>webpack-bundle-analyzer</h4>
            <p>
                包分析插件 webpack-bundle-analyzer ，能根据路由加载的情况分析
                组件的大小,
            </p>
        </div>
        <div>
            <pre>
        vue.config.js

        
        const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

        module.exports = {
            configureWebpack: {
                plugins : [        
                    new BundleAnalyzerPlugin({//打包分析  
                        analyzerMode: "server",
                        analyzerHost: "127.0.0.1",
                        analyzerPort: 8888, // 运行后的端口号
                        reportFilename: "report.html",
                        defaultSizes: "parsed",
                        openAnalyzer: true,
                        generateStatsFile: false,
                        statsFilename: "stats.json",
                        statsOptions: null,
                        logLevel: "info"
                    }) 
                ]
            }
        }        
            </pre>
        </div>
    </div>
</template>
