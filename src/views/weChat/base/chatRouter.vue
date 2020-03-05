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
            <p>

                open-type 默认方式是 navigator 相当于 wx.navigateTo()方法，
            </p>
            <pre v-pre>
        &lt;navigator url="pages/info/userinfo" open-type="navigator"&gt;
            百度
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

