<template>
    <div>
        <div>
            <h5 class="G_red">regeneratorRuntime is not defined</h5>
            <p>
                因为WePY是微信小程序组件化开发框架，默认和 vue 一样是不帮ES6转ES5的，
                async函数无法使用需要自己安装插件。解决办法：
            </p>
            <div class="G_line">
                <span class="G_line_r">npm install regenerator-runtime --save dev</span>
            </div>
            <p>
                默默的看了下npm的下载量，发现好恐怖，一周下载量居然有 23,250,796 ，绝对是爆款。
                前端用框架react的最多的也就7,670,022，vue：1,543,395， angular: 491,895
            </p>
        </div>
        <div>
            <h5></h5>
            <span></span>
            <pre>
                <a href="https://tencent.github.io/wepy/document.html#/?id=mixin-%e6%b7%b7%e5%90%88" target="_blank">上次阅读文档位置</a>
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"wepyQa",
    data(){
        return{
            list:[
                {name:"npm install wepy-cli -g",explain:"全局安装或更新WePY命令行工具"},
                {name:"wepy init standard myproject",explain:"生成Demo开发项目"},
                {name:"wepy list",explain:"查看项目模板"},
                {name:"npm  install",explain:"安装依赖"},
                {name:"wepy build --watch",explain:"开启实时编译"},
            ]
        }
    }
}
</script>

