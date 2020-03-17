<template>
    <div>
        <div>
            <h5>锚点</h5>
            <p>
                使用html的方法跳转页面，此方法比较适合html页面开发。
            在框架开发的时候会有bug，会直接替换url地址；
            比如原地址是"http://localhost:9527/#/vue/base/Knowledge",
            点击锚点为"hhxx",点击后地址变为"http://localhost:9527/#/#hhxx",
            刷新就会出现路由错误。
            </p>
            <pre v-pre>
        &lt;div class="TableRow" v-for="(el,index) in list"&gt;
            &lt;a class="RowRight" :href="'#'+el.id"&gt;{{el.name}}&lt;/a&gt;
        &lt;/div&gt;	        

        data: function () {
            return {
                list:[
                    {name:"上传前显示图片",id:"show"},
                    {name:"利用Blob上传",id:"Blob"},
                ]
            }
        },
            </pre>
        </div>
        <div>
            <h5>事件点击锚点</h5>
            <p>
                事件点击的方法是获取id的scrolltop高度调整滚动高度
            </p>
            <pre v-pre>
        &lt;span @click="Tocontone('#msg')"&gt;信息&lt;/span&gt;
        &lt;span @click="goAnchor('#hhxx')"&gt;缓存响应指令&lt;/span&gt;//推荐使用

        methods: {
            Tocontone(id){
                document.querySelector(id).scrollIntoView(true);
            },
            goAnchor(selector) { //推荐使用
                //var anchor = this.$el.querySelector(selector) // 参数为要跳转到的元素id
                var anchor = document.querySelector(selector) // 参数为要跳转到的元素id
                document.body.scrollTop = anchor.offsetTop; // chrome
                document.documentElement.scrollTop = anchor.offsetTop; // firefox
            }
        }	        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:'Anchor'
}
</script>

