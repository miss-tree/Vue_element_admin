<template>
    <div>
        <location :list='list'/>
        <div>
            <h4>API</h4>
            <p>
                webpack的Api文档是我见过比较通熟易懂的文档，
                一般你打开一个 webpack.js文件对照一下文档都会知道是什么意思。
                当然要自己写一个 webpack.js 文件就要另说了，要对文档认知要有深度，
                还要明白 npm 官网上有哪些插件可以使用到文件上，这个就需要前端的经验收集了。
                当然@Vue/cli 和 react-create-app 脚手架的就需要另说了，主要是对配置的修改。
                一般不用框架脚手架的就要明白webpack配置的使用，自行配置服务，一般都需要自行安装webpack服务，
                然后逐步开发。下面主要介绍常用的Api:
            </p>
            <p>
                刚入门webpack的建议看下 
                <a href="https://webpack.docschina.org/guides/installation/" target="_blank" rel="noreferrer">
                webpack入门指南
                </a>
            </p>
            <p>
                掘金也有一篇比较棒的文章，就是不是很适合初学者，用过的基本都看的懂。
                <a href="https://juejin.im/post/5d424f1c6fb9a06b122f1b29" target="_blank" rel="noreferrer">
                    从零使用webpack4搭建vue-cli
                </a>
                ，还有一篇更加精细的文章，推荐看一下
                <a href="https://juejin.im/post/5cae0f616fb9a068a93f0613#heading-23" target="_blank" rel="noreferrer">
                    24 个实例入门并掌握「Webpack4」
                </a>
            </p>
        </div>
        <div>
            <h5 id="project">项目构建</h5>
            <div class="G_line">
                <span class='G_line_r'>npm init -y</span>
                <span class='G_line_l'>创建package.json</span>
            </div>
            <img src="@/assets/netWork/webpack01.jpg" alt="">
            <img src="@/assets/netWork/webpack02.jpg" alt="">
            <p>
                我们还需要调整 package.json 文件，以便确保我们安装包是 private(私有的)，并且移除 main 入口。这可以防止意外发布你的代码。
            </p>
        </div>
        <div>
            <h5 id="entry">entry 入口</h5>
            <p>
                entry：入口起点构建依赖的开始，通过该起点文件寻找处理依赖。
                output: 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件
            </p>
            <pre>
        const path = require('path');

        module.exports = {
            entry: './src/main.js',
            //entry: () => new Promise((resolve) => resolve(['./demo', './demo2'])) 多个动态入口
            output: {
                path: path.resolve(__dirname, 'dist'),//输出文件夹名字为dist，与webpack.config.js同级
                filename: 'my-first-webpack.bundle.js',
                filename: '[name].js',//可以配置多个 filename 出口
                publicPath: "http://cdn.example.com/assets/[hash]/",//cdn + hash
            }
        };        
            </pre>
        </div>
        <div>
            <h5 id="mode">mode模式</h5>
            <p>
                通过mode参数配置，开启开发或者生产环境下的webpack内置优化。
            </p>
            <pre>
        module.exports = {
            mode: process.env.NODE_ENV,  //process.env.NODE_ENV 即是开发环境    'production'||'development'
        };        
            </pre>
        </div>
        <div>
            <h5 id="plugins">plugins插件</h5>
            <p>
                插件的使用范围从打包优化和压缩，一直到重新定义环境中的变量。
                插件接口功能极其强大，可以用来处理各种各样的任务。
                通过使用 new 操作符来创建它的一个实例。
            </p>
            <pre>
        const HtmlWebpackPlugin=require('html-webpack-plugin')
        const loading=require('./render-loading')//预先设计好的 loading图        
        const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
        module.exports = {
            plugins: [
                new HtmlWebpackPlugin({首屏加载loading
                    template:'./src/index.html',//入口加载文件
                    loading:loading
                }),
                new HtmlWebpackPlugin({
                    title: 'vue app', //html的title
                    template: './index.html'    //文件
                })
                new webpack.BannerPlugin('版权所有，翻版必究')
            ]
        };       
            </pre>
        </div>
        <div>
            <h5 id="resolve">resolve解析</h5>
            <p>
                设置模块如何被解析。常用有两个模块resolve.alias、resolve.modules
            </p>
            <pre>
        const path = require('path');
        module.exports = {
            resolve: {
                extensions: ['.js', '.vue', '.json'],//自动解析扩展名文件
                alias: {
                    '@': path.resolve(__dirname, 'src'),//项目下的src文件夹别名为 @  调用： '@/main.js' 、'@/app.vue'
                },
                modules: [path.resolve(__dirname, "src"), "node_modules"]//webpack 解析模块时应该搜索的目录
            },
        };       
        别名配置还可以设置函数快速调用
        function resolvePath (dir) {
            return path.join(__dirname, '..', dir)
        }
        module.exports = {
            resolve: {
                alias: {
                    '@': resolvePath('src'),
                },
            },
        };  
            </pre>
        </div>
        <div> 
            <h5 id="loader">文件处理</h5>
            <p>
                loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。
                loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，
                然后你就可以利用 webpack 的打包能力，对它们进行处理。
            </p>
            <pre>
        module.exports = {    
            module:{
                rules:[{
                    test: /\.js$/,//匹配规则
                    loader: 'babel-loader',//插件
                    query: {//匹配ES6语法
                        presets: ['es2015']
                    },
                    //include 包含的文件
                    include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {//插件配置
                        limit: 10000,
                        name: utils.assetsPath('img/[name].[hash:7].[ext]')
                    }
                }]
            }    
        }       
            </pre>
        </div>
        <div>
            <h5 id="externals">externals外部扩展</h5>
            <p>
                在 vue 比较早期的项目中经常会用到jquery的库，这时候我们就需要调用webpack的扩展功能。
            </p>
            <pre>
        const path = require('path');
        module.exports = {
            externals: {
                jquery: 'jQuery'
            }
        };       

        在页面中引用
        import $ from 'jquery';

        $('.my-element').animate(...);  
            </pre>
        </div>
        <div>
            <h5 id="devServer">devServer开发中</h5>
            <p>
                在 vue 比较早期的项目中经常会用到jquery的库，这时候我们就需要调用webpack的扩展功能。
            </p>
            <pre>
        module.exports = {
            devServer: {
                contentBase: path.join(__dirname, "dist"),//可以访问 dist 文件夹下文件
                compress: true, //一切服务都启用gzip 压缩
                publicPath: "/assets/",  //将打包后文件放入assets文件夹下，并可以通过浏览器访问
                host: "0.0.0.0", //服务器外部可访问
                hot:true,   //热更新
                open:true,  //自动打开浏览器
                proxy：{
                    "/api": {
                        target: "https://other-server.example.com",
                        pathRewrite: {"^/api" : ""},//重写url
                        secure: false,//https
                    }
                },
                //也可以通过context混合书写
                proxy: [{
                context: ["/auth", "/api"],
                target: "http://localhost:3000",
                }],
                before(app){//配置一个 node 模拟数据服务
                    app.get('/some/path', function(req, res) {
                        res.json({ custom: 'response' });
                    });
                },
                after: require('./mock/mock-server.js') //配置一个mock.js模拟数据服务 
                historyApiFallback: true,//任意的 404 响应都可能需要被替代为 index.html
                port: 9000  //端口号
            }
        };       
            </pre>
        </div>
        <div>
            <h5 id="other">其他优化</h5>
            <pre>
        导出函数        
        module.exports = function(env, argv) {
            return {
                mode: env.production ? 'production' : 'development',
                devtool: env.production ? 'source-maps' : 'eval',
                plugins: [
                new webpack.optimize.UglifyJsPlugin({
                    compress: argv['optimize-minimize'] // 只有传入 -p 或 --optimize-minimize
                })
                ]
            };
        };  

        导出多个配置对象
        module.exports = [{
            output: {
                filename: './dist-amd.js',
                libraryTarget: 'amd'
            },
            entry: './app.js',
            mode: 'production',
            }, {
            output: {
                filename: './dist-commonjs.js',
                libraryTarget: 'commonjs'
            },
            entry: './app.js',
            mode: 'production',
        }]      
            </pre>
        </div>
    </div>
</template>

<script>
    export default {
        name:"webpackapi",
        components:{
            location:()=>import('@/components/location/index')
        },
        data(){
            return {
                list:[
                    {name:'项目构建',id:'project'},
                    {name:'entry 入口',id:'entry'},
                    {name:'mode模式',id:'mode'},
                    {name:'plugins插件',id:'plugins'},
                    {name:'resolve解析',id:'resolve'},
                    {name:'文件处理',id:'loader'},
                    {name:'externals外部扩展',id:'externals'},
                    {name:'devServer开发中',id:'devServer'},
                    {name:'其他优化',id:'other'},
                ]
            }
        }
    }
</script>

