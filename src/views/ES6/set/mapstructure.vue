<template>
    <div>
        <div>
            <h5>Map</h5>
            <p>
                Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，
                各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，
                Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
                如果你需要“键值对”的数据结构，Map 比 Object 更合适。
            </p>
            <pre>
        const m = new Map();
        const o = {p: 'Hello World'};

        m.set(o, 'content')
        m.get(o) // "content"

        m.has(o) // true
        m.delete(o) // true
        m.has(o) // false        
            </pre>
            <span class="G_red">注意</span>
            <p>
                Set和Map都可以用来生成新的 Map。参数是个数组,数组的每一项都是一个数组,
                这个数组有两项,第一项作为键key,第二项作为值value。
                对于使用数组优先使用map(在删除上 Set 使用foeach开销大)，在使用不重复的数组使用 Set 。
                在使用传统数组和对象，优先使用 Set 和 Map 。
            </p>
            <pre>
        const set = new Set([
            ['foo', 1],
            ['bar', 2]
        ]);
        const m1 = new Map(set);
        m1.get('foo') // 1

        const m2 = new Map([['baz', 3]]);
        const m3 = new Map(m2);
        m3.get('baz') // 3    

        let map = new Map();

        map.set(-0, 123);
        map.get(+0) // 123

        map.set(true, 1);
        map.set('true', 2);
        map.get(true) // 1

        map.set(undefined, 3);
        map.set(null, 4);
        map.get(undefined) // 3

        map.set(NaN, 123);
        map.get(NaN) // 123    
            </pre>
        </div>
        <div>
            <h5>实例的属性和操作方法</h5>
            <ul>
                <li>size属性返回 Map 结构的成员总数。</li>
                <li>Map.prototype.set(key, value)。key已经有值，则键值会被更新，否则就新生成该键。</li>
                <li>Map.prototype.get(key)，get方法读取key对应的键值，如果找不到key，返回undefined。</li>
                <li>Map.prototype.has(key)，has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。</li>
                <li>Map.prototype.delete(key)，delete方法删除某个键，返回true。如果删除失败，返回false。</li>
                <li>Map.prototype.clear()，clear方法清除所有成员，没有返回值</li>
            </ul>
            <pre>
        const m = new Map();

        m.set('edition', 6)        // 键是字符串
        m.set(262, 'standard')     // 键是数值
        m.set(undefined, 'nah')    // 键是 undefined        
            </pre>
        </div>
        <div>
            <h5>遍历操作</h5>
            <ul>
                <li>Map.prototype.keys()：返回键名的遍历器。</li>
                <li>Map.prototype.values()：返回键值的遍历器</li>
                <li>Map.prototype.entries()：返回所有成员的遍历器</li>
                <li>Map.prototype.forEach()：遍历 Map 的所有成员。</li>
            </ul>
            <pre>
        onst map = new Map([
            ['F', 'no'],
            ['T',  'yes'],
        ]);

        for (let key of map.keys()) {
            console.log(key);
        }
        // "F"
        // "T"

        for (let value of map.values()) {
            console.log(value);
        }
        // "no"
        // "yes"

        for (let item of map.entries()) {
            console.log(item[0], item[1]);
        }
        // "F" "no"
        // "T" "yes"

        // 或者
        for (let [key, value] of map.entries()) {
            console.log(key, value);
        }
        // "F" "no"
        // "T" "yes"

        // 等同于使用map.entries()
        for (let [key, value] of map) {
            console.log(key, value);
        }
        // "F" "no"
        // "T" "yes"        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"mapstructure",
}
</script>

