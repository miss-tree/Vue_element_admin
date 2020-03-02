<template>
    <div>
        <div>
            <h5>jquery插件</h5>
            <p>
                jquery一般都是老项目的添加插件，一般都是在vue2.x版本。下面讲下配置。
            </p>
            <pre>
        build/webpack.base.conf.js
        function resolve (dir) {
            return path.join(__dirname, '..', dir)
        }

        module.exports = {
            resolve: {
                alias: {
                '@': resolve('src'),
                /* 新增mui*/
                'src': path.resolve(__dirname, '../static'),,
                // 2. 定义别名和插件位置
                'mui': path.resolve(__dirname, '../static/utils/js/mui.js')
                }
            },
            plugins: [
                /* 新增jq*/
                new webpack.ProvidePlugin({
            　　　　$:"jquery",
            　　　　jQuery:"jquery",
            　　　　"window.jQuery":"jquery"
                }),
            ],
        }

            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"jquery",
}
</script>

