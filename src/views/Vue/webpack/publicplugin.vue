<template>
    <div>
        <location :list='list'/>
        <div>
            <h5 id="del">生产环境删除console.log</h5>
            <pre>
        npm install  babel-plugin-transform-remove-console -D

        // 所有生产环境
        babel.config.js
        const prodPlugin = []

        if (process.env.NODE_ENV === 'production') {
            // 如果是生产环境，则自动清理掉打印的日志，但保留error 与 warn
            prodPlugin.push([
                'transform-remove-console',
                {
                // 保留 console.error 与 console.warn
                exclude: ['error', 'warn']
                }
            ])
        }

        module.exports = {
            plugins: [
                ...prodPlugin
            ]
        }
            </pre>
        </div>
        <div>
            <h5 id="debugger">移动端调试 vConsole</h5>
            <pre>
        vConsole是腾讯开发的一个用于调试移动端项目的插件

        npm i vConsole -S    
        //webpack.config.js
        // 开发环境下面使用vConsole进行调试
        if (process.env.NODE_ENV === 'development') {
        const VConsole = require('vconsole')
        new VConsole()
        }
            </pre>
        </div>
        <div>
            <h5 id="viewport">移动端适配</h5>
            <pre>
        npm i postcss-px-to-viewport -D

        //postcss.config.js
        module.exports = {
            plugins: {
                autoprefixer: {},
                'postcss-px-to-viewport': {
                // 视窗的宽度，对应的是我们设计稿的宽度，我们公司用的是375
                viewportWidth: 375,
                // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
                // viewportHeight: 1334,
                // 指定`px`转换为视窗单位值的小数位数
                unitPrecision: 3,
                // 指定需要转换成的视窗单位，建议使用vw
                viewportUnit: 'vw',
                // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
                selectorBlackList: ['.ignore'],
                // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
                minPixelValue: 1,
                // 允许在媒体查询中转换`px`
                mediaQuery: false
                }
            }
        }
            </pre>
        </div>
        <div>
            <h5 id="plugin">html-webpack-plugin</h5>
            <p>
                template: "index.html"用我们当前目录下的index.html文件作为模版
            在打包之后生成的dist文件夹里面生产一个同样模版的index.html文件。
            </p>
            <pre>
        npm i html-webpack-plugin -D

        const HtmlPlugin = require('html-webpack-plugin')

        plugins:[
        new HtmlPlugin({
                template: "index.html"
            })
        ]

            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"publicplugin",
    components:{
        location:()=>import('@/components/location/index')
    },
    data(){
        return {
            list:[
                {name:'生产环境删除console.log',id:'del'},
                {name:'移动端调试',id:'debugger'},
                {name:'移动端适配',id:'viewport'},
                {name:'html-webpack-plugin',id:'plugin'},
            ]
        }
    }
}
</script>

