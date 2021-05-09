<template>
    <div>
        <div>
            <h5 id="from">Array.from()</h5>
            <div>Array.from将伪转为真正的新数组</div>
            <pre>
        /*/ ES5的写法
        var arr1 = [].slice.call(arrayLike); => ['a', 'b', 'c']

        /*/ ES6的写法
        let arr2 = Array.from(arrayLike); => ['a', 'b', 'c']

        Array.from('hello')
        => ['h', 'e', 'l', 'l', 'o']

        let namesSet = new Set(['a', 'b'])
        Array.from(namesSet) => ['a', 'b']

        function fn(){
            return Array.from(arguments)
        }
        fn(1,2,3,4,5)=> [1,2,3,4,5]
            </pre>
            <div>Array.from还可以接受第二个参数，作用类似于数组的map方法，
                用来对每个元素进行处理，将处理后的值放入返回的数组。</div>
            <pre>
        Array.from(arrayLike, x => x * x);
        /*/ 等同于
        Array.from(arrayLike).map(x => x * x);

        Array.from([1, 2, 3], (x) => x * x)
        => [1, 4, 9]        
            </pre>
        </div>
        <div>
            <h5 id="zzhh">Array.of()</h5>
            <div>Array.of方法用于将一组值，转换为数组。</div>
            <pre>
        Array.of(3, 11, 8) => [3,11,8]
        Array.of(3) => [3]
        Array.of(3).length => 1        
            </pre>
        </div>
        <div>
            <h5>数组实例的 copyWithin()</h5>
            <div>在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），
                然后返回当前数组。也就是说，使用这个方法，会修改当前数组。</div>
            <div class="G_line">
                <span class="G_line_r">Array.prototype.copyWithin(target, start = 0, end = this.length)</span>
            </div>
            <ul>
                <li>target（必需）：从该位置开始替换数据。如果为负值，表示倒数</li>
                <li>start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算</li>
                <li>end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。</li>
            </ul>
            <pre>
        [1, 2, 3, 4, 5].copyWithin(0, 3)
        => [4, 5, 3, 4, 5]

         将3号位复制到0号位
        [1, 2, 3, 4, 5].copyWithin(0, 3, 4)
        => [4, 2, 3, 4, 5]  

         将2号位到数组结束，复制到0号位
        let i32a = new Int32Array([1, 2, 3, 4, 5]);
        i32a.copyWithin(0, 2);
        => Int32Array [3, 4, 5, 4, 5]      
            </pre>
        </div>
        <div>
            <h5 id="sszz">数组实例的 find() 和 findIndex()</h5>
            <p>数组实例的find方法，用于找出第一个符合条件的数组成员。
                它的参数是一个回调函数，所有数组成员依次执行该回调函数，
                直到找出第一个返回值为true的成员，然后返回该成员。
                如果没有符合条件的成员，则返回undefined。
                与filter类似，find()返回一个数值，filter返回一个数组</p>
            <pre>
        [1, 4, -5, 10].find((n) => n < 6)
        => 1

        [1, 5, 10, 15].find(function(value, index, arr) {
        return value > 9;
        }) => 10
            </pre>
            <p>数组实例的findIndex方法的用法与find方法非常类似，
                返回第一个符合条件的数组成员的位置，
                如果所有成员都不符合条件，则返回-1。</p>

            <pre>
        [1, 5, 10, 15].findIndex(function(value, index, arr) {
        return value > 9;
        }) => 2        
                
            </pre>    
        </div>
        <div>
            <h5 id="fill">数组实例的 fill()</h5>
            <pre>
        ['a', 'b', 'c'].fill(7)
        => [7, 7, 7]

        new Array(3).fill(7)
        => [7, 7, 7]   

        fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
        ['a', 'b', 'c'].fill(7, 1, 2)
        => ['a', 7, 'c']     

        注意，如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。
        let arr = new Array(3).fill({name: "Mike"});
        arr[0].name = "Ben";
        arr
        => [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]

        let arr = new Array(3).fill([]);
        arr[0].push(5);
        arr
        => [[5], [5], [5]]
            </pre>
        </div>
        <div>
            <h5 id="entries">数组实例的 entries()，keys() 和 values()</h5>
            <div>keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。</div>
            <pre>
        for (let index of ['a', 'b'].keys()) {
            console.log(index);
        }
        => 0
        => 1

        for (let elem of ['a', 'b'].values()) {
            console.log(elem);
        }
        => 'a'
        => 'b'

        for (let [index, elem] of ['a', 'b'].entries()) {
            console.log(index, elem);
        }
        => 0 "a"
        => 1 "b"  

        如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。
        let letter = ['a', 'b', 'c'];
        let entries = letter.entries();
        console.log(entries.next().value); => [0, 'a']
        console.log(entries.next().value); => [1, 'b']
        console.log(entries.next().value); => [2, 'c']      
            </pre>
        </div>
        <div>
            <h5 id="includes">数组实例的 includes()</h5>
            <div>对于一个数组判断出一个布尔值</div>
            <pre>
        [1, 2, 3].includes(2)     // true        
        [1, 2, 3].includes(3, 3);  // false
        [1, 2, 3].includes(3, -1); // true        
            </pre>
        </div>
        <div>
            <h5 id="flatMap">数组实例的 flat()，flatMap()</h5>
            <div>将多维数组变成一维的数组。该方法返回一个新数组，对原数据没有影响。</div>
            <pre>
        [1, 2, [3, 4]].flat()
        // [1, 2, 3, 4]

        [1, 2, [3, [4, 5]]].flat()
        // [1, 2, 3, [4, 5]]     

        如果原数组有空位，flat()方法会跳过空位。
        [1, 2, , 4, 5].flat()
        // [1, 2, 4, 5]  
            </pre>
            <p>flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），
                然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。</p>
            <pre>
        相当于 [[2, 4], [3, 6], [4, 8]].flat()
        [2, 3, 4].flatMap((x) => [x, x * 2])
        // [2, 4, 3, 6, 4, 8]        
            </pre>
        </div>
        <div>
            <h5 id="sort">Array.prototype.sort() 的排序稳定性</h5>
            <div class="G_line">
                <span class="G_line_r">arr.sort((a,b)=>a-b)</span>
            </div>
            <div>主要讲下快速排序方法</div>
            <pre v-pre>
        function quickSort (arr) {
            if （arr.length &lt;= 1） {return arr}
            var destIndex = Math.floor(arr.length/2)    //既然是随机取，也可以直接取第一个 
            var left = [], right = [];
            var dest = arr.splice(destIndex,1)[0];
            for (var i =0;i&lt;arr.length;i++){
                if (arr[i]&lt;dest) {
                    left.push(arr[i])
                } else {
                    right.push(arr[i]) 
                }
            }
            return quickSort(left).concat([dest],quickSort(right)   //不断递归将数据拼接
        }
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:'arrayrest',
}
</script>

