<template>
    <div>
        <div>
            <h5>computed()计算属性</h5>
            <p>计算属性不可以和data,props三者同名，因为在最初始化的时候都会挂载在vue实例上。
                还有就是计算属性不能进行异步操作，它是以他依赖的值变化而开始重新计算的。
            </p>
            <pre>
        &lt;div id="example"&gt;
            &lt;p&gt;Original message: "{"'{' message '}'}"&lt;/p&gt;
            &lt;p&gt;Computed reversed message: "{""{" reversedMessage "}""}"&lt;/p&gt;
        &lt;/div&gt;

        var vm = new Vue({
            el: '#example',
            data: {
                message: 'Hello'
            },
            computed: {
                reversedMessage: function () {// 计算属性的 getter
                return this.message.split('').reverse().join('')
                }
            }
        })        
            </pre>
        </div>
        <div>
            <h5>watch()观察属性</h5>
            <pre>
        var vm = new Vue({
            data: {
                a: 1,
                b: 2,
                c: 3,
                d: 4,
                e: {
                    f: {
                        g: 5
                    }
                }
            },
            watch: {
                a: function (val, oldVal) {
                    console.log('new: %s, old: %s', val, oldVal)
                },
                b: 'someMethod',// 方法名 直接调用methods的方法
                c: {
                    handler: function (val, oldVal) { /* ... */ },
                    deep: true // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深，
                               // 但是每次object变化都会调用，比较消耗内存
                },
                d: {
                    handler: 'someMethod',
                    immediate: true // 该回调将会在侦听开始之后被立即调用
                },
                e: [// 可以介入多个函数
                    'handle1',
                    function handle2 (val, oldVal) { /* ... */ },
                    {
                        handler: function handle3 (val, oldVal) { /* ... */ },
                        /* ... */
                    }
                ],
                // watch vm.e.f's value: {g: 5} 可以监听对象里的属性
                'e.f': function (val, oldVal) { /* ... */ }
            }
        })
        vm.a = 2 // => new: 2, old: 1        
            </pre>
            <div>
                注意，不应该使用箭头函数来定义 watcher 函数 
                (例如 searchQuery: newValue => this.updateAutocomplete(newValue))。
                理由是箭头函数绑定了父级作用域的上下文，
                所以 this 将不会按照期望指向 Vue 实例，
                this.updateAutocomplete 将是 undefined。
            </div>
            <h5>函数定义式观察</h5>
            <pre>
        export default {
            data() {
                return {
                    count: 1      
                }
            },
            created() {
                this.<span class="red">$watch</span>('count', function(){
                    console.log('count 新值：'+newVal)
                },
                {immediate: true // 立即执行watch}
                )
            }
        }
        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"passVal",
    
}
</script>

<style>
.red{
    color: red;
}
</style>


