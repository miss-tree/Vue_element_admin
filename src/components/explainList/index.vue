<template>
    <div>
        <div>
            <div class="G_table">
                <div class="G_table_th row">
                    <span class="G_table_title">名称</span>
                    <span class="G_table_describle">描述</span>
                </div>
                <div class="G_table_tr row" v-for="(el,index) in list" :key="index">
                    <span class="G_table_title">{{el.name}}</span>
                    <span class="G_table_describle">{{el.explain}}</span>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    name:"explain",
    props:{
        list:{
            type:Array,
            default:()=>{return []}
        }
    },
    data(){
        return {
        }
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
    .G_table .row{
        padding: 8px 0;
    }
</style>

