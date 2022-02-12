<template>
    <div>
        <location :list='list'/>
        <div>
            <h4  id="isAccountNumber">线段生成器--line()</h4>
            <p>
                学过svg都知道画线段的时候需要line标签，在d3中有类似之前html笔记中的
                <a :href="locationUrl" target="_blank">svg.js</a>   里面
                SVG('ID').size(300,300).line(0, 0, 100, 150)和
                SVG('ID').size(300,300).path('M100,200L300,400')
                专门创建方法非常相似
            </p>
        </div>
        <div>
            <h4 id="status">line()常用API</h4>
            <ul>
                <li>line.x()：设置线段的 X 访问器(即使用什么数据作为线段X坐标)</li>
                <li>line.y()：设置线段的 Y 访问器</li>
                <li>line.defined()：返回所有选择的颜色</li>
                <li>line.curve()：设置曲线插值器(curveCardinal、curveLinear、curveBasis、curveStep、curveNatural)</li>
                <li>line.context()：设置绑定一个数据，常用于与cavans一起使用</li>
                <li>line.defined()：您可以指定是否有为给定数据点定义的数据</li>
                <li><i class="red">*</i>
                <a href="https://github.com/d3/d3/blob/master/API.md#lines">
                    更多参考API
                </a></li>
            </ul>
        </div>
        <div>
            <h4 id="append">line()使用</h4>
            <pre>
        SVG 线段元素设置        
        &lt;line x1="20" y1="20" x2="300" y2="200" /&gt;

        d3.line()
        svg.append('line')
            .attr('x1',20)
            .attr('y1',20)
            .attr('x2',200)
            .attr('x2',300)

        let lines= [80,120,160,200,240,280]
        let linePath=d3.line()
                    .x(d=>d)
                    .y((d,i)=>i%2==0?40:120)
        得到 linePath 各个顶点坐标 (80,40)、(120,120)、(160,40)、(200,120)、(240,40)、(280,120)

        linePath.defined( d => d &lt; 200) 
        //则坐标大于 200不显示

        示例2
        &lt;svg id="gfg" width="400" height="400"/&gt;

        var points = [ 
            {xpoint:25,  ypoint:150}, 
            {xpoint:75,  ypoint:null}, 
            {xpoint:100, ypoint:115}, 
            {xpoint:125, ypoint:55}, 
            {xpoint:150, ypoint:null}, 
            {xpoint:175, ypoint:25}, 
            {xpoint:200, ypoint:155}, 
            {xpoint:225, ypoint:15}, 
            {xpoint:250, ypoint:135}, 
        ]; 
    
        var Gen = d3.line() 
            .x((p) => p.xpoint) 
            .y((p) => p.ypoint) 
            .defined(function (d) { return d.ypoint !== null; }); //ypoint 含null都不显示
        
        d3.select("#gfg") 
            .append("path") 
            .attr("d", Gen(points)) 
            .attr("fill", "none") 
            .attr("stroke", "green");   
        
            </pre>
            <el-button @click="createSvg">点击显示</el-button>
            <div>
                <svg  class="svg"></svg>
            </div>
            <div>curve()设置弧线</div>
            <p>
                弧线比单调的直线更美观在使用echart表现上，在下节的d3-path也有类似的方法调用
                下面先看示例
            </p>
            <pre>
        let container=d3.select('.container').append('svg')
                        .attr('width',1200)
                        .attr('height',300)
        let line = d3.line()
                .x(d=>d.xpoint+250)
                .y((d,i)=>d.ypoint)
                .curve(d3.curveCardinal)
        this.curveSvg=container.append('path')
                        .attr('d',line(this.points))
                        .attr('fill','none')
                        .attr('stroke','red')
                        .attr('stroke-width',2)        


         let line = d3.line()
                .x(d=>d.xpoint+250)
                .y((d,i)=>d.ypoint)
                .curve(d3.curveCardinal)
            switch(val){
                case 'Cardinal':
                    line.curve(d3.curveCardinal)
                    break;
                case 'Linear':
                    line.curve(d3.curveLinear)
                    break;
                case 'Basis':
                    line.curve(d3.curveBasis)
                    break;
                case 'Step':
                    line.curve(d3.curveStep)
                    break;
                case 'Natural':
                    line.curve(d3.curveNatural)
                    break;
                default :
                    line.curve(d3.curveCardinal)
                    break;
            }
            this.curveSvg.attr('d',line(this.points))
                        .attr('fill','none')
                        .attr('stroke','red')
                        .attr('stroke-width',2)        
            </pre>
            <el-select v-model="curveVal"
                @change="getCurveVal($event,curveVal)">
                <el-option value="Cardinal">Cardinal</el-option>
                <el-option value="Linear">Linear</el-option>
                <el-option value="Basis">Basis</el-option>
                <el-option value="Step">Step</el-option>
                <el-option value="Natural">Natural</el-option>
            </el-select>
            <div class="container">
                
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
            haveSvg:false,
            locationUrl:'',
            curveVal:'Cardinal',
            curveSvg:null,
            list:[
                {name:'线段生成器',id:'isAccountNumber'},
                {name:'line()常用API',id:'status'},
                {name:'line()使用',id:'append'},
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
        let container=d3.select('.container').append('svg')
                        .attr('width',1200)
                        .attr('height',300)
        let line = d3.line()//(lines)
                .x(d=>d.xpoint+250)
                .y((d,i)=>d.ypoint)
                .curve(d3.curveCardinal)
        this.curveSvg=container.append('path')
                        .attr('d',line(this.points))
                        .attr('fill','none')
                        .attr('stroke','red')
                        .attr('stroke-width',2)
    },
    methods:{
        createSvg(){
            var points = [ 
                {xpoint:25,  ypoint:150}, 
                {xpoint:75,  ypoint:null}, 
                {xpoint:100, ypoint:115}, 
                {xpoint:125, ypoint:55}, 
                {xpoint:150, ypoint:null}, 
                {xpoint:175, ypoint:25}, 
                {xpoint:200, ypoint:155}, 
                {xpoint:225, ypoint:15}, 
                {xpoint:250, ypoint:135}, 
            ]; 
            var Gen = d3.line() 
                .x((p) => p.xpoint) 
                .y((p) => p.ypoint) 
                .defined(function (d) { return d.ypoint !== null; }); 
            let linePath=d3.select('.svg')
            if(!this.haveSvg){
                linePath.append('path')
                    .attr("d", Gen(points)) 
                    .attr("fill", "none") 
                    .attr("stroke", "green"); 
                this.haveSvg=true 
            }else{
                linePath.selectAll('path')
                    .remove()//移除绘制
                this.haveSvg=false
            }
        },
        getCurveVal($event,val){
            let line = d3.line()
                .x(d=>d.xpoint+250)
                .y((d,i)=>d.ypoint)
                .curve(d3.curveCardinal)
            switch(val){
                case 'Cardinal':
                    line.curve(d3.curveCardinal)
                    break;
                case 'Linear':
                    line.curve(d3.curveLinear)
                    break;
                case 'Basis':
                    line.curve(d3.curveBasis)
                    break;
                case 'Step':
                    line.curve(d3.curveStep)
                    break;
                case 'Natural':
                    line.curve(d3.curveNatural)
                    break;
                default :
                    line.curve(d3.curveCardinal)
                    break;
            }
            this.curveSvg.attr('d',line(this.points))
                        .attr('fill','none')
                        .attr('stroke','red')
                        .attr('stroke-width',2)
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


