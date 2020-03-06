<template>
    <div>
        <div>
            <h4>Mpvue是什么？</h4>
            <p>
                Mpvue一个基于Vue的微信小程序前端框架，可以让我们用vue的语法写小程序的项目。
                mpvue 是一个使用 Vue.js 开发小程序的前端框架。框架基于 Vue.js 核心，
                mpvue 修改了 Vue.js 的 runtime 和 compiler 实现，使其可以运行在小程序环境中，
                从而为小程序开发引入了整套 Vue.js 开发体验。
                更多信息请查看
                <a href="http://mpvue.com/" target="_blank">
                    官网
                </a>
            </p>
            <p>
                Mpvue是美团旗下产品,未来最理想的状态是，可以一套代码可以直接跑在多端：WEB、小程序（微信和支付宝）、Native（借助weex）。
                但是在2018年8月后就没有什么更新了，很期待使用 @Vue/cli 跟 Mpvue 结合。
            </p>
        </div>
        <div>
            <h5>项目开启</h5>
            <pre v-pre>
        # 全局安装 vue-cli
        $ npm install --global vue-cli

        # 创建一个基于 mpvue-quickstart 模板的新项目
        $ vue init mpvue/mpvue-quickstart my-project
        小程序安装还是需要小程序的ID

        # 安装依赖，走你
        $ cd my-project
        $ npm install

        运行程序
        $ npm run dev    

        生成一个dist文件，这时候就可以用微信开发工具打开 my-project 项目。就可以在微信开发工具上运行程序。   
            </pre>
        </div>
        <div>
            <h5>项目使用</h5>
            <p>
                在 src 下配置main.js 文件，就像是配置小程序的app.json 文件。
                配置路由和其他配置。
            </p>
            <pre v-pre>
        import Vue from 'vue'
        import App from './App'

        Vue.config.productionTip = false
        App.mpType = 'app'

        const app = new Vue(App)
        app.$mount()

        export default {
        // 这个字段走 app.json
            config: {
                // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
                pages: ['pages/logs/main', 'pages/index/main','^pages/user/main'],
                window: {
                    backgroundTextStyle: 'light',
                    navigationBarBackgroundColor: '#fff',
                    navigationBarTitleText: 'WeChat',
                    navigationBarTextStyle: 'black'
                },
            "tabBar": {
            color:"blue",
            selectedColor:'red',
            "list": [{
                "pagePath": "pages/index/main",
                "text": "首页",
                "iconPath":"static/images/home1.png",
                "selectedIconPath": "static/images/home2.png"
            },{
                "pagePath": "pages/news/main",
                "text": "新闻",
                "iconPath":"static/images/news1.png",
                "selectedIconPath": "static/images/news2.png"
            }, {
                "pagePath": "pages/user/main",    =>配置组件下的main.js文件，看组件配置
                "text": "用户",
                "iconPath": "static/images/user1.png",
                "selectedIconPath": "static/images/user2.png"
            }]
            }
            }
        }
            </pre>
            <h5>组件配置</h5>
            <p>
                每个组件不仅需要写一个vue文件代替.wxml和.wxss,还需要配置一个js文件代替.js和.json文件
            </p>
            <pre>
        import Vue from 'vue'
        import App from './index'

        const app = new Vue(App)
        app.$mount()

        上面是默认配置，下面是另外配置
        export default {
            config: {
                navigationBarTitleText: '新闻'//小程序单页面配置标题
            }
        }
            </pre>
            <span class="G_red">注意</span>
            <p>
                每个组件都需要在vue文件 &lt;script&gt; 导出，否则将在微信开发工具不显示，api还是使用小程序的api
            </p>
            <pre>
        &lt;script&gt;
        //注意：创建页面的时候必须 暴露 、    不然可能会卡死
            export default{
                data(){
                    return{                
                        list:[]
                    }
                },
                methods:{ 
                    requestData(){
                        var that=this;
                        var api='http://www.phonegap100.com/appapi.php';
                        wx.request({
                            url: api, //仅为示例，并非真实的接口地址
                            data: {
                                a: 'getPortalList' ,
                                catid: '20',
                                page:'1'
                            },
                            header: {
                                'content-type': 'application/json' // 默认值
                            },
                            success: function(res) {
                                that.list=res.data.result;
                            }
                        })
                    }
                },
                /*生命周期函数：可以用vue的 也可以用小程序的*/
                created(){
                    this.requestData();
                }

            }
        &lt;/script&gt;       
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"mpindex",
    data(){
        return{
        }
    }
}
</script>

