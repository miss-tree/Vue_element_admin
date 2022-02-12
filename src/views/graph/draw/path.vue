<template>
    <div>
        <location :list='list'/>
        <div>
            <h4  id="isAccountNumber">线段生成器--path()</h4>
            <p>
                path不仅可以用来绘制线段的，还可以绘制扇形、曲线和多边形，功能非常丰富。
            </p>
        </div>
        <div>
            <h4 id="path">path()常用API</h4>
            <ul>
                <li>d3.path()：创建新的路径</li>
                <li>path.moveTo()：移到给定点</li>
                <li>path.closePath()：闭合当前子路径</li>
                <li>path.lineTo()：画直线段</li>
                <li>path.quadraticCurveTo()：画一个二次贝塞尔曲线
                    (<a :href="locationUrl" target="_blank">关于path贝塞尔曲线</a>)
                </li>
                <li>path.bezierCurveTo()：画一个三次贝塞尔曲线</li>
                <li>path.arcTo()：绘制圆弧段</li>
                <li>path.arc()：绘制圆弧段</li>
                <li>path.rect()：画一个矩形 path.rect(x, y, w, h)</li>
                <li>path.toString()：获取线段 d 的字符串参数</li>
                <li><i class="red">*</i>
                <a href="https://github.com/d3/d3/blob/master/API.md#paths-d3-path">
                    更多颜色参考API
                </a></li>
            </ul>
            <pre>
            </pre>
        </div>
        <div>
            <h4 id="pathExample">path()使用</h4>
            <pre>
        SVG 线段元素设置        
        &lt;path d="M0,0 L100, 100" /&gt;

        // Creating a path  
        var path = d3.path(); 
        path.moveTo(0, 0); 
          
        // Making line to x:100 and y:100  
        path.lineTo(100, 100); 
          
        // Closing the path  
        path.closePath(); 

        d3.select(".path2")
            .attr("d", path)
            .attr('stroke','red')
            .attr('stroke-width',2)
            </pre>
            <el-button @click="createSvg">点击显示</el-button>
            <div>
                <svg  class="svg"></svg>
            </div>
        </div>
        <div>
            <h4 id="areaExample">area()使用</h4>
            <pre>
        let  dataset=[10,20,30,70,60,90]
        // 创建一个区域生成器
        let height=100
        var areaPath = d3.area()
                    .x((d,i)=>50+i*10)
                    .y0((d,i)=>height/2)
                    .y1((d,i)=>height/2-d)

        d3.select(".path2")
            .attr("d", areaPath(dataset))
            .attr('fill','yellow')
            .attr('stroke','black')
            .attr('stroke-width',2)
            </pre>
            <el-button @click="createPath">点击显示</el-button>
            <div>
                <svg  class="svgpath"></svg>
            </div>
        </div>
        <div>
            <h4 id="arcExample">arc()使用</h4>
            <pre>
        //  startAngle起始角度和endAngle结束角度的差就是半圆的大小
        // 下面圆以45°开始 135°接收的四分之一圆
        let  dataset={startAngle:Math.PI*0.25,endAngle:Math.PI*0.75}
        // 创建一个弧生成器
        let height=100
        var arcPath = d3.arc()
                    .innerRadius(50)
                    .outerRadius(100)//外圆半径一定比内圆半径大

        d3.select(".path2")
            .attr("d", arcPath(dataset))
            .attr('fill','yellow')
            .attr('stroke','black')
            .attr('stroke-width',2)
            .attr('transform','translate(150,150)')
            </pre>
            <el-button @click="createArc">点击显示</el-button>
            <div>
                <svg  class="svgArc" height="300" width='1200'></svg>
            </div>
        </div>
        <div>
            <h4 id="diagonal">linkHorizontal()使用</h4>
            <p>
                D3.js在V3版本前diagonal()方法常用于echart表，弧形线连接
                可以让直线连线更加美观。d3.diagonal()有两个访问器，
                source()和target()，还有一个投影函数projection(),用
                于坐标进行投影。但是在第四版本的时候已经被d3.linkHorizontal()
                替换了，也可以使用d3.linkVertical()或d3.linkRadial()
            </p>
            <pre>
        let dataset = {source:{x:100,y:100},target:{x:300,y:200}}
        //创建一个对角线生成器
        let linkHorizontal = d3.linkHorizontal()
                        .x((d)=> d.x)
                        .y((d)=> d.y)
                    
        //添加路径
        svg.append("path")
            .attr("d",linkHorizontal(dataset))  
            .attr("fill","none")          
            .attr("stroke","black")
            .attr("stroke-width",2)

            </pre>
            <el-button @click="createDiagonal">点击显示</el-button>
            <div>
                <svg  class="svgDiagonal" height="300" width='1200'></svg>
            </div>
        </div>
    </div>
