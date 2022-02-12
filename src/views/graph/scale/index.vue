<template>
    <div>
        <location :list='list'/>
        <div>
            <h4  id="isAccountNumber">比例尺 Scale</h4>
            <p>
                在做可视化数据显示时经常会用到Echarts,HightChart等可视化显示数据
                图表插件。在D3.js中为实现图表功能添加了比例尺功能 
            </p>
        </div>
        <div>
            <h4 id="status">调用方法</h4>
            <ul>
                <li>selection.empty()：如果选择的内容为空，返回true,不为空则为fasle</li>
                <li>selection.node()：返回第一个非空元素，为空则返回null</li>
                <li>selection.nodes()：返回所有选择元素的数组</li>
                <li>selection.size()：返回选择中的元素数</li>
                <li>selection.append()：创建并追加一个新元素</li>
                <li>selection.insert()：在已存在元素之前创建并插入一个元素</li>
                <li>selection.remove()：从当前文档中移除当前元素</li>
                <li>selection.attr()：取得或设置属性的值</li>
                <li>selection.classed()：添加或移除CSS类</li>
                <li><i class="red">*</i>selection.data()：在计算相关的连接时，取得或设置一组元素的数据</li>
                <li><i class="red">*</i>selection.datum()：取得或设置单个元素的数据，不必计算连接</li>
                <li>selection.each()：为每个选中的元素调用一个函数</li>
                <li><i class="red">*</i>selection.enter()：为缺失的元素返回占位符</li>
                <li><i class="red">*</i>selection.exit()：返回不再需要的元素</li>
                <li>selection.on()：为交互添加或移除事件监听器</li>
                <li>selection.filter()：在数据上过滤元素(在使用data的时候)</li>
                <li>selection.select()：为每个选中元素的在选择一个后代元素</li>
                <li>selection.selectAll()：为每个选中元素的在选择多个后代元素</li>
                <li>selection.style()：取得或设置样式属性</li>
                <li>selection.property()：取得或设置行内属性</li>
                <li>selection.text()：取得或设置文本内容</li>
                <li>selection.transition()：在选中元素上开启过渡</li>
                <li>selection.clone()：复制/克隆选择的元素</li>
            </ul>
            <pre>
        &lt;li&gt;selection.empty()：如果选择的内容为空，返回true,不为空则为fasle&lt;/li&gt;
        &lt;li&gt;selection.node()：返回第一个非空元素，为空则返回null&lt;/li&gt;
        &lt;li&gt;selection.size()：返回选择中的元素数&lt;/li&gt;
        &lt;li&gt;selection.append()：创建并追加一个新元素&lt;/li&gt;  

        let lis=d3.selectAll("li")   
        console.log(lis.empty()) ===>false
        console.log(lis.node()) ===>selection.empty()：如果选择的内容为空，返回true,不为空则为fasle
        console.log(lis.size()) ===>4
            </pre>
        </div>
        <div>
            <h4 id="append">插入内容|修改</h4>
            <pre>
        &lt;div class = "myclass"&gt;
            Hello World!
        &lt;/div&gt;
        //添加一个span标签并添加内容"from D3.js"
        let span=d3.select("div.myclass").append("span").text("from D3.js");
        span.attr('id','para') ===>给span标签添加一个ID
        span.attr('class','pera') ===>给span标签添加一个类名

        span.insert('p').text('add p') ===>在内部添加一个p标签，内容为'add p', 
                        另外支持添加ID或类名span.insert('p','#index')，表示在ID为index前添加一个p标签
        let addP=d3.select('#index')
        addP.remove()===>删除元素

        d3.select(".myclass").style("color", "red");===>设置样式
        d3.select(".myclass").property("name", "hi");===>设置属性


        &lt;ul class="list-group" id="list-group"&gt;
            &lt;li class="list-group-item"&gt;0001&lt;/li&gt;
            &lt;li class="list-group-item"&gt;0002&lt;/li&gt;
            &lt;li class="list-group-item"&gt;0003&lt;/li&gt;
        &lt;/ul&gt;
        var item = d3.select("#list-group")
            //  在#list-group的第2个子元素之前插入一个节点
           .insert("li", ".list-group-item:nth-child(2)")
           .classed("list-group-item", true)    ===>添加一个类名
           .text("0004");
        item.classed("active", true);    
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:'scaleModel',
    components:{
        location:()=>import('@/components/location/index')
    },
    data(){
        return{
            locationUrl:'',
            list:[
                {name:'比例尺',id:'isAccountNumber'},
                {name:'调用方法',id:'status'},
                {name:'插入内容|修改',id:'append'},
            ]
        }
    },
    mounted(){
    }
}
</script>
<style lang="scss" scoped>
</style>


