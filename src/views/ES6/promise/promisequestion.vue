<template>
    <div>
        <location :list='list'/>
        <div>
            <h5 id="random">Promise 凭借什么消灭了回调地狱？</h5>
            <ul>
                <li>回调函数延迟绑定。</li>
                <li>返回值穿透</li>
                <li>错误冒泡。</li>
            </ul>
            <pre v-pre>
        let x = readFilePromise('1.json').then(data => {
            return readFilePromise('2.json')//这是返回的Promise
        });
        x.then(/* 内部逻辑省略 */)
            </pre>
            <p>
                回调函数不是直接声明的，而是在通过后面的 then 方法传入的，即延迟传入。这就是回调函数延迟绑定。
            </p>
            <pre>
        readFilePromise('1.json').then(data => {
            return readFilePromise('2.json');
        }).then(data => {
            return readFilePromise('3.json');
        }).then(data => {
            return readFilePromise('4.json');
        }).catch(err => {
        // xxx
        })
            </pre>
            <p>
                根据 then 中回调函数的传入值创建不同类型的Promise, 然后把返回的 Promise 穿透到外层,
                 以供后续的调用。这里的 x 指的就是内部返回的 Promise，然后在 x 后面可以依次完成链式调用。
                这便是返回值穿透的效果。
            </p>
            <ul>
                <li>实现链式调用，解决多层嵌套问题</li>
                <li>实现错误冒泡后一站式处理，解决每次任务中判断错误,减少代码混乱度的问题</li>
            </ul>
        </div>
        <div>
            <h5 id="replace">为什么Promise要引入微任务？</h5>
            <p>
                Promise 中的执行函数是同步进行的，但是里面存在着异步操作，
                在异步操作结束后会调用 resolve 方法，或者中途遇到错误调用 reject 方法，
                这两者都是作为微任务进入到 EventLoop 中。
            </p>
            <p>
                1.异步等待执行类似 async await 方法，造成cpu资源浪费，在等待的时间完全可以执行下面的代码。
                2.放到宏任务中，若后面的任务队列非常长，那么回调迟迟得不到执行，造成应用卡顿。
            </p>
        </div>
        <div>
            <h5 id="CapsLock">是否按下了大写键</h5>
            <pre v-pre>
        document.addEventListener('click', function (e) {
            console.log(e.getModifierState('CapsLock'));
        }, false);

            </pre>
        </div>
    </div>
</template>

<script>
    export default {
        name:"promisequestion",
        components:{
            location:()=>import('@/components/location/index')
        },
        data(){
            return {
                list:[
                    {name:'消灭了回调地狱？',id:'random'},
                    {name:'引入微任务？',id:'replace'},
                    {name:'是否按下了大写键',id:'CapsLock'},
                ]
            }
        }
    }
</script>

