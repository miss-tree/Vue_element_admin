<template>
    <div>
        <div>
            <h4>字符串扩展</h4>
            <pre>
        const [a, b, c, d, e] = 'hello';
        a => "h"
        b => "e"
        c => "l"
        d => "l"
        e => "o"

        let {length : len} = 'hello';
        len => 5
            </pre>
        </div>
        <div>
            <h5>for...of</h5>
            <p>
                ES6语法 for...of 采用l迭代器去遍历，多个任务按顺序执行。
                在ES5中有 for...in 下面讲述一下两者的不同之处
            </p>       
            <ul>
                <li>for...of 不能循环普通对象({key:value})，因为for...of循环可迭代对象(Array、Map、Set、String、类数组)</li>
                <li>for...of不会将自定义的属性循环出来(obj.name=ricky),可以打印整个对象出来，但for...in却可以</li>
                <li>for...in是遍历键名(key、index)，for...of是遍历键值(value)</li>
            </ul>
            <pre>

            </pre>

        </div>
        <div>
            <h5>模板字符串</h5>
            <p>在ES5的年代，我们经常使用模板字符串，使用的方法主要是变量和字符串拼接。
                在ES6有了全新的改变，可以是变量和字符串在一起使用，用 ` ` 包裹模板,
                用花括号包裹变量，增加了 $ 表示后面接的是一个变量。
            </p>
            <pre>
        ES5方法        
        var where= "wuhan"  
        template ="Let's pray for"+ where    

        ES6方法 
        let where= "wuhan" 
        template =`Let's pray for ${where}`    

        let x = 1;
        let y = 2;

        `${x} + ${y} = ${x + y}`
        => "1 + 2 = 3"

        `${x} + ${y * 2} = ${x + y * 2}`
        => "1 + 4 = 5"

        let obj = {x: 1, y: 2};
        `${obj.x + obj.y}`
        => "3"

        => 变量place没有声明
        let msg = `Hello, ${place}`;
        => 报错
            </pre>
        </div>
    </div>
</template>
<script>
    export default{
        name:"string"
    }
</script>