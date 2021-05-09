<template>
    <div> 
        <div>
            <h4>变量的解构</h4>
            <p>变量的解构极大的方便了我们前端的操作，尤其在数组赋值方便尤为明显，
                变量解构就不多说了，主要看例子。</p>
            <h5>数组解构</h5>    
            <pre>
        let [foo, [[bar], baz]] = [1, [[2], 3]];
        foo => 1
        bar => 2
        baz => 3

        let [ , , third] = ["foo", "bar", "baz"];
        third => "baz"

        let [x, , y] = [1, 2, 3];
        x => 1
        y => 3

        let [head, ...tail] = [1, 2, 3, 4];
        head => 1
        tail => [2, 3, 4]

        let [x, y, ...z] = ['a'];
        x => "a"
        y => undefined
        z => []        /*/若没有...z ,z将也是undefined

        let [foo] = [];             =>undefined
        let [bar, foo] = [1];       =>undefined
            </pre>
            <div>若解构不成功就是=>undefined</div>
            <div>也有等式两边不完全解构，但是成功的情况</div>
            <pre>
        let [x, y] = [1, 2, 3];
        x => 1
        y => 2

        let [a, [b], d] = [1, [2, 3], 4];
        a => 1
        b => 2
        d => 4        
            </pre>
            <div>当不是同种数据结构将直接报错</div>
            <pre>
        /*/报错
        let [foo] = 1;
        let [foo] = false;
        let [foo] = NaN;
        let [foo] = undefined;
        let [foo] = null;
        let [foo] = {};
            </pre>
            <div>默认值的情况</div>
            <div>允许指定默认值,ES6 内部使用严格相等运算符（===），判断一个位置是否有值。
                所以，<span class="red">只有当一个数组成员严格等于undefined</span>，默认值才会生效。
                结构赋值的时候,没有附上值得才会走默认值,能赋值就不会走默认值
            </div>
            <pre>
        let [foo = true] = [];
        foo => true

        let [x, y = 'b'] = ['a']; => x='a', y='b'
        let [x, y = 'b'] = ['a', undefined]; => x='a', y='b'  

        let [x = 1] = [undefined];
        x => 1

        let [x = 1] = [null];
        x => null      

        let [x = 1, y = x] = [];     => x=1; y=1
        let [x = 1, y = x] = [2];    => x=2; y=2
        let [x = 1, y = x] = [1, 2]; => x=1; y=2
        let [x = y, y = 1] = [];     => ReferenceError: y is not defined

        function fn(){
            console.log('赋值')
        }
        let [x=fn(),y=0]=[2,3,5,8,9]
        ==> 只要变量所占数组中位置值不是 undefined ，默认的 fn() 就不会执行
            </pre>
        </div>
        <div>
            <h5>对象的解构赋值</h5>
            <pre>
        let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
        foo => "aaa"
        bar => "bbb"

        let { baz } = { foo: 'aaa', bar: 'bbb' };
        baz => undefined

        let {foo} = {bar: 'baz'};
        foo => undefined

        let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
        baz => "aaa"

        let obj = { first: 'hello', last: 'world' };
        let { first: f, last: l } = obj;
        f => 'hello'
        l => 'world'

        对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。
        真正被赋值的是后者，而不是前者。例如
        let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
        baz => "aaa"
        foo => error: foo is not defined

        若属性在父对象中部存在就会直接报错
        let { foo: {baz} } = { foo: 'aaa', bar: 'bbb' };
         error: can't match against  'undefined' or 'null'
            </pre>
            <div>默认值</div>
            <pre>
        var {x = 3} = {};
        x => 3

        var {x, y = 5} = {x: 1};
        x => 1
        y => 5

        var {x: y = 3} = {};
        y => 3

        var {x: y = 3} = {x: 5};
        y => 5

        var { message: msg = 'Something went wrong' } = {};
        msg => "Something went wrong"   

        var {x = 3} = {x: undefined};
        x => 3

        var {x = 3} = {x: null};
        x => null     
        
            </pre>
            <div>特殊情况</div>
            <pre>
        /*/ 错误的写法
        let x;
        {x} = {x: 1};
        => SyntaxError: syntax error      

        /*/ 正确的写法
        let x;
        ({x} = {x: 1});

        ({} = [true, false]);
        ({} = 'abc');
        ({} = []);

        let {a,b}= 1;
        ===> undefined undefined
        因为对象结构默认将右边的变成一个对象，对象中没有对应属性就报 undefined
            </pre>
        </div>
        <string />   
    </div>
</template>

<script>
import string from "./components/string"
export default {
    name:"variable",
    components:{string}
}
</script>
