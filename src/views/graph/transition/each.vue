<template>
    <div>
        <location :list='list'/>
        <div>
            <h4  id="isAccountNumber">transition-each</h4>
            <p>
                选择集也有each(),但是这里的each()有点不同，过渡对象里的each()支持对事件的响应。
                transition.each(type,function),type代表事件类型：'start'、'end'、'interrupt'三个分别代表事件开始、结束和中断。
                function为事件调用的监听
            </p>
        </div>
        <div>
            <h4 id="status">transition.each(type,function)使用</h4>
            <pre>
        g.transition()
            .duration(2000)
            .selectAll('rect')
            .each('start',(d,i)=>{
                console.log('start')
            })
            .each('end',(d,i)=>{
                console.log('end')
            })
            .each('interrupt',(d,i)=>{//比较少调用，
                console.log('interrupt')
            })

        interrupt：调用的情况是在动画过渡中，该元素又在别处调用一个新的过渡，这时候发生打断事件。
        一般在过渡过程中，用户移动节点或是又添加了事件
            </pre>
        </div>
        <div>
            <h4  id="explain">call()使用</h4>
            <p>
                在定义完元素本身事件或属性后，再添加一些外部定义的时候。
                我们就可以通过call()方法绑定函数。在我的理解中和js的call、apply方法
                差不多，都是绑定的。以柱形表格中的坐标定义为例：
            </p>
            <pre>
        let xScale = d3.scale.linear()
                    .domain([0,10])     // 设置定义域
                    .range([0,300])     // 设置值域
        let xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient('bottom')

        let g = svg.append("g")
                .attr('class','axis')
                .attr('transform',"translate(50,100)")
                .call(xAxis)
        
        // 坐标轴的定义域发生变化
        xScale.domain([0,100])

        //定义一个过渡，令坐标轴变化缓慢发生
        g.transition().duration(1500)
                .call(xAxis)
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
                {name:'transition-each',id:'isAccountNumber'},
                {name:'each()使用',id:'status'},
                {name:'call()使用',id:'explain'},
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


