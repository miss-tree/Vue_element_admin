<template>
    <div>
        <location :list='list'/>
        <div>
            <h4  id="isAccountNumber">ease-动画过渡</h4>
            <p>
                d3在内部封装了一些动画过渡transition.ease()，在V4版本及以前版本和V6版本在使用上有些不同。
                主要在书写方式上，V4版本ease()参数是字符串，V6版本接收的是一个函数(transition.ease(d3.easeLinear)),
                transition.ease('xxx')==>transition.ease(d3.ease+xx)方式
            </p>
        </div>
        <div>
            <h4 id="status">常用方法</h4>
            <ul>
                <li>linear:线性变换，稳速增加</li>
                <li>cubic:逐渐加快速度</li>
                <li>elastic:像弹簧似的接近终点</li>
                <li>back:先往回缩点，再冲向终点</li>
                <li>bounce:到终点后，来回弹跳几次</li>
                <li><hr></li>
                <li>以上方法都可以 - 与in 、out联合组合使用，例如 'linear-in'</li>
                <li>in:按正方向运动</li>
                <li>out:按相反方向运动</li>
                <li>in-out:前半段正方向运动，后半段反方向运行</li>
                <li>out-in:前半段相反方向运动，后半段正方向运行</li>
            </ul>
        </div>
        <div>
            <h4  id="explain">ease()使用</h4>
            <p>

            </p>
            <pre>
        let rr=linePath.selectAll("rect").attr('opacity',1)
                    rr.transition()
                    .duration(1500)
                    .ease(d3.easeLinear)
                    .attr("x","100")          
                    .attr("y","50")

            </pre>
            <el-button @click="createDiagonal">点击显示</el-button>
            <div>
                <svg  class="svgDiagonal" height="300" width='1200'>
                    <rect x='10' y='30' width='10' height='5'/>
                </svg>
            </div>

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
                {name:'ease-动画过渡',id:'isAccountNumber'},
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
        createDiagonal(){
            let linePath=d3.select('.svgDiagonal')
            if(!this.haveDiagonal){
                let rr=linePath.selectAll("rect").attr('opacity',1)
                    rr.transition()
                    .duration(1500)
                    .ease(d3.easeLinear)
                    .attr("x","100")          
                    .attr("y","50")
                this.haveDiagonal=true 
            }else{
                linePath.selectAll('rect')
                    .attr("x","10")          
                    .attr("y","20")
                    .attr('opacity',0)
                this.haveDiagonal=false
            }

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


