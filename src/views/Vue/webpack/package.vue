<template>
    <div>
        <div>
            <h5>更新package.json</h5>
            <div class="G_line">
                <div>
                    <span class="G_line_r">npm install -g npm-check-updates</span>
                </div>
                <div>
                    <span class="G_line_l">检查是否有更新</span>
                    <span class="G_line_r">npm-check-updates/ncu</span>
                </div>
                <div>
                    <span class="G_line_l">执行更新</span>
                    <span class="G_line_r">ncu -u</span>
                </div>
            </div>
            <div>
                执行更新后package.json配置版本就发生改变，可以直接 npm i 或者删除 node_modules 重新  npm i 
            </div>
        </div>
        <div>
            <h5></h5>
            <pre>
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"package",
}
</script>

