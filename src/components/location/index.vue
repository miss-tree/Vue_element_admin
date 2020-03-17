<template>
    <div>
        <div class="G_local">
            <span 
            v-for="(el,index) in list" :key="index"
            @click="goAnchor('#'+el.id)">{{el.name}}</span>
        </div>
        <back-top/>
    </div>
</template>

<script>
export default {
    name:"location",
    components:{
        backTop:()=>import('@/components/BackToTop/index')
    },
    props:{
        list:{
            type:Array,
            default:[{name:'请求方式',id:'request'}]
        }
    },
    methods: {
        goAnchor(selector) {
            // var anchor = this.$el.querySelector(selector) // 参数为要跳转到的元素id
            var anchor = document.querySelector(selector) // 参数为要跳转到的元素id
            document.body.scrollTop = anchor.offsetTop; // chrome
            document.documentElement.scrollTop = anchor.offsetTop; // firefox
        }
    }
}
</script>

