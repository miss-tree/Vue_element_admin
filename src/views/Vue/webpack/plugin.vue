<template>
    <div>
        <div>
            <h5>安装@Vue/cli</h5>
            <div class="G_line">
                <div>
                    <span class="G_line_l">移除老版本</span>
                    <span class="G_line_r"> npm <span class="G_space"/>remove/uninstall<span class="G_space"/>vue-cli </span>
                </div>
                <div>
                    <span class="G_line_l">安装@Vue/cli</span>
                    <span class="G_line_r"> npm <span class="G_space"/>i<span class="G_space"/>@vue/cli<span class="G_space"/>-g </span>
                </div>
            </div>
        </div>
        <div>
            <h5>@Vue/cli</h5>
            <p>
                主要讲解 @vue/cli 3 脚手架内置模块，想知道脚手架自带什么功能最简单粗暴父方法是
                打开node_modules文件，查看加载的模块就可以了
            </p>
        </div>
        <div>
            <h5>自带打包压缩功能</h5>
            <p>
                在 vue-cli 版本的时候都使用过 webpack 插件 uglifyjs-webpack-plugin 官方对插件的介绍是用来缩小你 javascript 文件。
                和 compression-webpack-plugin 打包压缩方式，将文件压缩为 zip 包。
                将公共的 JavaScript 模块抽离,在 webpack 4  CommonsChunkPlugin 插件
                在 @vue/cli 已经自带了，无须担心压缩问题
            </p>
        </div>
        <div>
            <h5>使用import()</h5>
            <p>
                在 vue-cli 使用路由懒加载调用es6的import()异步加载组件需要babel-loader处理，
                需要安装 babel-plugin-syntax-dynamic-import 模块，
            </p>
            <pre>
        然后在.babelrc中引入这个插件
        {
        “plugin”: [‘syntax-dynamic-import’]
        }        
            </pre>
        </div>
        <div>
            <h5>css自动加前缀</h5>
            <p>
                @vue/cli 在此带来了一个强大的功能，个人特别喜欢。
                在package.json下修改 "browserslist",就可以根据你设定的浏览器版本
                被 @babel/prest-env 和 Autoprefixer 预处理css浏览器前缀。非常棒
            </p>
            <pre>
        {
            ...
            "browserslist": [
                "> 1%",
                "last 9 versions",
                "not ie <= 8"
            ]        
        }        
            </pre>
        </div>
        <div>
            <h5>core-js</h5>
            <p>在package.json文件内dependencies下都安装有 core-js ，
                core-js@3废弃了babel-polyfill，实现了完全无污染的API转译。
                使用 现代模式 ，尽量减少久浏览器旧版本的使用，实现优化。
            </p> 
            <ul>
                <li>它是JavaScript标准库的polyfill</li>
                <li>它尽可能的进行模块化，让你能选择你需要的功能</li>
                <li>它可以不污染全局空间</li>
                <li>它和babel高度集成，可以对core-js的引入进行最大程度的优化</li>
            </ul>
        </div>
        <div>
            <h5>webpack-merge</h5>
            <p>内置的 webpack-merge 可以让你在运行或打包的时候合并上你的 vue.config.js 的配置。
                并且以 vue.config.js 为最终标准。
            </p> 
        </div>
    </div>
</template>
