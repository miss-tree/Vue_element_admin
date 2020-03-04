<template>
    <div>
        <div>
            <h5>css加前缀</h5>
            <pre>
        npm install --save-dev postcss-loader autoprefixer；

        //webpack.config.js
        module.exports = {
            ...
            module: {
                rules: [
                    ...
                    {
                        test: /\.css$/,
                        use: [
                            {
                                loader: "style-loader"
                            }, {
                                loader: "css-loader",
                                options: {
                                    modules: true
                                }
                            }, {
                                loader: "postcss-loader"//加postcss-loader
                            }
                        ]
                    }
                ]
            }
        }      

        //创建 postcss.config.js
        module.exports = {
            plugins: [
                require('autoprefixer')
            ]
        }  
            </pre>
            <p>
                其实还有一种比较笨的办法，就是配置一个gulpfile.js 监听css文件生成新的文件，在打包前替换掉就可以了
            </p>
        </div>
        <div>
            <h5>版权声明的插件(文件头部加信息)</h5>
            <pre>
        //webpack.config.js
        module.exports = {
            ...
             plugins: [
                new webpack.BannerPlugin('版权所有，翻版必究')
            ],
        }
            </pre>
        </div>
        <div>
            <h5>首屏加载loading</h5>
            <pre>
        const HtmlWebpackPlugin=require('html-webpack-plugin')
        const loading=require('./render-loading')//预先设计好的 loading图

        module.exports={
            ...
            plugins:[
                new HtmlWebpackPlugin({
                    template:'./src/index.html',//入口加载文件
                    loading:loading
                })
            ]
        }

        这样设置就不用在入口根文件 index.html 内修改&lt;div id='root'&gt;&lt;/div&gt;，嵌套一个loading组件了
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"usplugins",
}
</script>

