<template>
    <div> 
        <div>
            <h5>let命令</h5>
            <p>
                用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
            就是带有块级作用域，他有以下特性：
            </p>
            <ul>
                <li>不存在变量提升:提前声明会报错ReferenceError</li>
                <li>暂时性死区:ES6 明确规定，如果区块中存在let和const命令，
                    这个区块对这些命令声明的变量，从一开始就形成了封闭作用域</li>
                <li>不允许重复声明:let不允许在相同作用域内(作用域必须有大括号)，重复声明同一个变量</li>
            </ul>
            <pre>
        for(var i=0 ; i < 3; i++){
            setTimeout(()=>{
                console.log(i)
            },0)
        } //输出 3  3  3
        console.log(i)//3  

        for(let i=0 ; i < 3; i++){
            setTimeout(()=>{
                console.log(i)
            },0)
        } //输出 0  1  2
        console.log(i)//undefined   
            </pre>
        </div>
        <div>
            <h5>const 命令</h5>
            <p>
                用法类似于var和let，但是所声明的是常量，有以下特性：
            </p>
            <ul>
                <li>声明的变量不得改变值:一旦声明变量，就必须立即赋值初始化，不能留到以后赋值。只声明不赋值，就会报错。</li>
                <li>const的作用域与let命令相同：只在声明所在的块级作用域内有效。</li>
                <li>const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。</li>
                <li>const声明的常量，也与let一样不可重复声明。</li>
            </ul>
            <p>
                const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
                对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
                但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，
                const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，
                就完全不能控制了。因此，将一个对象声明为常量必须非常小心。
            </p>
        </div>
        <div>
            <h5>ES6 声明变量的六种方法</h5>
            <ul>
                <li>var 命令</li>
                <li>function 命令</li>
                <li>let 命令</li>
                <li>const 命令</li>
                <li>import 命令:import foo from "../foo"</li>
                <li>class 命令</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"statement",
}
</script>
