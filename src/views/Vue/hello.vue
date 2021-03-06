<template>
    <div class="relative">
        <div class="topRight">
            <a href="https://github.com/haizlin/fe-interview/blob/master/lib/Vue.md"
                target="_new">
                vue面试题
            </a>
        </div>
        <div>
            <h5>什么是 mvvm？</h5>
            <p>
                MVVM 是 Model-View-ViewModel 的缩写。mvvm 是一种设计思想。Model 层代表数据模型，
                也可以在 Model 中定义数据修改和操作的业务逻辑；View 代表 UI 组件，
                它负责将数据模型转化成 UI 展现出来，ViewModel 是一个同步 View 和 Model 的对象。
                在 MVVM 架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互，
                Model 和 ViewModel 之间的交互是双向的， 因此 View 数据的变化会同步到 Model 中，
                而 Model 数据的变化也会立即反应到 View 上。
                ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，
                而 View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，
                不需要手动操作 DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。
            </p>
        </div>
        <div>
            <h5>mvvm 和 mvc 区别？</h5>
           <p>
               mvc 和 mvvm 其实区别并不大。都是一种设计思想。
               主要就是 mvc 中 Controller 演变成 mvvm 中的 viewModel。
               mvvm 主要解决了 mvc 中大量的 DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。
               和当 Model 频繁发生变化，开发者需要主动更新到 View 。
           </p>
        </div>
        <div>
            <h5>vue 的优点是什么？</h5>
           <ul>
               <li>
                   低耦合。视图（View）可以独立于 Model 变化和修改，一个 ViewModel 可以绑定到不同的"View"上，
                   当 View 变化的时候 Model 可以不变，当 Model 变化的时候 View 也可以不变。
               </li>
               <li>
                   可重用性。你可以把一些视图逻辑放在一个 ViewModel 里面，让很多 view 重用这段视图逻辑。
               </li>
               <li>
                   独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，
                   使用 Expression Blend 可以很容易设计界面并生成 xml 代码。
               </li>
               <li>
                   可测试。界面素来是比较难于测试的，而现在测试可以针对 ViewModel 来写。
               </li>
           </ul>
        </div>
        <div>
            <h5>vue 的双向绑定的原理是什么？</h5>
           <p>
               vue.js 是采用数据劫持结合发布者-订阅者模式的方式，
               通过 Object.defineProperty()来劫持各个属性的 setter，getter，
               在数据变动时发布消息给订阅者，触发相应的监听回调。
           </p>
           <ul>
               <li>
                   第一步：需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，
                   都加上 setter 和 getter 这样的话，给这个对象的某个值赋值，
                   就会触发 setter，那么就能监听到了数据变化
               </li>
               <li>
                   第二步：compile 解析模板指令，将模板中的变量替换成数据，
                   然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，
                   添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
               </li>
               <li>
                   第三步：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:
                   <ul>
                       <li>在自身实例化时往属性订阅器(dep)里面添加自己</li>
                       <li>自身必须有一个 update()方法</li>
                       <li>待属性变动 dep.notice()通知时，能调用自身的 update() 方法，并触发 Compile 中绑定的回调，则功成身退。</li>
                       <li>
                           第四步：MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，
                           通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，
                           最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化 -> 视图更新；
                           视图交互变化(input) -> 数据 model 变更的双向绑定效果。
                       </li>
                   </ul>
               </li>
           </ul>
        </div>
        <div>
            <h5>Vue是如何检测数组的变化？</h5>
           <ul>
               <li>
                   核心思想：使用了函数劫持的方式，重写了数组的方法（push,pop,unshift,shift···）。
               </li>
               <li>
                  Vue将data中的数组，进行了原型链的重写，指向了自己所定义的数组原型方法，当调用数组的API时，
                  可以通知依赖更新，如果数组中包含着引用类型，会对数组中的引用类型再次进行监控
               </li>
           </ul>
        </div>
        <div>
            <h5>vue为什么要求组件模板只能有一个根元素？</h5>
            <pre>
        当我们实例化Vue的时候，填写一个el选项，来指定我们的SPA入口：
        let vm = new Vue({
            el:'#app'
        })     
        或main.js
        new Vue({
            el: '#app',
            router,
            store,
            render: h => h(App)
        })   

        同时我们也会在body里面新增一个id为app的div
        &lt;div id='app'&gt;&lt;/div&gt;

        如果同时设置了多个入口，那么vue就不知道哪一个才是这个‘类’。
            </pre>
           <div>
               为什么template下也必须有且只能有一个div呢？
           </div>
           <div>template这个标签，这个标签是HTML5出来的新标签，它有三个特性：</div>
           <ul>
               <li>隐藏性：该标签不会显示在页面的任何地方，即便里面有多少内容，它永远都是隐藏的状态；</li>
               <li>任意性：该标签可以写在页面的任何地方，甚至是head、body、sciprt标签内；</li>
               <li>无效性：该标签里的任何HTML内容都是无效的，不会起任何作用；</li>
           </ul>
           <p>
               .vue的单文件组件。其实本质上，一个单文件组件，本质上（我认为）会被各种各样的loader处理成为.js文件
               （因为当你import一个单文件组件并打印出来的时候，是一个vue实例），通过template的任意性我们知道，
               template包裹的HTML可以写在任何地方，那么对于一个.vue来讲，
               这个template里面的内容就是会被vue处理为虚拟dom并渲染的内容，导致结果又回到了开始 ：
               既然一个.vue单文件组件是一个vue实例，那么这个实例的入口在哪里？
               如果在template下有多个div，那么该如何指定这个vue实例的根入口？
                为了让组件能够正常的生成一个vue实例，那么这个div会被自然的处理成程序的入口。
                通过这个‘根节点’，来递归遍历整个vue‘树’下的所有节点，并处理为vdom，
                最后再渲染成真正的HTML，插入在正确的位置
                那么这个入口，就是这个树的‘根’，各个子元素，子组件，就是这个树的‘枝叶’，
                而自然而然地，这棵‘树’，就是指一个vue实例了。
           </p>

        </div>
        <div>
            <h5>为什么Vue要采取异步渲染？</h5>
           <p>
               因为如果不采用异步渲染，那么每次更新数据都会进行重新渲染，
               为了提高性能，Vue通过异步渲染的方式，在本轮数据更新后，再去异步更新视图
           </p>
        </div>
         <div>
            <h5>Vue是如何检测数组的变化？</h5>
           <ul>
               <li>
                   核心思想：使用了函数劫持的方式，重写了数组的方法（push,pop,unshift,shift···）。
               </li>
               <li>
                  Vue将data中的数组，进行了原型链的重写，指向了自己所定义的数组原型方法，当调用数组的API时，
                  可以通知依赖更新，如果数组中包含着引用类型，会对数组中的引用类型再次进行监控
               </li>
           </ul>
        </div>
        <div>
            <h5>Object.defineProperty有什么缺点？（为什么Vue3.0开始使用Proxy实现响应式）</h5>
           <ul>
               <li>Object.defineProperty只能劫持对象的属性，因此需要遍历对象的每个属性，而Proxy可以直接代理对象</li>
               <li>
                   Object.defineProperty对新增属性需要手动进行观察，由于Object.defineProperty劫持的是对象的属性（第一点），
                   所以新增属性时，需要重新遍历对象，对其新增属性再使用Object.defineProperty进行劫持 
                   （正是这个原因导致我们在给data中的数组或对象新增属性时，需要使用$set才能保证视图可以更新）
               </li>
               <li>Proxy性能高，支持13种拦截方式</li>
           </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"hello",
}
</script>

<style lang="scss" scoped>
    .topRight{
        position: absolute;
        top:20px;
        right: 35px;
        font-size: 15px;
        color: #ff4800c2;
    }
</style>

