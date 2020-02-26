<template>
    <div>
        <div>
            <h4></h4>
        </div>
        <div>
            <h5>箭头函数</h5>
            <p>
                这个是ES6带来一个比较好的福利，简写了函数，还帮我们绑定了this。
                但是因此我们要注意一个地方，那就是在构造函数使用时不能使用箭头函数，
                因为绑定了this，new实例化对象不能绑定新的对象。
            </p>
            <pre>
        var f = v => v;

        /*/ 等同于
        var f = function (v) {
            return v;
        };

        var sum = (num1, num2) => num1 + num2;
        /*/ 等同于
        var sum = function(num1, num2) {
            return num1 + num2;
        };
            </pre>
            <ul>
                <li>函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。</li>
                <li>不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。</li>
                <li>不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。</li>
                <li>this对象的指向是可变的，但是在箭头函数中，它是固定的。</li>
            </ul>
        </div>
        <div>
            <h5>尾递归</h5>
            <div>函数调用自身，称为递归。如果尾调用自身，就称为尾递归。</div>
            <pre>
        function factorial(n) {
            if (n === 1) return 1;
            return n * factorial(n - 1);
        }

        factorial(5) => 120        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:'function'
}
</script>

