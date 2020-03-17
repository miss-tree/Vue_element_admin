<template>
    <div>
        <div>
            <h4>js执行机制</h4>
            <p>
                原则上先执行同步代码，再执行异步代码（微任务），最后执行宏任务(setTimeout、setInterval、js的整体代码)
                但是要以实际情况为准，同步代码中夹杂着异步代码。这时候我们就要去理解任务队列(消息队列)了。
            </p>
            <p>
                其实只需要记得：同步代码先执行，再按顺序执行异步代码，最后执行宏任务代码。
            </p>
            <pre>
        async function async1() {
            console.log('async1 start')
            await async2()
            console.log('async1 end')
        }
        async function async2() {
            setTimeout(function () {
                console.log('settimeout2')
            })
        }
        console.log('script start')
        setTimeout(function () {
            console.log('settimeout')
        })
        async1()
        new Promise(function (resolve) {
            console.log('promise1')
            resolve()
        }).then(function () {
            console.log('promise2')
        })
        console.log('script end')

        => script start     async1 start     promise1        script end      async1 end      promise2    settimeout    settimeout2 
            </pre>
            <p>
                解析：优先执行同步代码，所以先打印出 script start 。然后遇到 async 异步代码执行，要先执行 async 内同步代码，打印出 async1 start 
                然后遇到 async2 内的宏任务代码，先把任务放到宏队列中，继续向下执行，但是为什么不打印 async1 end 呢，因为async2是异步，
                而且是async...await结构，等同是同步代码执行，函数内的任务等待执行，然后我们继续执行下面的代码。Promise内参数代码是同步代码 
                (但是也有异步代码的可能),后面的then是异步，跳出向下执行打印 script end 。这时候主线程上同步代码基本执行完了，再回过来执行异步代码。
                从上到下先打印 async1 end 到 promise2。 最后是宏任务的代码，因为settimeout在async1前，按顺序先执行打印 settimeout ，
                然后是 settimeout2 。
            </p>
        </div>
        <div>
            <h5>理解执行机制</h5>
            <pre>
        console.log('a')   
        setTimeout(function () {
            console.log('settimeout')
        })     
        while(true){}
        console.log('a') 
        请问最后执行的结果是什么？
        =>  a
        因为执行到while陷入死循环，就不能执行下面的代码和宏任务代码
            </pre>
            <pre v-pre>
        function add(x, y) {
            console.log(1)
            setTimeout(function() { // timer1
                console.log(2)
            }, 1000)
        }
        add();

        setTimeout(function() { // timer2
            console.log(3)
        })

        new Promise(function(resolve) {
            console.log(4)
            setTimeout(function() { // timer3
                console.log(5)
            }, 100)
            for(var i = 0; i &lt; 100; i++) {
                i == 99 && resolve()
            }
        }).then(function() {
            setTimeout(function() { // timer4
                console.log(6) 
            }, 0)
            console.log(7)
        })

        console.log(8)   
        =>1，4，8，7，3，6，5，2     
            </pre>
        </div>
        <div>
            <h5>this.$nextTick()、process.nextTick()</h5>
            <p>
                因为this.$nextTick()是vue的异步渲染原理，在渲染树更新后才重新获取数据。
                也就是说 this.$nextTick() 执行在微任务后，宏任务前。
            </p>
            <p>
                process.nextTick()(NodeJs)是异步微任务的顺序
            </p>
            <pre>
        console.log('1');
 
        setTimeout(function() {
            console.log('2');
            process.nextTick(function() {
                console.log('3');
            })
            new Promise(function(resolve) {
                console.log('4');
                resolve();
            }).then(function() {
                console.log('5')
            })
        })
        process.nextTick(function() {
            console.log('6');
        })
        new Promise(function(resolve) {
            console.log('7');
            resolve();
        }).then(function() {
            console.log('8')
        })
        
        setTimeout(function() {
            console.log('9');
            process.nextTick(function() {
                console.log('10');
            })
            new Promise(function(resolve) {
                console.log('11');
                resolve();
            }).then(function() {
                console.log('12')
            })
        })    

        =>1，7，6，8，2，4，3，5，9，11，10，12。   /*没测试过 */
            </pre>
        </div>   
    </div>
</template>

<script>
    export default {
        name:"execution",
    }
</script>

