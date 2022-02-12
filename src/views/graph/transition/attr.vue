<template>
    <div>
        <location :list='list'/>
        <div>
            <h4  id="isAccountNumber">动画属性</h4>
            <p>
                D3动画过渡属性，常用方法：attr、attrTween、style、styleTween、text、textTween
            </p>
        </div>
        <div>
            <h4 id="status">attr、attrTween使用</h4>
            <pre>
        let rect=d3.selectAll('rect')
            .attr('width',200)
            .attr('height',100)
            .transition()
            .attr('width',300)    
        let rectTween=rect.transition()
                    .duration(2000)    
                    .attrTween('width',(d,i,a)=>{
                        return (t)=>{
                            return Number(a)+t*300
                        }
                    })
        备注：第一个参数是设置的属性名，第二个参数中 d=>被绑定的数据， i=>索引号，a是width的初始值。
            (t)=>{}     t的范围是[0,1],0表示起始变化，1表示变化结束
            </pre>
            <p>
                attr、attrTween和style、styleTween两者的用法基本是一样的，就不过多叙述了
            </p>
        </div>
        <div>
            <h4  id="explain">text、textTween使用</h4>
            <pre>
        let text=d3.selectAll('text')
            .attr('x',200)
            .attr('y',100)
            .attr('text-anchor','end')
        let textX=text.attr('x')
        let innerTextX=text.text()
            text.transition()
            .duration(1500)
            .tween('text',()=>{
                return (t)=>{
                    d3.select(this).attr('x',Number(textX)+t*300)
                    .text(Math.floor(Numer(innerTextX)+t*300))
                }
            })

        t的范围是[0,1],0表示起始变化，1表示变化结束
        常用在数据表格加载时，柱形条上文字显示的位置跟随柱形的长度不断变化         
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
                {name:'动画属性',id:'isAccountNumber'},
                {name:'attr、attrTween使用',id:'status'},
                {name:'text、textTween使用',id:'explain'},
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


