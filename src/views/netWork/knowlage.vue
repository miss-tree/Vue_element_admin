<template>
    <div>
        <location :list='list'/>
        <div>
            <h5 id="load">浏览器加载js脚本的原理</h5>
            <pre v-pre>
        1.浏览器一边下载 HTML网页，一边开始解析。也就是说，不等到下载完，就开始解析。
        2.解析过程中，浏览器发现&lt;script&gt;元素，就暂停解析，把网页渲染的控制权转交给 JavaScript 引擎。
        3.如果&lt;script&gt;元素引用了外部脚本，就下载该脚本再执行，否则就直接执行代码。
        JavaScript 引擎执行完毕，控制权交还渲染引擎，恢复往下解析 HTML 网页。
            </pre>
        </div>
        <div>
            <h5 id="render">为什么加载外部脚本时，浏览器会暂停页面渲染？</h5>
            <p>
                原因是 JavaScript 代码可以修改 DOM，所以必须把控制权让给它，否则会导致复杂的线程竞赛的问题。
                css的加载和解析不会阻塞html的解析，但会阻塞渲染。
            </p>
        </div>
        <div>
            <h5 id="web">前端有哪些页面优化方法?</h5>
            <ul>
                <li>减少 HTTP请求数</li>
                <li>从设计实现层面简化页面</li>
                <li>合理设置 HTTP缓存</li>
                <li>资源合并与压缩</li>
                <li>合并 CSS图片，减少请求数的又一个好办法</li>
                <li>将外部脚本置底（将脚本内容在页面信息内容加载后再加载）</li>
                <li>多图片网页使用图片懒加载</li>
                <li>在js中尽量减少闭包的使用</li>
                <li>尽量使用字体图标或者SVG图标，来代替传统的PNG等格式的图片</li>
                <li>减少对DOM的操作</li>
                <li>在JS中避免“嵌套循环”和 “死循环”</li>
                <li>尽可能使用事件委托（事件代理）来处理事件绑定的操作</li>
            </ul>
        </div>
        <div>
            <h5 id="post">get和post请求的区别?</h5>
            <ul>
                <li>get 一般用于获取数据</li>
                <li>get请求如果需要传递参数，那么会默认将参数拼接到url的后面；然后发送给服务器</li>
                <li>get请求传递参数大小是有限制的；是浏览器的地址栏有大小限制</li>
                <li>get安全性较低</li>
                <li>get 一般会走缓存，为了防止走缓存，给url后面每次拼的参数不同；放在?后面，一般用个时间戳</li>
                <li>post 一般用于发送数据</li>
                <li>post传递参数，需要把参数放进请求体中，发送给服务器；</li>
                <li>post请求参数放进了请求体中，对大小没有要求；</li>
                <li>post安全性比较高；</li>
                <li>post请求不会走缓存；</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:"skill",
        components:{
            location:()=>import('@/components/location/index')
        },
        data(){
            return {
                list:[
                    {name:'加载js的原理',id:'load'},
                    {name:'加载脚本暂停页面渲染',id:'render'},
                    {name:'页面优化方法',id:'web'},
                    {name:'get和post请求的区别',id:'post'},
                ]
            }
        }
    }
</script>

