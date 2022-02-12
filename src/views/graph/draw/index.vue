<template>
    <div>
        <location :list='list'/>
        <div>
            <h4  id="isAccountNumber">D3颜色绘制</h4>
            <p>
                一般D3关于颜色绘制上运用相对比较少，我们可以通过其他方式设置颜色，比如html5的div设置颜色样式。
                但是学会D3.color还是比较方便的。下面简单的讲解一下使用：
            </p>
        </div>
        <div>
            <h4 id="status">常用API</h4>
            <ul>
                <li>color.opacity()：颜色的不透明度，范围[0,1]</li>
                <li>color.rgb()：计算此颜色的RGB等效值</li>
                <li>color.copy()：返回所有选择的颜色</li>
                <li>color.brighter()：返回选择中的颜色，不改变之前的颜色，让颜色更明亮</li>
                <li>color.darker()：让颜色更暗</li>
                <li>color.toString()：返回这个颜色的RGB颜色参数(例如：#1f2d3d)</li>
                <li><i class="red">*</i>
                <a href="https://github.com/d3/d3/blob/master/API.md#colors-d3-color">
                    更多颜色参考API
                </a></li>
                <li>d3.rgb ()：创建新的RGB颜色</li>
                <li>d3.hsl()：创建新的HSL颜色(和rgb用法一致)</li>
                <li>d3.hcl()：创建新的HCL颜色(和rgb用法一致)</li>
            </ul>
            <pre>
                let yellow = d3.rgb(40,80,0)
                console.log(yellow.brighter(2))=>r:81,g:163,b:0     //yellow颜色不变:r:40,g:80,b:0

                let red = d3.rgb('red')
                console.log(red.darker(2))=>r:124,g:0,b:0     //red颜色不变:r:255,g:0,b:0
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:'color',
    components:{
        location:()=>import('@/components/location/index')
    },
    data(){
        return{
            locationUrl:'',
            list:[
                {name:'D3颜色绘制',id:'isAccountNumber'},
                {name:'常用API',id:'status'},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
</style>


