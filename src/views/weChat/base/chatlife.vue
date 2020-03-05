<template>
    <div>
        <div>
            <h4>生命周期</h4>
            <p>
                小程序生命周期和Vue略有不同，主要只有几个生命周期onLoad、
                onShow、onReady、onHide、onUnload。
            </p>
            <div class="G_line">
                <div v-for="(item,index) in list" :key="index">
                    <span class="G_line_r">{{item.name}}</span>
                    <span class="G_line_l">{{item.explain}}</span>
                </div>
                <div>
                    <span class="G_line_r">onResize()</span>
                    <span class="G_line_l">
                        页面尺寸改变时触发，
        详见<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html#%E5%9C%A8%E6%89%8B%E6%9C%BA%E4%B8%8A%E5%90%AF%E7%94%A8%E5%B1%8F%E5%B9%95%E6%97%8B%E8%BD%AC%E6%94%AF%E6%8C%81" target="_blank">响应显示区域变化</a>                 
                    </span>
                </div>
            </div>
        </div>
        <div>
            <img src="@/assets/weChat/page-lifecycle01.png">
        </div>
    </div>
</template>

<script>
export default {
    name:"chatlife",
    data(){
        return{
            list:[
                {name:"data",explain:"页面的初始数据"},
                {name:"onLoad()",explain:"生命周期回调—监听页面加载(仅第一次)"},
                {name:"onShow()",explain:"生命周期回调—监听页面显示"},
                {name:"onReady()",explain:"生命周期回调—监听页面初次渲染完成"},
                {name:"onHide()",explain:"生命周期回调—监听页面隐藏"},
                {name:"onUnload()",explain:"生命周期回调—监听页面卸载"},
                {name:"onPullDownRefresh()",explain:"监听用户下拉动作"},
                {name:"onReachBottom()",explain:"页面上拉触底事件的处理函数"},
                {name:"onShareAppMessage()",explain:"用户点击右上角转发"},
                {name:"onPageScroll()",explain:"页面滚动触发事件的处理函数"},
                {name:"onTabItemTap()",explain:"当前是 tab 页时，点击 tab 时触发"},
            ]
        }
    }
}
</script>

