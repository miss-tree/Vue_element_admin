<template>
    <div>
        <div>
            <h5>Symbol</h5>
            <p>
                凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
            </p>
            <pre>
        // 没有参数的情况
        let s1 = Symbol();
        let s2 = Symbol();
        s1 === s2 // false

        // 有参数的情况
        let s1 = Symbol('foo');
        let s2 = Symbol('foo');
        s1 === s2 // false    
            </pre>
        </div>
        <div>
            <h5>Symbol.for()，Symbol.keyFor()</h5>
            <pre>
        对于赋值相同两个Symbol数据格式，s2返回的值是s1，所有 s1=s1。若不同则返回新的数据
        let s1 = Symbol.for('foo');
        let s2 = Symbol.for('foo');
        s1 === s2 // true   

        下面方法赋值的就是相同，没有赋值，是定义就不一样
        Symbol.for("bar") === Symbol.for("bar")
        // true
        Symbol("bar") === Symbol("bar")
        // false 
            </pre>
            <span>Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的key。</span>
            <pre>
        let s1 = Symbol.for("foo");
        Symbol.keyFor(s1) // "foo"

        let s2 = Symbol("foo");
        Symbol.keyFor(s2) // undefined    
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"Symbol",
}
</script>

