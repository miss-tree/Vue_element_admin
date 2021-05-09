<template>
  <div>
    <div>
      <h5>css加前缀，兼容IE</h5>
      <pre>
        npm install --save-dev postcss-loader autoprefixer；

        // 兼容IE使用Bable
        npm install --save-dev @babel/core @babel/cli @babel/preset-env
        npm install --save @babel/polyfill


        //webpack.config.js
        module.exports = {
            entry: {
                entry: ["@babel/polyfill", "./index.js"], // 在入口文件 index.js 前面加入 "@babel/polyfill" 这个配置
            },
            output: {
                path: path.resolve(__dirname, "dist"),
                filename: "bundle.js",
            },
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
                    },
                    // 配置兼容IE 使用ES6
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: {
                        loader: "babel-loader", // 需要安装 babel-loader 此配置可将所有 js,jsx 后缀的文件进行转换
                        options: {
                            babelrc: false,
                            presets: [
                            [require.resolve("@babel/preset-env"), { modules: false }], // webpack 已做了模块化打包，所以此处 modules 里
                            ],
                            cacheDirectory: true,
                        },
                        },
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

        这样设置就不用在入口根文件 index.html 内修改&lt;div id='root'&gt;&lt;/div&gt;，嵌套一个loading组件了(在解析完后，vue会清除掉根组件内容重新渲染)
            </pre>
    </div>
  </div>
</template>

<script>
  export default {
    name: "usplugins",
  }

</script>
