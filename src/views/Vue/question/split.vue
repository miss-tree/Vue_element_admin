<template>
    <div>
        <div>
            <h5>vue中使用import路由懒加载报错解决方法</h5>
            <p>
                原因是import属于异步引用组件，需要babel-loader处理
            所以我们需要安装
            </p>
            <div class="G_line">
                <span class="G_line_r">npm install babel-plugin-syntax-dynamic-import -D</span>
            </div>
            <div>
                这是用来编译import异步引用方法的模块然后在.babelrc中引入这个插件
            </div>
            <pre>
        {
        "plugin": ['syntax-dynamic-import']
        }        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"lazysplit",
}
</script>

