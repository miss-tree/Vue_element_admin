<template>
    <div>
        <location :list='list'/>
        <div>
            <h4  id="isAccountNumber">视图缩放--zoom</h4>
            <p>
                在svg中一个明显的特点就是元素可以移动和缩放。
                缩放的好处就是可以查看更多的视图空间
            </p>
        </div>
        <div>
            <h4 id="status">zooming (d3-zoom)常用API</h4>
            <ul>
                <li>d3.zoom()：创建缩放行为</li>
                <li>zoom()：将缩放行为应用于选定图元(svg)</li>
                <li>zoom.transform()：更改选定元素的变换</li>
                <li>zoom.translateBy()：转换选定元素的变换</li>
                <li>zoom.translateTo()：转换选定元素的变换</li>
                <li>zoom.scaleBy()：缩放选定元素的变换</li>
                <li>zoom.scaleTo()：缩放选定元素的变换</li>
                <li>zoom.constrain()：重写转换约束逻辑</li>
                <li>zoom.filter()：控制哪些输入事件启动缩放</li>
                <li>zoom.touchable()：设置触摸支持探测器</li>
                <li>zoom.wheelDelta()：覆盖控制盘事件的缩放比例</li>
                <li>zoom.extent()：设置视口的范围</li>
                <li>zoom.scaleExtent()：设置允许的刻度范围[0.001,999999...]</li>
                <li>zoom.translateExtent()：设置可缩放世界的范围</li>
                <li><hr></li>
                <li>zoom.clickDistance()：设置单击距离阈值</li>
                <li>zoom.tapDistance()：设置抽头距离阈值</li>
                <li>zoom.duration()：设置缩放转换的持续时间</li>
                <li>zoom.interpolate()：控制缩放变换的插值</li>
                <li>zoom.on()：监听缩放事件</li>
                <li>d3.zoomTransform()：获取给定元素的缩放变换</li>
                <li>transform.scale()：按指定的量缩放变换</li>
                <li>transform.translate()：按指定的量平移变换</li>
                <li>transform.apply()：将变换应用于给定点</li>
                <li>transform.applyX()：将变换应用于给定的x坐标</li>
                <li>transform.applyY()：将变换应用于给定的y坐标</li>
                <li>transform.invert()：取消对给定点的变换</li>
                <li>transform.invertX()：取消对给定x坐标的变换</li>
                <li>transform.invertY()：将变换应用于给定的y坐标</li>
                <li>transform.rescaleX()：将变换应用于x-scale的域</li>
                <li>transform.rescaleY()：将变换应用于y比例的域</li>
                <li>transform.toString ()：将转换格式化为SVG转换字符串</li>
                <li><hr></li>
                <li>d3.zoomIdentity()：标识转换</li>

                <li><i class="red">*</i>
                <a href="https://github.com/d3/d3/blob/master/API.md#zooming-d3-zoom">
                    更多参考API
                </a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import * as d3 from 'd3'
export default {
    name:'d3line',
    components:{
        location:()=>import('@/components/location/index')
    },
    data(){
        return{
            haveSvg:false,
            locationUrl:'',
            curveVal:'Cardinal',
            curveSvg:null,
            list:[
                {name:'视图缩放',id:'isAccountNumber'},
                {name:'Forces (d3-force)常用API',id:'status'},
                // {name:'line()使用',id:'append'},
            ],
            points : [ 
                {xpoint:25,  ypoint:150}, 
                {xpoint:75,  ypoint:85}, 
                {xpoint:100, ypoint:115}, 
                {xpoint:175, ypoint:125}
            ]
        }
    },
    mounted(){
        var url = window.location//.href;
        let gloab=process.env.VUE_APP_BASE_URL
        this.locationUrl=gloab+'/demo?page=svgjs'
    },
    methods:{
        createSvg(){
            
        }
    }
}
</script>
<style lang="scss" scoped>
.svg{
    width: 100%;
    height: 100px;
}
.container{
    width: 100%;
    height: 300px;
}
</style>


