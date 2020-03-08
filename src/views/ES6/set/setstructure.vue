<template>
    <div>
        <div>
            <h5>Set</h5>
            <p>
                ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
                Set本身是一个构造函数，用来生成 Set 数据结构，
                参数是一个数组。
            </p>
            <pre>
        // 例一
        const set = new Set([1, 2, 3, 4, 4]);
        [...set]
        // [1, 2, 3, 4]

        // 例二
        const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
        items.size // 5

        // 例三
        const set = new Set(document.querySelectorAll('div'));
        set.size // 56

        // 类似于
        const set = new Set();
        document
        .querySelectorAll('div')
        .forEach(div => set.add(div));
        set.size // 56        
            </pre>
            <span class="G_red">注意</span>
            <p>
                一种去除数组重复成员的方法
                和去除字符串里面的重复字符。
            </p>
            <pre>
        // 去除数组的重复成员
        [...new Set(array)]  

        [...new Set('ababbc')].join('')
        // "abc"   
            </pre>
        </div>
        <div>
            <h5>Set 实例的属性和方法</h5>
            <ul>
                <li>Set.prototype.constructor：构造函数，默认就是Set函数。</li>
                <li>Set.prototype.size：返回Set实例的成员总数。</li>
                <li>Set.prototype.add(value)：添加某个值，返回 Set 结构本身。</li>
                <li>Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。</li>
                <li>Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。</li>
                <li>Set.prototype.clear()：清除所有成员，没有返回值。</li>
            </ul>
            <pre>
            s.add(1).add(2).add(2);
            // 注意2被加入了两次

            s.size // 2

            s.has(1) // true
            s.has(2) // true
            s.has(3) // false

            s.delete(2);
            s.has(2) // false    
            </pre>
        </div>
        <div>
            <h5>遍历操作</h5>
            <pre>
        let set = new Set(['red', 'green', 'blue']);

        for (let item of set.keys()) {
            console.log(item);
        }
        // red
        // green
        // blue

        for (let item of set.values()) {
            console.log(item);
        }
        // red
        // green
        // blue

        for (let item of set.entries()) {
            console.log(item);
        }
        // ["red", "red"]
        // ["green", "green"]
        // ["blue", "blue"]        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"setstructure",
}
</script>

