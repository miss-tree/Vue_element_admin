<template>
    <div>
        <div>
            <h5>require</h5>

            <pre>
        async defer 都是异步加载，等主线程上加载才执行异步线程上的数据	
            会有延迟加载（并非要主线程全部加载完）

        AMD规范
        define（"index",["jquery-2.1.0"],function(){
            alert("hello world");
            console.log($)
        }）
        require(["index","jquery-2.1.0","./a"],function(){
            alert("加载完成")
        })

        AMD规范require定义模块的时候，依赖的模块先定义，然后加载
            sea.js定义模块时，依赖的模块在require加载的时候加入模块，在后面定义    

        // 异步加载多个模块，在加载完成时，执行回调
        require.async(['./c', './d'], function(c, d) {
            c.doSomething();
            d.doSomething();
        });     

        require.resolve(id)
        使用模块系统内部的路径解析机制来解析并返回模块路径。该函数不会加载模块，只返回解析后的绝对路径。
        console.log(require.resolve('./b'));
        // ==> http://example.com/path/to/b.js
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"require"
}
</script>

