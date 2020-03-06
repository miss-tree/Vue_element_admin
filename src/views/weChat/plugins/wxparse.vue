<template>
    <div>
        <div>
            <h4>mpvue-wxparse</h4>
            <p>
                mpvue-wxparse 是 mpvue 的一个解析富文本的插件。
            </p>
            <div class="G_line">
                <span class="G_line_r">npm i mpvue-wxparse  --save </span>   
            </div>
        </div>
        <div>
            <h5>使用方法</h5>
            <pre v-pre>
        &lt;template&gt; 
            &lt;div&gt; 
                &lt;parse :content="article" @preview="preview" @navigate="navigate" /&gt; 
            &lt;/div&gt; 
        &lt;/template&gt;

        &lt;script&gt; 
            import parse from 'mpvue-wxparse'
             export default {
                name:"wxparse",
                data(){
                    return{
                    }
                },
                components: {
                    parse
                }
            }
        &lt;/script&gt;

        &lt;style&gt;
            @import url("~mpvue-wxparse/src/wxParse.css");
        &lt;/style&gt;
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"wxparse",
    data(){
        return{
        }
    }
}
</script>

