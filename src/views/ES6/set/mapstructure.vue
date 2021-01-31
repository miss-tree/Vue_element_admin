<template>
  <div>
    <location :list='list' />
    <div>
      <h5>Map</h5>
      <p>
        Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，
        各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，
        Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
        如果你需要“键值对”的数据结构，Map 比 Object 更合适。
      </p>
      <pre>
        const data = {};
        const element = document.getElementById('myDiv');

        data[element] = 'metadata';
        data['[object HTMLDivElement]'] // "metadata" 
    原意是将一个 DOM 节点作为对象data的键，但是由于对象 Hash 结构只接受字符串作为键名，
    所以element被自动转为字符串[object HTMLDivElement]     

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
        map.get('true') // 2

        map.set(undefined, 3);
        map.set(null, 4);
        map.get(undefined) // 3

        map.set(NaN, 123);
        map.get(NaN) // 123   

        const map = new Map();
        map.set(['a'], 555);
        map.get(['a']) // undefined 
        因为表面是针对同一个键，但实际上这是两个不同的数组实例，内存地址是不一样的，因此get方法无法读取该键
            </pre>
    </div>
    <div>
      <h5 id="mapMethods">实例的属性和操作方法</h5>
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
    <div>
      <h4 id="WeakMap">WeakMap</h4>
      <p>
        WeakMap结构与Map结构类似，也是用于生成键值对的集合。
        WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
      </p>
      <pre>
    const e1 = document.getElementById('foo');
    const e2 = document.getElementById('bar');
    const arr = [
        [e1, 'foo 元素'],
        [e2, 'bar 元素'],
    ];
    // 不需要 e1 和 e2 的时候  垃圾回收机制就不会释放e1和e2占用的内存。
    // 必须手动删除引用
    arr [0] = null;
    arr [1] = null;      


    const wm = new WeakMap();
    const element = document.getElementById('example');

    wm.set(element, 'some information');
    wm.get(element) // "some information"
      </pre>
      <p>
        WeakMap 就是为了解决这个问题而诞生的，它的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。
        因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。
        也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。
      </p>
      <span class="G_red">注意</span>
      <p>
        WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用
      </p>
      <pre>
    const wm = new WeakMap();
    let key = {};
    let obj = {foo: 1};

    wm.set(key, obj);
    obj = null;
    wm.get(key)
    // Object {foo: 1}      
      </pre>
    </div>
    <div>
      <h4 id="closure">WeakMap用法</h4>
      <p>
        一是没有遍历操作（即没有keys()、values()和entries()方法），也没有size属性。
        因为没有办法列出所有键名，某个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关。
        这一刻可以取到键名，下一刻垃圾回收机制突然运行了，这个键名就没了，为了防止出现不确定性，
        就统一规定不能取到键名。二是无法清空，即不支持clear方法。
      </p>
      <ul>
        <li>WeakMap.prototype.set(key, value)。key已经有值，则键值会被更新，否则就新生成该键。</li>
        <li>WeakMap.prototype.get(key)，get方法读取key对应的键值，如果找不到key，返回undefined。</li>
        <li>WeakMap.prototype.has(key)，has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。</li>
        <li>WeakMap.prototype.delete(key)，delete方法删除某个键，返回true。如果删除失败，返回false。</li>
      </ul>
      <pre>
    const wm = new WeakMap();

    // size、forEach、clear 方法都不存在
    wm.size // undefined
    wm.forEach // undefined
    wm.clear // undefined      
      </pre>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mapstructure",
    components: {
      location: () => import('@/components/location/index')
    },
    data() {
      return {
        list: [{
            name: 'Map方法',
            id: 'mapMethods'
          },
          {
            name: 'WeakMap',
            id: 'WeakMap'
          },
          {
            name: 'WeakMap用法',
            id: 'closure'
          },
        ],
      };
    }
  }

</script>
