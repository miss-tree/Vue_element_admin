<template>
  <div>
    <location :list='list' />
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
      <h5 id="setMethods">Set 实例的属性和方法</h5>
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
    <div>
      <h4 id="weekSet">WeakSet</h4>
      <p>
        WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
        首先，<span class="red">WeakSet 的成员只能是对象，而不能是其他类型的值</span>。WeakSet 中的对象都是弱引用，
        即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，
        那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
      </p>
      <p>
        因为垃圾回收机制依赖引用计数，如果一个值的引用次数不为0，垃圾回收机制就不会释放这块内存。
        结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。WeakSet 里面的引用，
        都不计入垃圾回收机制，所以就不存在这个问题。 因此，WeakSet 适合临时存放一组对象，
        以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。
      </p>
      <p>
        由于上面这个特点，WeakSet 的成员是不适合引用的，因为它会随时消失。
        另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，
        而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 <span class="red">WeakSet 不可遍历</span> 。
      </p>
      <pre>
    const ws = new WeakSet();
    ws.add(1)
    // TypeError: Invalid value used in weak set
    ws.add(Symbol())
    // TypeError: invalid value used in weak set 

    const a = [[1, 2], [3, 4]];
    const ws = new WeakSet(a);//a是一个数组，它有两个成员，也都是数组
    // WeakSet {[1, 2], [3, 4]}     
    const b = [3, 4];
    const ws = new WeakSet(b);//数组b的成员不是对象，加入 WeakSet 就会报错
    // Uncaught TypeError: Invalid value used in weak set(…)
    思考：a可以添加到WeakSet是因为数组可以看成一个对象，从typeof可以打印出'Object'
      </pre>
    </div>
    <div>
      <h4 id="closure">WeakSet用法</h4>
      <ul>
        <li>WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。</li>
        <li>WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。</li>
        <li>WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中</li>
      </ul>
      <pre>
    const ws = new WeakSet();
    const obj = {};
    const foo = {};

    ws.add(window);
    ws.add(obj);

    ws.has(window); // true
    ws.has(foo);    // false

    ws.delete(window);
    ws.has(window);    // false   

    //WeakSet 没有size属性，没有办法遍历它的成员
    ws.size // undefined
    ws.forEach // undefined

    ws.forEach(function(item){ console.log('WeakSet has ' + item)})
    // TypeError: undefined is not a function  
      </pre>
      <div>下面方法避免了重复添加实例，而且不比担心内存泄漏问题</div>
      <pre>
    const foos = new WeakSet()
    class Foo {
        constructor() {
            this.method()    
        }
        method () {
            if (!foos.has(this)) {
                throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
            }else{
                foos.add(this)
            }
        }
    }      
      </pre>
    </div>
  </div>
</template>

<script>
  export default {
    name: "setstructure",
    components: {
      location: () => import('@/components/location/index')
    },
    data() {
      return {
        list: [{
            name: 'Set方法',
            id: 'setMethods'
          },
          {
            name: 'WeakSet',
            id: 'weekSet'
          },
          {
            name: 'WeakSet用法',
            id: 'closure'
          },
        ],
      };
    }
  }

</script>
