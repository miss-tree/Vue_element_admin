<template>
    <div>
        <div>
            <h5>v-if、v-else-if、v-else</h5>
            <p>三个都是条件渲染，当条件成立，在渲染树上渲染出来，不成立则不在 DOM 上渲染</p>
            <pre>
        &lt;h1 v-if="type === 'A'"&gt;Vue is awesome!&lt;/h1&gt;   
        &lt;div v-else-if="type === 'B'"&gt;hello everybody&lt;/div&gt;
        &lt;h1 v-else&gt;Oh no 😢&lt;/h1&gt;  

        data:{
            type:"B"
            },  
            </pre>
        </div>
        <div>
            <h5>v-show</h5>
            <div>不管条件成立还是不成立，都在 DOM 上渲染，只是 display 为 none</div>
            <pre>
        &lt;h1 v-show="ok"&gt;Hello!&lt;/h1&gt;            
            </pre>
        </div>
        <p>
            v-if 和 v-show 最大的区别在于 v-if 是惰性加载，条件成立就渲染，不成立就不想让。
            v-show 是不管条件都渲染，且都在DOM 上显示元素节点
        </p>
        <div>
            <h5>v-for</h5>
            <div>列表循环渲染,注意一点就是循环一定要加key值，可以加快渲染，因为列表渲染是根据下标来渲染，
                通过更新列表数据，更新渲染。Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。
                基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。
                列表通过监听数组的方法来确定更新：push()、pop()、shift()、unshift()、
                splice()、sort()、reverse()</div>
            <pre v-pre>
        &lt;ul id="example-2"&gt;
            &lt;li v-for="(item, index) in items" :key="item.index"&gt;
                        {{parentMessage}}
            &lt;/li&gt;
        &lt;/ul&gt;

        data: {
            items: [
            { message: 'Foo' },
            { message: 'Bar' }
            ]
        }    
        注意事项
        由于 JavaScript 的限制，Vue 不能检测以下数组的变动：

        当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
        当你修改数组的长度时，例如：vm.items.length = newLength   
        var vm = new Vue({
        data: {
            items: ['a', 'b', 'c']
        }
        })
        vm.items[1] = 'x' // 不是响应性的
        vm.items.length = 2 // 不是响应性的

            </pre>
            <div>
                v-for 与 v-if 一同使用,这个在vue里是不推荐的。
                因为当它们处于同一节点，v-for 的优先级比 v-if 更高，
                这意味着 v-if 将分别重复运行于每个 v-for 循环中。
                当你只想为部分项渲染节点时，这种优先级的机制会十分有用，如下：    
            </div>
            <pre>
        &lt;li v-for="todo in todos" v-if="!todo.isComplete"&gt;
             todo 
        &lt;/li&gt;

        推荐这样的写法
        &lt;ul v-if="todos.length"&gt;
        &lt;li v-for="todo in todos"&gt;
            todoCode
        &lt;/li&gt;
        &lt;/ul&gt;
        &lt;p v-else&gt;No todos left!&lt;/p&gt;
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:'ifrender'
}
</script>

