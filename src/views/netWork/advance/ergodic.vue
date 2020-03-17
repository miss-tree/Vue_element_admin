<template>
    <div>
        <location :list='list'/>
        <div>
            <h4>遍历</h4>
            <p>
                数组和对象的遍历右很多种，下面列举下遍历的方法：
                for 循环、for in 循环、while 循环、do while 循环、Array forEach 循环、
                Array map()方法、Array filter() 方法、Array some() 方法、Array every() 方法、
                Array reduce()方法、Array reduceRight()方法、for of 循环。                
            </p>
        </div>
        <div>
            <h5 id='break'>是否可以中断</h5>
            <p>
                Array forEach 循环、Array map()方法、Array filter() 方法、
                Array some() 方法、Array every() 方法、Array reduce()方法、
                Array reduceRight()方法、都不能使用 break 和 continue 中断循环。
                但是 map 可以使用 return 。
            </p>
            <pre v-pre>
        for(var i=0;i&lt;5;i++){
            if(i==2) break          //中断循环
            console.log(i)
        }        
        => 0 1

        const obj={name:"sdas",age:33,sex:"fex",isfor:'collage'};
        for(let i in obj ){
            if(i==age) continue       //跳出本次循环
            console.log(i)
        }        
        => name  sex  isfor

        const arr = ['xiaoming','33','hello','world'];
        for(let i of arr ){
            if(i=='33') continue       //跳出本次循环
            console.log(i)
        }    
        => xiaoming  hello  world
            </pre>
            <p>
                从上面可以看出，for 循环的是下标，for ... in 循环的是键名，for ... of 循环的是键值。
                都可以使用 break 和 continue 中断。
            </p>
        </div>
        <div>
            <h5 id="sequence">是否按顺序执行</h5>
            <p>
                主要是for 、for ... in 、for ... of 三者。其他的遍历方法因为无法中断，
                都是遍历数组或对象，执行对应的方法。而在遍历内部建立异步代码的话，
                循环会先执行完，而不会按顺序执行。想要按顺序执行的话，可以建立立即执行函数，
                或在遍历时建立代码作用域。
            </p>
            <pre>
        for(var i in 5){
            setTimeout(()=>{
                console.log(i)
            },0)
        }     
        => 5 5 5 5 5   //i值=5时停止循环，宏任务时就执行了5

        for(var i=0;i&lt;5;i++){
            ((i)=>setTimeout(()=>{
                console.log(i)
            },0))(i)
        }
        =>0 1 2 3 4     //内部执行了一个立即执行函数，形成了一个循环内的作用域

        for(let i=0;i&lt;5;i++){
            setTimeout(()=>{
                console.log(i)
            },0)
        }
        =>0 1 2 3 4     //定义了一个作用域，每次循环只在作用域内有效
            </pre>
        </div>   
        <div>
            <h5 id="async">循环使用 async 与 await</h5>
            <p>
                上面说了要求按顺序执行，这里的使用方法也是差不多的。
                但是这里不仅要求按顺序，还要求间隔一段时间，就要用到
                 async 与 await 的异步函数。使用普通的setTimeOut()
                 方法将会是间隔一段时间后全部一起执行，和我们的预期不符合。
            </p>
            <pre>
        const fruitbasket = ["apple", "grape", "pear","bananer","orange"];
        const  ms = (ms)=>{ return new Promise(resolve => setTimeout(resolve, ms))}
        const   getNumFruit = (fruit) => {return ms(1000).then(()=>{console.log(fruit)})}
        async function hander (){
            for (let i = 0; i &lt; fruitbasket.length; i ++) {
                const fruit = fruitbasket[i];
                const numFruit = await getNumFruit(fruit);
                console.log(numFruit);
            }
        }
        =>每间隔1秒打印一次水果

            </pre>
            <p>
                在同个作用域内使用async 与 await方法是执行等待，下面的代码不执行。
                若使用 setTimeOut()、promise等异步方法，虽然异步等待，
                但是后面的代码还是会执行。
            </p>
            <pre>
        const fruitbasket = ["apple", "grape", "pear","bananer","orange"];
        const  ms = (ms)=>{ return new Promise(resolve => setTimeout(resolve, ms))}
        const   getNumFruit = (fruit) => {return ms(1000).then(()=>{console.log(fruit)})}

        fruitbasket.forEach(async (el,index)=>{
            const numFruit = await getNumFruit(el);
            console.log(numFruit);
        })
            => 间隔1秒后全部一起打印 "apple", "grape", "pear","bananer","orange"           

        fruitbasket.map(async ( index)=>{
            const fruit = fruitbasket[index];
            const numFruit = await getNumFruit(fruit);
            console.log(numFruit);
        })
        =>返回一个promise [promise, promise, promise,promise,promise]  需要await promise.all方法处理数组

        fruitbasket.filter(async (index)=>{
            const fruit = fruitbasket[index];
            const numFruit = await getNumFruit(fruit);
            console.log(numFruit);
        })
        => 直接打印["apple", "grape", "pear","bananer","orange" ] 没有间隔时间，后面都打印出undefined
        
        fruitbasket.reduce(async (sum, fruit)=>{
            const numFruit = await getNumFruit(fruit);
            console.log(sum);
            return sum + numFruit;
        },0)
        =>不好表达结果，但是都是1秒后返回5个promise

            </pre>
            <p>
            上面的方法执行出来的效果是间隔1秒后全部打印出来，没有达到预期的效果。
            通过上面的结果可得出以下结论：
            </p>    
            <ul>
                <li>forEach不支持 promise 感知，也不支持 async 和await，所以不能在 forEach 使用 await 。</li>
                <li> map 中使用 await，map 总是返回promises，你必须等待promises 数组得到处理。 </li>
                <li>filter也不支持 async 和await </li>
                <li>reduce回调中使用await，但是你必须记住先等待累加器！</li>
            </ul>
        </div> 
    </div>
</template>

<script>
    export default {
        name:"ergodic",
        components:{
            location:()=>import('@/components/location/index')
        },
        data(){
            return {
                list:[
                    {name:'是否可以中断',id:'break'},
                    {name:'是否按顺序执行',id:'sequence'},
                    {name:'使用async/await',id:'async'},
                ]
            }
        }
    }
</script>

