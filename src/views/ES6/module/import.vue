<template>
    <div>
        <div>
            <h5>import</h5>
            <p>
                ES6 实现的模块非常简单，用于浏览器和服务器端。
                import命令会被 JavaScript 引擎静态分析，在编译时就引入模块代码。
                主要有两个命令组成：export和import:
            </p>
            <pre>
        export var cc=3    
        var a=3  
        export  {a} 
        export function incCounter() {
            counter++;
        }    
        
        // 加载模块中的某个值s
        import { a, cc , incCounter } from './lib';
        console.log(aa,cc); // 3
        incCounter();
        // ES6 模块不同的是，静态加载完毕之后，每执行到模块中的方法，
            就去模块内调用（外部的变量总是与模块进行绑定的），而且值不会被缓存。
        console.log(counter); // 4



        高级用法：请求数据
        ./content.js
            let title='hello world'
            const msg='hi,boy'
            const data = {  title,  content  }

            export default data

        import('./content.js').then(data => {
            const { title } = data.default
        })

        在效果上和下面代码类似，请求到数据然后引用
        require(["index","jquery-2.1.0","./a"],function(){
            alert("加载完成")
        })

            </pre>
            <span>
                ES6 模块与 CommonJS 模块的区别：
            </span>
            <ul>
                <li>
                    CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
                    <ul>
                        <li>所谓值的拷贝，原始类型的值被缓存，不随模块内部的改变而改变。</li>
                        <li>
                            ES6 模块是动态引用，不缓存值，模块内外是绑定的，而且是只读引用，不能修改值。
                            ES6 的 js 引擎对脚本静态分析的时候，遇到加载命令模块 import ，
                            就会生成一个只读引用，当真正用到模块里边的值的时候，就会去模块内部去取。
                        </li>
                    </ul>
                </li>
                <li>
                    CommonJS 模块是运行时加载，ES6 模块是编译时加载输出接口。
                    <ul>
                        <li>
                            运行时加载：CommonJS 模块就是对象；是先加载整个模块，生成一个对象，
                            然后再从这个对象上面读取方法，这种加载称为“运行时加载”。
                        </li>
                        <li>编译时加载： ES6模块不是对象，而是通过 export 命令「显式指定输出的代码」。
                            import 时采用静态命令的形式，即在import指定「加载某个输出值」，
                            而「不是加载整个模块」，这种加载称为“编译时加载”。
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li>CommonJS 规范主要用于服务端编程，加载模块是同步的，这并不适合在浏览器环境，
                    因为同步意味着阻塞加载，浏览器资源是异步加载的，因此有了AMD CMD解决方案。</li>
                <li>AMD 规范在浏览器环境中异步加载模块，而且可以并行加载多个模块。
                    不过，AMD 规范开发成本高，代码的阅读和书写比较困难，模块定义方式的语义不顺畅。</li>
                <li>CMD 规范与 AMD 规范很相似，都用于浏览器编程，依赖就近，延迟执行，可以很容易在 Node.js 中运行。
                    不过，依赖 SPM 打包，模块的加载逻辑偏重。</li>
                <li>ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，
                    成为浏览器和服务器通用的模块解决方案。</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"import"
}
</script>

