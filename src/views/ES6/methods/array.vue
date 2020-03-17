<template>
    <div>
        <location :list='list'/>
        <div>
            <h5 id="random">扩展运算符</h5>
            <div>将一个数组转为用逗号分隔的参数序列。</div>
            <pre>
        console.log(1, ...[2, 3, 4], 5)
        => 1 2 3 4 5
        [...[], 1]
        => [1]

        function add(x, y) {
        return x + y;
        }
        const numbers = [4, 38];
        add(...numbers) => 42

            </pre>
            <div>替代函数的 apply 方法</div>
            <pre>
        /*/ ES5 的写法
        function f(x, y, z) {
        /*/ ...
        }
        var args = [0, 1, 2];
        f.apply(null, args);

        /*/ ES6的写法
        function f(x, y, z) {
        /*/ ...
        }
        let args = [0, 1, 2];
        f(...args);        

        /*/ ES5 的写法
        Math.max.apply(null, [14, 3, 77])

        /*/ ES6 的写法
        Math.max(...[14, 3, 77])

        /*/ 等同于
        Math.max(14, 3, 77);
            </pre>
        </div>
        <div>
            <h5 id="replace">扩展运算符的应用</h5>
            <div>复制数组</div>
            <pre>
        const a1 = [1, 2];
        /*/ 写法一
        const a2 = [...a1];
        /*/ 写法二
        const [...a2] = a1;        
            </pre>
            <div>合并数组</div>
            <pre>
        const arr1 = ['a', 'b'];
        const arr2 = ['c'];
        const arr3 = ['d', 'e'];

        /*/ ES5 的合并数组
        arr1.concat(arr2, arr3);
        => [ 'a', 'b', 'c', 'd', 'e' ]

        /*/ ES6 的合并数组
        [...arr1, ...arr2, ...arr3]
        => [ 'a', 'b', 'c', 'd', 'e' ]        
            </pre>
            <div>与解构赋值结合</div>
            <pre>
        const [first, ...rest] = [1, 2, 3, 4, 5];
        first => 1
        rest  => [2, 3, 4, 5]

        const [first, ...rest] = [];
        first => undefined
        rest  => []

        const [first, ...rest] = ["foo"];
        first  => "foo"
        rest   => []  

        如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
        const [...butLast, last] = [1, 2, 3, 4, 5];
        => 报错
        const [first, ...middle, last] = [1, 2, 3, 4, 5];
        => 报错
            </pre>
            <div>字符串</div>
            <pre>
        let str = 'x\uD83D\uDE80y';

        str.split('').reverse().join('')
        => 'y\uDE80\uD83Dx'

        [...str].reverse().join('')
        => 'y\uD83D\uDE80x'        
            </pre>
        </div>
        <arrayrest/>
    </div>
</template>

<script>
export default {
    name:'array',
    components:{
            arrayrest:()=>import('./components/arrayrest'),
            location:()=>import('@/components/location/index')
        },
    data(){
        return {
            list:[
                {name:'扩展运算符',id:'random'},
                {name:'扩展运算符的应用',id:'replace'},
                {name:'Array.from()',id:'from'},
                {name:'Array.of()',id:'zzhh'},
                {name:'数组实例',id:'sszz'},
                {name:'Array.fill()',id:'fill'},
                {name:'entries/keys/values',id:'entries'},
                {name:'includes()',id:'includes'},
                {name:'flat/flatMap',id:'flatMap'},
                {name:'sort',id:'sort'},
            ]
        }
    }
}
</script>