</template>

<script>
import * as d3 from 'd3'
export default {
    name:'handlerDom',
    components:{
        location:()=>import('@/components/location/index')
    },
    data(){
        return{
            haveSvg:false,
            havePath:false,
            haveArc:false,
            haveDiagonal:false,
            locationUrl:'',
            list:[
                {name:'D3颜色绘制',id:'isAccountNumber'},
                {name:'path()常用API',id:'path'},
                {name:'path()使用',id:'pathExample'},
                {name:'area()使用',id:'areaExample'},
                {name:'arc()使用',id:'arcExample'},
                {name:'linkHorizontal()使用',id:'diagonal'},
            ]
        }
    },
    mounted(){
        let gloab=process.env.VUE_APP_BASE_URL
        this.locationUrl=gloab+'/demo?page=path'
    },
    methods:{
        createSvg(){
            var path = d3.path(); 
            path.moveTo(0, 0); 
            path.lineTo(100, 100); 
            path.closePath(); 

            let linePath=d3.select('.svg')
            if(!this.haveSvg){
                linePath.append('path')
                    .attr("d", path) 
                    // .attr('fill','red')
                    .attr('stroke','red')
                    .attr('stroke-width',2)
                this.haveSvg=true 
            }else{
                linePath.selectAll('path')
                    .remove()
                this.haveSvg=false
            }
        },
        createPath(){
            let  dataset=[10,20,30,70,60,90]
            let height=100
            // 创建一个区域生成器
            var areaPath = d3.area()
                    .x((d,i)=>50+i*10)
                    .y0((d,i)=>height/2)
                    .y1((d,i)=>height/2+d) 

            let linePath=d3.select('.svgpath')
            if(!this.havePath){
                linePath.append('path')
                    .attr("d", areaPath(dataset))
                    .attr('fill','yellow')
                    .attr('stroke','black')
                    .attr('stroke-width',2)
                this.havePath=true 
            }else{
                linePath.selectAll('path')
                    .remove()
                this.havePath=false
            }
        },
        createArc(){
            let  dataset={startAngle:Math.PI*0.5,endAngle:Math.PI*0.75}
            // 创建一个弧生成器
            let height=100
            var arcPath = d3.arc()
                        .innerRadius(50)
                        .outerRadius(100)//外圆半径一定比内圆半径大    
            let linePath=d3.select('.svgArc')
            if(!this.havePath){
                linePath.append('path')
                    .attr("d", arcPath(dataset))
                    .attr('transform','translate(150,150)')
                    .attr('fill','blue')
                    .attr('stroke','#ccc')
                    .attr('stroke-width',2)
                this.havePath=true 
            }else{
                linePath.selectAll('path')
                    .remove()
                this.havePath=false
            }

        },
        createDiagonal(){
            let  dataset={source:{x:100,y:100},target:{x:300,y:200}}
            // 创建一个弧生成器
            let height=100
            let linkHorizontal = d3.linkHorizontal()
                        .x((d)=> d.x)
                        .y((d)=> d.y)
            let linePath=d3.select('.svgDiagonal')
            if(!this.haveDiagonal){
                linePath.append("path")
                    .attr("d",linkHorizontal(dataset))  
                    .attr("fill","none")          
                    .attr("stroke","black")
                    .attr("stroke-width",2)
                this.haveDiagonal=true 
            }else{
                linePath.selectAll('path')
                    .remove()
                this.haveDiagonal=false
            }

        }
    }
}
</script>
<style lang="scss" scoped>
</style>


