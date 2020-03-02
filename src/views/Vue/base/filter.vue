<template>
    <div>
        <div>
            <h5>过滤器</h5>
            <pre>
        main.js
        vue.filter('变量',function(val){
            return val+''
        })    
        var myFilter = Vue.filter('my-filter')    

        组件使用
        filters:{
            componentFilter:function(val){
                return val+''
            }
        }
            </pre>
            <div>用法</div>
            <pre>
        &lt;div&gt; {{name|componentFilter}} &lt;/div&gt;
        &lt;div :data="ok|componentFilter"&gt; hello world &lt;/div&gt;,

        也可以是多个
                {{message|filterA|filterB}}
        当变量		message:2019,filterA:"年",filterB="hello",
        =&gt;渲染出来  		2019年hello        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"filter",
}
</script>

