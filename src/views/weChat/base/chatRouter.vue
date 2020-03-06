<template>
    <div>
        <div>
            <h4>路由</h4>
            <div class="G_line">
                <div v-for="(item,index) in list" :key="index">
                    <span class="G_line_r">{{item.name}}</span>
                    <span class="G_line_l">{{item.explain}}</span>
                </div>
            </div>

        </div>
        <div>
            <h5>获取页面路由</h5>
            <pre v-pre>
        console.log(this) //通过打印 this 获取整个页面js的信息
        this.route      =>本页路由
        this.options    =>路由参数
            </pre>
            <span>模拟路由参数</span>
            <div class="G_img">
                <img src="@/assets/weChat/route01.jpg">
                <img src="@/assets/weChat/route02.jpg">
            </div>
        </div>
        <div>
            <h5>路由跳转</h5>
            <span>
                navigator标签相当于html的 a 标签和vue的 link-router 标签
                open-type 默认方式:
            </span>
            <ul>
                <li>navigator 相当于 wx.navigateTo()方法</li>
                <li>redirect 相当于 wx.redirectTo()方法</li>
                <li>switchTab 相当于 wx.switchTab()方法</li>
                <li>reLaunch 相当于 wx.reLaunch()方法</li>
                <li>navigateBack 相当于 wx.navigateBack()方法</li>
            </ul>
            <pre v-pre>
        &lt;navigator url="pages/info/userinfo" open-type="navigate"&gt;
            百度
        &lt;/navigator&gt;
        url 可以是app.json 下的 pages 定义的路由路径，也可以说当前页面的相对路径

        &lt;navigator url="../user/userinfo" open-type="reLaunch"&gt;
            淘宝
        &lt;/navigator&gt;
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"chatRouter",
    data(){
        return{
            list:[
                {name:"wx.switchTab(Object object)",explain:"跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。注意:跳回TabBar页面，路径后面不带参数"},
                {name:"wx.reLaunch(Object object)",explain:"关闭所有页面，打开到应用内的某个页面，路径后可以传参"},
                {name:"wx.redirectTo(Object object)",explain:"关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。 注意：重定向到另一页面，路径可以传参不会产生跳转记录"},
                {name:"wx.navigateTo(Object object)",explain:`保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。注意：
                    可以传参,向history对象添加一条记录，可以后退`},
                {name:"wx.navigateBack(Object object)",explain:"关闭当前页面，返回上一页面或多级页面。"},
            ]
        }
    }
}
</script>

