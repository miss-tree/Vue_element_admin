<template>
    <div>
        <div>
            <h5>点击事件</h5>
            <div> v-on:click 的缩写是 @click </div>
            <pre>
        &lt;div id="example-3"&gt;
            &lt;button v-on:click="say('hi')"&gt;Say hi&lt;/button&gt;
            &lt;button @click="say('what')"&gt;Say what&lt;/button&gt;
        &lt;/div&gt;   

        methods: {
            say: function (message) {
                alert(message)
            }
        }     
            </pre>
        </div>
        <div>
            <h5>修饰符</h5>
            <pre>
        &lt;!-- 阻止单击事件继续传播 --&gt;
        &lt;a v-on:click.stop="doThis"&gt;&lt;/a&gt;

        &lt;!-- 提交事件不再重载页面 --&gt;
        &lt;form v-on:submit.prevent="onSubmit"&gt;&lt;/form&gt;

        &lt;!-- 修饰符可以串联 --&gt;
        &lt;a v-on:click.stop.prevent="doThat"&gt;&lt;/a&gt;

        &lt;!-- 只有修饰符 --&gt;
        &lt;form v-on:submit.prevent&gt;&lt;/form&gt;

        &lt;!-- 添加事件监听器时使用事件捕获模式 --&gt;
        &lt;!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 --&gt;
        &lt;div v-on:click.capture="doThis"&gt;...&lt;/div&gt;

        &lt;!-- 只当在 event.target 是当前元素自身时触发处理函数 --&gt;
        &lt;!-- 即事件不是从内部元素触发的 --&gt;
        &lt;div v-on:click.self="doThat"&gt;...&lt;/div&gt;   

        &lt;!-- 点击事件将只会触发一次 --&gt;
        &lt;a v-on:click.once="doThis"&gt;&lt;/a&gt;        例如有些事件只提醒一次

        &lt;!-- 在“change”时而非“input”时更新 --&gt;
        &lt;input v-model.lazy="msg" &gt;
		
		&lt;input v-model.number="age" type="number"&gt;
		&lt;input v-model.trim="msg"&gt;

        &lt;!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 --&gt;
        &lt;!-- 而不会等待 `onScroll` 完成  --&gt;
        &lt;!-- 这其中包含 `event.preventDefault()` 的情况 --&gt;
        &lt;div v-on:scroll.passive="onScroll"&gt;...&lt;/div&gt;,
        这个 .passive 修饰符尤其能够提升移动端的性能。
        不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略，同时浏览器可能会
        向你展示一个警告。请记住，.passive 会告诉浏览器你不想阻止事件的默认行为。

        按键修饰符
        &lt;!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` --&gt;
        &lt;input v-on:keyup.enter="submit"&gt;,
        &lt;input v-on:keyup.page-down="onPageDown"&gt;,

        按键码
        &lt;input v-on:keyup.13="submit"&gt;,

        系统修饰键
        &lt;!-- Alt + C --&gt;
        &lt;input @keyup.alt.67="clear"&gt;

        &lt;!-- Ctrl + Click --&gt;
        &lt;div @click.ctrl="doSomething"&gt;Do something&lt;/div&gt;
        请注意修饰键与常规按键不同，在和 keyup 事件一起用时，事件触发时修饰键必须处于按下状态。
        换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl。而单单释放 ctrl 也不会触发事件。
        如果你想要这样的行为，请为 ctrl 换用 keyCode：keyup.17。

        .exact 修饰符
        &lt;!-- 即使 Alt 或 Shift 被一同按下时也会触发 --&gt;
        &lt;button @click.ctrl="onClick"&gt;A&lt;/button&gt;

        &lt;!-- 有且只有 Ctrl 被按下的时候才触发 --&gt;
        &lt;button @click.ctrl.exact="onCtrlClick"&gt;A&lt;/button&gt;

        &lt;!-- 没有任何系统修饰符被按下的时候才触发 --&gt;
        &lt;button @click.exact="onClick"&gt;A&lt;/button&gt;
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:'event'
}
</script>

