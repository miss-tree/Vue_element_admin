<template>
    <div>
        <div>
            <h5>字符串的解构赋值</h5>
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
            <h5>数值和布尔值的解构赋值</h5>
            <pre>
        let {toString: s} = 123;
        s === Number.prototype.toString => true

        let {toString: s} = true;
        s === Boolean.prototype.toString => true   

        由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
        let { prop: x } = undefined; => TypeError
        let { prop: y } = null; => TypeError
            </pre>
        </div>
    </div>
</template>
