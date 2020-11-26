<template>
    <div>
        <div>
            <h5>vue常用插件</h5>
            <ul>
                <li><a href="http://vue-notification.yev.io/" target="_blank">vue优美的信息通知组件</a></li>
                <li><a href="https://www.npmjs.com/package/vue-lazyload" target="_blank">图片懒加载 vue-lazyload</a></li>
                <li><a href="https://www.npmjs.com/package/vue-virtual-scroller" target="_blank"> 在显示大量数据时使用 Vue-Virtual-Scroller</a></li>
                <li><a href="https://github.com/inorganik/countUp.js" target="_blank">快速计数器countUp</a></li>
                <li><a href="https://github.com/hilongjw/vue-dragging" target="_blank">拖拽插件 vue-dragging</a></li>
                <li><a href="https://github.com/santiblanko/vue-instant" target="_blank">搜索检索 vue-instant</a></li>
                <li><a href="https://www.npmjs.com/package/vue-highcharts" target="_blank">vue-highcharts</a></li>
                <li><a href="https://www.npmjs.com/package/vue-video" target="_blank">vue-video</a></li>
                <li><a href="https://www.npmjs.com/package/vue-cropper" target="_blank">裁剪 vue-cropper</a></li>
                <li><a href="https://juejin.im/post/6844903955915341831" target="_blank">裁剪cropper.js示例</a></li>
                <li><a href="https://github.com/lavas-project/vue-skeleton-webpack-plugin" target="_blank">骨架屏vue-skeleton-webpack-plugin</a></li>
                <li><a href="https://github.com/MopTym/vue-waterfall" target="_blank">瀑布流 vue-waterfall</a></li>
                <li><a href="https://www.npmjs.com/package/clipboard" target="_blank">复制粘贴模块 clipboard</a></li>
            </ul>
        </div>
        <div>
            <h5>图片懒加载 vue-lazyload</h5>
            <pre>
        main.js            
        import VueLazyload from 'vue-lazyload'  
        Vue.use(VueLazyload)
 
        // or with options
        Vue.use(VueLazyload, {
            preLoad: 1.3,
            error: 'dist/error.png',	//加载丢失图
            loading: 'dist/loading.gif',	//加载图
            attempt: 1
        })      

        component
        &lt;img :src='/static/img/' /&gt;
        &lt;img v-lazy='/static/img/' :key=" "/&gt;//必须加上key，并且你的key是要唯一的，不然可能造成图片不刷新的问题
            </pre>
        </div>
        <div>
            <h5>Vue-Virtual-Scroller</h5>
            <pre>
        main.js        
        import Vue from 'vue'
        import { RecycleScroller } from 'vue-virtual-scroller'
        import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

        Vue.component('RecycleScroller', RecycleScroller)    

        component
        &lt;template&gt;
            &lt;RecycleScroller
                class="scroller"
                :items="list"
                :item-size="32"
                key-field="id"
                v-slot="{ item }"
            &gt;
                &lt;div class="user"&gt;
                { item.name }
                &lt;/div&gt;
            &lt;/RecycleScroller&gt;
        &lt;/template&gt;
            </pre>
        </div>
        <div>
            <h5>countUp</h5>
            <pre>
        import CountUp from 'countup.js'

        methods:{
            initCountUp(){
                this.numAnim = new CountUp(this.$refs.countup,0, 2017)//参数 el,number1,number2  number1:开始的计数，number2：结束的计数
                this.numAnim.start();
            }
        }        
            </pre>
        </div>
        <div>
            <h5>vue-skeleton-webpack-plugin</h5>
            <pre>
        // webpack.conf.js
        import SkeletonWebpackPlugin from 'vue-skeleton-webpack-plugin';
        
        plugins: [
            new SkeletonWebpackPlugin({
                webpackConfig: {
                    entry: {
                        app: resolve('./src/entry-skeleton.js')
                    }
                }
            })
        ]      

        简单示例
        &lt;template&gt;
            &lt;div class="skeleton-wrapper"&gt;
                &lt;header class="skeleton-header"&gt;&lt;/header&gt;
                &lt;section class="skeleton-block"&gt;
                    &lt;img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg=="&gt;
                    &lt;img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg=="&gt;
                &lt;/section&gt;
            &lt;/div&gt;
        &lt;/template&gt;

        &lt;script&gt;
        export default {
            name: 'skeleton'
        };
        &lt;/script&gt;

        &lt;style scoped&gt;
        .skeleton-header {
            height: 52px;
            background: blue;
        }
        .skeleton-block {
            display: flex;
            flex-direction: column;
            padding-top: 8px;
            background: url('./logo.jpg')
        }
        &lt;/style&gt;  
            </pre>
        </div>
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg=="/>
               
    </div>
</template>

<script>
export default {
    name:"plugins",
}
</script>

