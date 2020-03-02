<template>
    <div>
        <div>
            <h5>vue常用插件</h5>
            <ul>
                <li><a href="http://vue-notification.yev.io/" target="_blank">vue优美的信息通知组件</a></li>
                <li><a href=""> 在显示大量数据时使用 Vue Virtual Scroller</a></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div>
            <h5>Vue Virtual Scroller</h5>
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
                {{ item.name }}
                &lt;/div&gt;
            &lt;/RecycleScroller&gt;
        &lt;/template&gt;
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"plugins",
}
</script>

