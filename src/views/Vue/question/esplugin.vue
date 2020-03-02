<template>
    <div>
        <div>
            <h5>Couldn't find preset "es2015" relative to directory</h5>
            <p>
                没使用ES标准，而引入的vue-ueditor使用了ES标准，所以编译会报错
            </p>
            <div class="G_line">
                <span class="G_line_r"> npm install babel-preset-es2015 --save-dev</span>
            </div>
            <div>
                然后需要在webpack.base.conf.js文件中加入如下代码
            </div>
            <pre>
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015']
                    }
                }
            ]
        }        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"esplugin",
}
</script>

