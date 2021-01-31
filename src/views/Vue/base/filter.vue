<template>
  <div>
    <div>
      <h5>过滤器</h5>
      <pre>
        main.js
        vue.filter('过滤器名称',function(val){  /**其中val的值为在调用时左边的值 */
            return val+''
        })    
        var myFilter = Vue.filter('my-filter')    

        /**全局注册时是filter，没有s的。而组件过滤器是filters，是有s的 */

        组件使用
        filters:{
            componentFilter:function(val){/**其中val的值为在调用时左边的值 */
                return val+''
            }
        }
            </pre>
      <div>用法</div>
      <pre v-pre>
        &lt;div&gt; {{name|componentFilter}} &lt;/div&gt;
        &lt;div :data="ok|componentFilter"&gt; hello world &lt;/div&gt;,

        也可以是多个
                {{message|filterA|filterB}}
        data(){
            return {
                name:'miss-tree',
                message:2019
            }
        },
        filters:{
            componentFilter:function(val){
                return val+'是个网名'
            },
            filterA:function(val){
                return val+"年"
            },
            filterB:function(val){
                return val+"hello"
            }
        }
        =&gt;渲染出来   miss-tree 是个网名 		2019年hello        
            </pre>
    </div>
  </div>
</template>

<script>
  export default {
    name: "filter",
  }

</script>
