<template>
    <div>
        <div>
            <h4>promise</h4>
            <p>
                Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大
                Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
                一旦状态改变，就不会再变，任何时候都可以得到这个结果。
            </p>
        </div>
        <div>
            <h5>基础用法</h5>
            <p>
                promise 新建后立即执行，执行顺序有多种，有先执行 promise 内的方法同步方法，在执行 then 方法，
                最后执行resolve
            </p>
            <pre>
        const promise = new Promise(function(resolve, reject) {
            // ... some code
            if (/* 异步操作成功 */){
                resolve(value);
            } else {
                reject(error);
            }
        }).then(function(value) {
            // success
            }, function(error) {
            // failure
        });;        
            </pre>
        </div>
        <div>
            <h5>Promise.prototype.then()|Promise.prototype.catch() </h5>
            <p>
                Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。
                它的作用是为 Promise 实例添加状态改变时的回调函数。
                then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数。
                then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。
                因此可以采用链式写法，即then方法后面再调用另一个then方法。
            </p>
            <p>
                Promise.prototype.catch方法是.then(null, rejection)或.then(undefined, rejection)的别名，
                用于指定发生错误时的回调函数。catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。
            </p>
            <pre>
        let promise = new Promise(function(resolve, reject) {
            console.log('Promise');
            resolve();
        }).then(function() {
            console.log('resolved.');
            return new Promise()
        });        
            </pre>
            <p>
                采用链式写法可以让代码按顺序执行，类似 async 和await 的结合。
            </p>
        </div>
        <div>
            <h5>Promise.prototype.finally()</h5>
            <p>
                finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。
            </p>
            <pre>
        server.listen(port)
            .then(function () { ... })
            .catch(error => {···})
            .finally(server.stop);    
        不管最后状态 如何 都关掉服务器

            </pre>
        </div>
        <div>
            <h5>Promise.resolve()</h5>
            <p>
                有时需要将现有对象转为 Promise 对象，Promise.resolve()方法就起到这个作用。
            </p>
            <pre>
        const jsPromise = Promise.resolve($.ajax('/whatever.json'));

        Promise.resolve('foo')
        // 等价于
        new Promise(resolve => resolve('foo'))       

        const p = Promise.resolve('Hello');
        p.then(function (s){
            console.log(s)
        });
        // Hello        
            </pre>
        </div>
        <div>
            <h5>Promise.reject()</h5>
            <p>
                Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
            </p>
            <pre>
        const p = Promise.reject('出错了');
        // 等同于
        const p = new Promise((resolve, reject) => reject('出错了'))

        p.then(null, function (s) {
            console.log(s)
        });
        // 出错了     
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"promise",
}
</script>

