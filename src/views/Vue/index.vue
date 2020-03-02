<template>
    <div>
        <div>
            <h4>常用风格指南</h4>
            <ul>
                <li>
                    <h5>为组件设置 scoped 作用域</h5>
                    <p>
                        原理：在标签上加 v-data-someting 属性，再在选择器时加上对应
                        [v-data-someting],即css 带属性选择器以此完成类似作用域的选择方式
                    </p>
                </li>
                <li>
                    <h5>给组件定义props 越详细越好</h5>
                </li>
                <li>
                    <h5>为for设置key值</h5>
                    <p>
                        Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。 
                        基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。
                    </p>
                </li>
                <li>
                    组件使用大小写
                </li>
                <li>
                    避免 v-if 和 v-for 一起使用
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"hello",
    data(){
        return{
            msg:"hello world"
        }
    }    
}
</script>
