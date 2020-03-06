<template>
    <div>
        <div>
            <h4>WePY</h4>
            <p>
                WePY是微信小程序组件化开发框架。
                <a href="https://tencent.github.io/wepy/document.html#/" target="_blank">
                    查看文档
                </a>
            </p>
            <div class="G_line">
                <div v-for="(item,index) in list" :key="index">
                    <span class="G_line_r">{{item.name}}</span>
                    <span class="G_line_l">{{item.explain}}</span>
                </div>
            </div>
            <p>
                在创建项目的时候还可以安装 redux(类似vuex的状态管理仓库，在react使用比较多)，打开安装在
                src/store/index.js 发现和 react 的用法是一样的，就是没有发现和 vue-router 的路由管理。
                还有mixins的使用，就代替了小程序的自定义组件的 behaviors ，有机会可以多试试。
            </p>
            <div>
                <img src="@/assets/weChat/wepy01.jpg">
            </div>
        </div>
        <div>
            <h5>WePY使用</h5>
            <span>原生代码：</span>
            <pre>
        //index.js
        //获取应用实例
        var app = getApp()

        //通过Page构造函数创建页面逻辑
        Page({
            //可用于页面模板绑定的数据
            data: {
                motto: 'Hello World',
                userInfo: {}
            },
            //事件处理函数
            bindViewTap: function() {
                console.log('button clicked')
            },
            //页面的生命周期函数
            onLoad: function () {
                console.log('onLoad')
            }
        })        
            </pre>
            <span>基于WePY的代码：</span>
            <pre>
        //index.wpy中的&lt;script&gt;部分
        import wepy from 'wepy';

        //通过继承自wepy.page的类创建页面逻辑
        export default class Index extends wepy.page {
            //可用于页面模板绑定的数据
            data = {
                motto: 'Hello World',
                userInfo: {}
            };

            //事件处理函数(集中保存在methods对象中)
            methods = {
                bindViewTap () {
                    console.log('button clicked');
                }
            };

            //页面的生命周期函数
            onLoad() {
                console.log('onLoad');
            };
        }        
            </pre>
            <p>
                做项目测试的时候你就发现：小程序是4个文件，.wxml、.wxss、.js、.json文件都是不同的配置。
                但是到了 wepy，就只有一个文件，都放到 .wepy 文件一起。个人感觉不是很喜欢，还是喜欢像
                mpvue 一样分两个文件，一个文件另外配置。
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:"WePY",
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

