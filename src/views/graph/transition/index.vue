<template>
    <div>
        <location :list='list'/>
        <div>
            <h4  id="isAccountNumber">动画</h4>
            <p>
                D3的动画包括颜色、大小、形状、位置过渡。用法和css类似，都有delay、duration、ease等。
                但是在调用的时候要注意：<span class="red">不要在.exit().remove()和.enter().append()后
                    要在调用.data()后直接调用，或者重新写selection.transition()。否则会报错，因为在添加
                    和删除元素调用动画导致无效报错。
                </span>
            </p>
        </div>
        <div>
            <h4 id="status">d3-transition 常用API</h4>
            <ul>
                <li>selection.transition()：为选定图元安排过渡</li>
                <li>selection.interrupt()：中断和取消所选元素的转换</li>
                <li>d3.interrupt()：中断给定节点的活动转换</li>
                <li>d3.transition ()：在根文档元素上安排转换(使用较少，一般都是调用d3.selectAll('rect').transition())</li>
                <li>transition.select()：在选定图元上安排过渡(后面会说到动画内嵌套，单独再调用其它动画)</li>
                <li>transition.selectAll()：在选定图元上安排过渡 </li>
                <li>transition.filter()：基于数据的过滤器元素 </li>
                <li>transition.merge()：与此(另一个)转换合并 </li>
                <li>transition.transition()：在此之后安排新的过渡</li>
                <li>transition.selection()：返回此转换的选择</li>
                <li>d3.active()：为给定节点选择活动变换</li>
                <li><hr>属性</li>
                <li>transition.attr()：在给定属性之间使用默认的插值器</li>
                <li>transition.attrTween()：在给定属性之间使用自定义插值器(再次定义设置属性过渡)</li>
                <li>transition.style()：在给定的样式属性之间使用默认的插值器</li>
                <li>transition.styleTween()：使用自定义插值器在给定的样式属性之间</li>
                <li>transition.text()：设置转换开始时的文本内容</li>
                <li>transition.textTween()：使用自定义插值器在文本之间</li>
                <li>transition.remove()：过渡结束时删除选定图元</li>
                <li>transition.tween()：在转换期间运行自定义代码</li>
                <li>transition.delay()：指定每个元素的延迟（毫秒）</li>
                <li>transition.duration ：指定每个元素的持续时间（毫秒）</li>
                <li>transition.ease()：指定过渡的变化，V6之前参数是字符串--transition().ease(“bounce”)，
                    V6后参数是函数--transition().ease(d3.easeLinear)，<a href="https://github.com/d3/d3-ease" target="_blank">更多参数</a></li>
                <li>transition.easeVarying()：指定过渡的变化工厂</li>
                <li>transition.end()：在过渡期结束时设置事件或方法</li>
                <li>transition.on()：等待过渡至结束过程</li>
                <li>transition.each()：给每个图元设置函数</li>
                <li>transition.call()：为动画过渡绑定一个函数</li>
                <li>transition.empty ()：如果转换过渡为空，返回true</li>
                <li>transition.nodes()：返回过渡的所有图元</li>
                <li>transition.node()：返回第一个不为空的过渡图元</li>
                <li>transition.size()：返回动画过渡元素的个数</li>
                <li><i class="red">*</i>
                <a href="https://github.com/d3/d3/blob/master/API.md#transitions-d3-transition">
                    更多参考API
                </a></li>
            </ul>
        </div>
        <div>
            <h4  id="explain">动画过渡说明</h4>
            <pre>
        d3.selectAll('rect')
            .attr('width',200)
            .attr('height',100)
            .transition()
            .attr('width',300) 

        在默认情况下duration() 为250ms，delay()为0ms           
            </pre>

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
            locationUrl:'',
            list:[
                {name:'动画',id:'isAccountNumber'},
                {name:'d3-transition 常用API',id:'status'},
                {name:'动画过渡说明',id:'explain'},
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


