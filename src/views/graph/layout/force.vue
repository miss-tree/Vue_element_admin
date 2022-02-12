<template>
    <div>
        <location :list='list'/>
        <div>
            <h4  id="isAccountNumber">力导向图--force</h4>
            <p>
                力导向图是一种绘图算法，在二维、三维里配置节点，节点之间用线连接，
                各连线长度几乎相等且尽可能不相交。节点和线都被施加了力的作用。
                根据力的作用计算节点和连线的运动轨迹，并不断降低它们的能量，最终
                达到一种能量很低的安定状态。
            </p>
        </div>
        <div>
            <h4 id="status">Forces (d3-force)常用API</h4>
            <ul>
                <li>d3.forceSimulation([nodes])：创建新的力模拟</li>
                <li>simulation.restart()：重新启动模拟计时器</li>
                <li>simulation.stop()：停止模拟计时器(停止获取数据，继续则使用 simulation.restart())</li>
                <li>simulation.tick()：迭代次数手动执行仿真，并返回仿真，默认为1次，向前推进一步</li>
                <li>simulation.nodes()：将仿真的节点设置为指定的对象数组，并根据需要创建它们的位置和速度，
                    然后 重新初始化 绑定的 力模型，
                    并返回当前仿真。如果没有指定 nodes 则返回当前仿真的节点数组</li>
                <li>simulation.alpha()：设置当前的α值 </li>
                <li>simulation.alphaMin()：设置α最小阈值 </li>
                <li>simulation.alphaDecay()：设置α指数衰减率 </li>
                <li>simulation.alphaTarget()：设置目标α </li>
                <li>simulation.force()：添加或移除力 使用：d3.forceSimulation([nodes]).force('name',d3.forceCenter(center.x,center.y))</li>
                <li>simulation.find()：查找给定位置最近的节点 </li>
                <li>simulation.on()：添加或移除事件监听器 </li>
                <li><hr></li>
                <li>force - 应用力模拟 </li>
                <li>force.initialize()：使用给定的节点初始化力布局</li>
                <li>d3.forceCenter()：创建一个力中心</li>
                <li>center.x()：设置中心的x-坐标</li>
                <li>center.y()：设置中心的y-坐标</li>
                <li>center.strength()：设置定心力的强度</li>
                <li><hr></li>
                <li>d3.forceCollide()：创建一个圆碰撞力</li>
                <li>collide.radius()：设置圆的半径</li>
                <li>collide.strength()：设置碰撞检测强度 [0,1]</li>
                <li>collide.iterations(number)：设置迭代次数</li>
                <li><hr></li>
                <li>d3.forceLink()：创建连接力</li>
                <li>link.links()：设置连接数组</li>
                <li>link.id()：按数字索引或字符串标识符链接节点</li>
                <li>link.distance()：设置连接距离</li>
                <li>link.strength()：设置连接强度</li>
                <li>link.iterations()：设置迭代次数</li>
                <li><hr></li>
                <li>d3.forceManyBody()：创建多体力</li>
                <li>manyBody.strength()：设置力强度</li>
                <li>manyBody.theta()：设置Barnes-Hut近似精度</li>
                <li>manyBody.distanceMin()：当节点关闭限制力</li>
                <li>manyBody.distanceMax()：当节点太远限制力</li>
                <li><hr></li>
                <li>d3.forceX()：创建x-定位力</li>
                <li>x.strength()：设置力强度</li>
                <li>x.x()：设置目标x-坐标</li>
                <li>d3.forceY()：创建y-定位力</li>
                <li>y.strength()：设置力强度</li>
                <li>y.y()：设置目标x-坐标</li>
                <li><hr></li>
                <li>d3.forceRadial()：创建径向定位力</li>
                <li>radial.strength()：设置力强度 [0,1]</li>
                <li>radial.radius()：设置目标半径</li>
                <li>radial.x()：设置目标中心x坐标</li>
                <li>radial.y()：设置目标中心y坐标</li>
                <li><i class="red">*</i>
                <a href="https://github.com/d3/d3/blob/master/API.md#forces-d3-force">
                    更多参考API
                </a></li>
            </ul>
        </div>
        <div>
            <h4  id="explain">五种作用力说明</h4>
            <ul>
                <li>
                    <h5>中心力（Centering）</h5>
                    <p>
                        中心力作用于所有的节点而不是某些单独节点，
                        可以将所有节点的中心一致的向指定的位置移动，
                        而且这种移动不会修改速度也不会影响节点间的相对位置。
                    </p>
                </li>
                <li>
                    <h5>碰撞力（Collision）</h5>
                    <p>
                        碰撞力将每个节点视为一个具有一定半径的圆，
                        这个力会阻止代表节点的圆相互重叠，即两个节点间会相互碰撞，
                        可以通过 strength 来设置力的强度。
                    </p>
                </li>
                <li>
                    <h5>弹簧力（Links）</h5>
                    <p>
                        当两个节点通过设置 link 连接到一起后，可以设置弹簧力，
                        这个力将根据两个节点间的距离将两个节点拉近或推远，
                        力的强度和这个距离成比例，就和弹簧一样。
                    </p>
                </li>
                <li>
                    <h5>电荷力（Many-Body）</h5>
                    <p>
                        模拟所有节点间的相互作用力，如果值为正则节点间就会相互吸引，
                        可以用来模拟电荷吸引力，如果值为负则节点间就会相互排斥。
                        这个力的大小也和节点间的距离有关。
                    </p>
                </li>
                <li>
                    <h5>定位力（Positioning）</h5>
                    <p>
                        这个力可以将节点沿着指定的维度推向一个指定位置，
                        比如通过设置 forceX 和 forceY 就可以在 X 轴 和 Y 轴方向推或者拉所有的节点，
                        forceRadial 则可以形成一个圆环把所有的节点都往这个圆环上相应的位置推。
                    </p>
                </li>
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
            locationUrl:'',
            list:[
                {name:'力导向图',id:'isAccountNumber'},
                {name:'Forces (d3-force)常用API',id:'status'},
                {name:'五种作用力说明',id:'explain'},
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


