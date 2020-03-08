<template>
    <div>
        <div>
            <h5>Genertor</h5>
            <p>
                Genertor 是一个高级的函数，语法上，首先可以把它理解成，
                Generator 函数是一个状态机，封装了多个内部状态。
                有两个特征。一是，function关键字与函数名之间有一个星号；
                二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。
            </p>
            <span>yield 表达式</span>
            <ul>
                <li>遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。</li>
                <li>下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。</li>
                <li>如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。</li>
                <li>如果该函数没有return语句，则返回的对象的value属性值为undefined。</li>
            </ul>
            <pre v-pre>
        function* helloWorldGenerator() {
            yield 'hello';
            yield 'world';
            return 'ending';
        }

        var hw = helloWorldGenerator();    
        hw.next()   => { value: 'hello', done: false }
        hw.next()   => { value: 'world', done: false }
        hw.next()   => { value: 'ending', done: true }
        hw.next()   => { value: undefined, done: true }
            </pre>
        </div>
        <div>
            <h5>实例场景抽奖</h5>
            <p>
                比如抽奖的时候限定次数，若在全局定义一个变量，这样很容易造成内存泄漏。
                让人串改变量，多次抽奖，每次次数减一，直到达到条件为主
            </p>
            <pre v-pre>
    {
        let draw=function*(count){
            //具体抽奖逻辑
            console.log(`剩余${count}次`)
        }
        let residue=function*(count){
            while(count>0){
                yield draw(count)
            }
        }
        let star = residue (5)
        let btn=document.createElement('button')
        btn.id='star'
        btn.textContent='抽奖'
        document.body.appendChild(btn)
        btn.addEventListener('click',function(){
            star.next()
        },false)
    }            
            </pre>
        </div>
        <div>
            <h5>实际场景HTTP</h5>
            <p>
                定义一个ajax请求，当返回值为0时就请求中断，否则将间隔1200ms时间
                不断轮询，直到满足条件为止。
            </p>
            <pre v-pre>
    {
        let ajax=function*(){
            yield new Promise(function(resolve,reject){
                setTimeout(function(){
                    resolve({code:0})
                },200)
            })
        }
        let pull=function(){
            let generator=ajax()
            let step=generator.next();
            step.value.then(function(d){
                if(d.code!=0){
                    setTimeout(function(){
                        console.log('wait');
                        pull()
                    },1000)
                }else{
                    consloe.log(d)
                }
            })
        }
        pull()
    }            
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"Genertor",
}
</script>

