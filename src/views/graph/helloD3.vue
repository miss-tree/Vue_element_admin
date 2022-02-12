<template>
    <div class="relative">
        <div class="topRight">
            <a href="https://d3js.org/"
                target="_new">
                D3官网
            </a>
        </div>
        <div>
            <h3>可视化工具</h3>
            <h4>关于D3</h4>
            <p>
                D3js 是一个可以基于数据来操作文档的 JavaScript 库。
                可以帮助你使用 HTML, CSS, SVG 以及 Canvas 来展示数据。
                D3 遵循现有的 Web 标准，可以不需要其他任何框架独立运行在现代浏览器中，
                它结合强大的可视化组件来驱动 DOM 操作。
            </p>
        </div>
        <div>
            <h4>学习D3.js需要什么？</h4>
            <ul>
                <li>HTML：超文本标记语言，用于设定网页的内容</li>
                <li>CSS：层叠样式表，用于设定网页的样式</li>
                <li>JavaScript：一种直译式脚本语言，用于设定网页的行为</li>
                <li>JQ：D3.js在使用上有jquery的操作方法，会jquery更佳</li>
                <li>SVG：可缩放矢量图形，用于绘制可视化的图形</li>
            </ul>
            <p>前端基本都会前面4项能力，(若还没学习SVG,请转的
                <!-- <a href="http://134.175.79.34/demo/?page=svg" target="_blank">本站下的 /demo</a> -->
                <a :href="locationUrl" target="_blank">本站下的 /demo</a>
                <!-- <a @click="linkTo">
                    本站下的 /demo    
                </a> -->
                或者直接在地址栏输入：{{locationUrl}}，
                左侧菜单选择HTML下的svg)</p>
        </div>
        <div>
            <h4>使用方法</h4>
            <p>
                d3.js已经封装了很多操作DOM和svg方法，在使用不同的功能再次引入文件。
                首先引入d3.js文件，先使用d3的基本功能。
            </p>
            <pre>
        &lt;script src="https://d3js.org/d3.v5.js"&gt;&lt;/script&gt;     
        &lt;script src="https://d3-selection.v2.js"&gt;&lt;/script&gt;  //引用其他功能

        也可以在官网直接下载 https://github.com/d3/d3/releases/download/v6.1.1/d3.zip

        npm i d3 
        import * as d3 from "d3";
        // 按需引入
        const d3 = Object.assign({}, require("d3-format"), require("d3-geo"), require("d3-geo-projection"));
            </pre>
        </div>
        <div>
            <h4>注意事项</h4>
            <p>
                在使用D3的时候尽量不要最新版本，因为新版本不向上兼容，若新版本有新方法的话，一般都不支持旧方法使用，
                如果项目要求兼容现在时间点前5年的浏览器，
                最好使用5.7版本前的，因为这个版本是2018年的，一般都兼容浏览器到2015年左右。
                <br>
                本项目使用的是5.15版本，因为用了6.2.0版本发现有些方法和在实际项目使用不一样就放弃了
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            locationUrl:''
        }
    },
    mounted(){
        var url = window.location//.href;
        let gloab=process.env.VUE_APP_BASE_URL
        // this.locationUrl=url.host+'/demo?page=svg'
        this.locationUrl=gloab+'/demo?page=svg'
        console.log('====================================');
        console.log(url,process.env);
        console.log('====================================');
    },
    methods:{
        linkTo(e){
            let that=this
            e.preventDefault()
            console.log(that.locationUrl);
            window.open(that.locationUrl)
        }
    }
}
</script>
<style lang="scss" scoped>
    .topRight{
        position: absolute;
        top:20px;
        right: 35px;
        font-size: 15px;
        color: #ff4800c2;
    }
</style>


