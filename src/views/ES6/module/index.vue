<template>
    <div>
        <div>
            <h5>require</h5>
            <div>
                模块化开发好处
            </div>
            <ul>
                <li>避免命名冲突(减少命名空间污染)</li>
                <li>更好的分离, 按需加载</li>
                <li>更高复用性</li>
                <li>高可维护性</li>
            </ul>
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
        <div>
            <h5>CommonJS </h5>
            <pre>
        // lib.js
        var counter = 3;
        function incCounter() {
            counter++;
        }
        // 对外暴露接口
        module.exports = {
            counter: counter,
            incCounter: incCounter,
        };
        
        // 加载外部模块
        var mod = require('./lib');
        console.log(mod.counter);  // 3
        mod.incCounter();
        // 原始类型的值被缓存，所以就没有被改变（commonJS 不会随着执行而去模块随时调用）
        console.log(mod.counter); // 3
            </pre>
            <p>
                CommonJS 模块的加载机制是，输入的是被输出的值的拷贝。
                也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
            </p>
            <ul>
                <li>所有代码都运行在模块作用域，不会污染全局作用域。</li>
                <li>
                    模块可以多次加载，但是只会在第一次加载时运行一次，
                    然后运行结果就被缓存了，以后再加载，
                    就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
                </li>
                <li>模块加载的顺序，按照其在代码中出现的顺序。</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"require"
}
</script>

