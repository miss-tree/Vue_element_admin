<template>
    <div>
        <!-- <div class="G_local">
            <span @click="goAnchor('#request')">请求方式</span>
        </div> -->
        <back-top/>
        <div>
            <h5 id="request">绑定在拖拽目标的事件和绑定在放置目标的事件分别有哪些？</h5>
            <div class="G_table">
                <div class="G_table_th">
                    <span class="G_table_title">事件名</span>
                    <span class="G_table_describle">描述</span>
                </div>
                <div class="G_table_tr" v-for="(el,index) in list" :key="index">
                    <span class="G_table_title">{{el.name}}</span>
                    <span class="G_table_describle">{{el.explain}}</span>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    name:"drag",
    components:{
        backTop:()=>import('@/components/BackToTop/index')
    },
    data(){
        return {
            list:[
                {name:'dragstart',explain:'当用户开始拖拽一个元素或者一个文本选取区块的时触发'},
                {name:'drag',explain:'当用户正在拖拽一个元素或者一个文本选取区块的时触发'},
                {name:'dragend',explain:'当用户结束拖拽一个元素或者一个文本选取区块的时触发。（如放开鼠标按键或按下键盘的 escap 键）'},
                {name:'dragenter',explain:'	当用户开始拖拽一个元素或者一个文本选取区块的时触发'},
                {name:'dragover',explain:'当用户正在拖拽一个元素或者一个文本选取区块的时触发'},
                {name:'dragleave',explain:'当用户结束拖拽一个元素或者一个文本选取区块的时触发。（如放开鼠标按键或按下键盘的 escap 键）'},
                {name:'drop',explain:'当一个元素或文字选取区块被放置至一个有效的放置目标时触发。'},
            ]
        }
    },
    methods: {
        Tocontone(id){
            document.querySelector(id).scrollIntoView(true);
        },
        goAnchor(selector) {
            var anchor = document.querySelector(selector) // 参数为要跳转到的元素id
            document.body.scrollTop = anchor.offsetTop; // chrome
            document.documentElement.scrollTop = anchor.offsetTop; // firefox
        }
    }
}
</script>

