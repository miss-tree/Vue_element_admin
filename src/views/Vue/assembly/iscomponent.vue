<template>
    <div>
        <div>
            <h5>动态组件</h5>
            <p>
                多个组件通过同一个挂载点进行组件的切换，is的值是哪个组件的名称，那么页面就会显示哪个组件
            </p>
            <pre>
        <div :is='xxx'></div>        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"iscomponent",
}
</script>

