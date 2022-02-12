<template>
    <div>
        <location :list='list'/>
        <div>
            <h4>插件</h4>
            <p>
               在模块化开发的今天，做的项目基本上是从NPM官网上下载下来的插件，下面看看常用的插件：
            </p>
        </div>
        <div>
            <h5 id="axios">常用插件</h5>
            <list :list="datalist"/>
        </div>
    </div>
</template>

<script>
export default {
    name:"pluginNpm",
    components:{
        list:()=>import('@/components/explainList/index'),
        location:()=>import('@/components/location/index')
    },
    data(){
        return{
            list:[
                {name:'常用插件',id:'axios'},
                // {name:'更新依赖',id:'trends'},
            ],
            datalist:[
                {name:'lodash',explain:'一个一致性、模块化、高性能的 JavaScript 实用工具库'},
                {name:'qs',explain:'一个 url参数转化 (parse和stringify)的轻量级js库'},
                {name:'fastclick',explain:'消除了移动端浏览器上的物理点击和触发一个 click 事件之间的300ms 的延迟。不干扰你目前的逻辑的同时，让你的应用反应更加灵敏'},
                {name:'file-saver',explain:'一个在客户端保存文件的解决方案，非常适合在客户端上生成文件的Web应用程序'},
                {name:'js-xlsx',explain:'一个强大的解析和编写excel文件的库'},
                {name:'Typed.js',explain:'一个轻松实现打字效果的js插件'},
                {name:'fullPage.js',explain:'一个可轻易创建全屏滚动网站的js滚动动画库, 兼容性无可替代'},
                {name:'SortableJS',explain:'功能强大的JavaScript 拖拽库'},
                {name:'KeyboardJS',explain:'一个在浏览器中使用的库（与node.js兼容）可以轻松设置键绑定和使用组合键来设置复杂的绑定'},
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
.table{
    border: 1px solid #ccc;
    width: 100%;
    .row{
        width: 100%;
        display: grid;
        grid-template-columns:30% 40% 40%;
        div{
            padding: 5px 10px;
            text-align: center;
        }
        div:nth-child(2),div:nth-child(3){
            text-align: left;
            padding-left: 15px;
        }
        div~div{
            border-left: 1px solid #ccc;
        }
        .title{
            text-align: center !important;
            background: #eef1f6;
            color: #222;
            font-weight: bold;
        }
    }
    .row~.row{
        border-top: 1px solid #ccc;
    }
}
</style>

