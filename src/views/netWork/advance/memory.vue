<template>
  <div class="wrapper">
    <location :list='list' />
    <div>
      <h4 id="memory">js内存</h4>
      <p>
        系统进程不再用到的内存，没有及时释放，就叫做内存泄漏（memory leak）。
        当内存占用越来越高，轻则影响系统性能，重则导致进程崩溃。
        Chrome 限制了浏览器所能使用的内存极限（64 位为 1.4GB，32 位为 1.0GB）
        <a href="https://juejin.cn/post/6914092198170460168?utm_source=gold_browser_extension#heading-8"
          target="_blank">
          掘金作者：lzg9527
        </a>
      </p>
      <p>
        垃圾回收机制依赖引用计数，如果一个值的引用次数不为0，垃圾回收机制就不会释放这块内存。
        结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏
      </p>
      <div>引起内存泄漏有以下原因：</div>
      <ul>
        <li>意外的全局变量</li>
        <li>闭包引起的内存泄漏</li>
        <li>没有清理的 DOM 元素引用</li>
        <li>被遗忘的定时器或者回调</li>
      </ul>
    </div>
    <div>
      <h4 id="accident">意外的全局变量</h4>
      <pre v-pre>
    未声明变量          
    function fn() {
        a = 'global variable'
    }
    fn()

    使用 this 创建的变量(this 的指向是 window)
    function fn() {
        this.a = 'global variable'
    }
    fn()
          </pre>
      <div>
        <div>解决方法</div>
        <ul>
          <li>将事件处理函数定义在外部，解除闭包，或者在定义事件处理函数的外部函数中</li>
          <li>在使用完后清除，变量=null</li>
          <li>使用let、const声明变量，让变量在作用域内</li>
        </ul>
      </div>
    </div>
    <div>
      <h4 id="closure">闭包</h4>
      <pre v-pre>
    // bad
    for (var k = 0; k &lt; 10; k++) {
        var t = function (a) {
            // 创建了10次  函数对象。
            console.log(a)
        }
        t(k)
    }

    // good
    function t(a) {
        console.log(a)
    }
    for (var k = 0; k &lt; 10; k++) {
        t(k)
    }
    t = null

          </pre>
      <div>
        <div>解决方法</div>
        <ul>
          <li>避免创建全局变量</li>
          <li>使用严格模式,在 JavaScript 文件头部或者函数的顶部加上 use strict。</li>
          <li>在项目创建时添加ESlint,在使用意外变量报错</li>
        </ul>
      </div>
    </div>
    <div>
      <h4 id="clearDom">没有清理的 DOM</h4>
      <pre v-pre>
    // 在对象中引用DOM
    var elements = {
        btn: document.getElementById('btn'),
    }
    function doSomeThing() {
        elements.btn.click()
    }

    function removeBtn() {
        // 将body中的btn移除, 也就是移除 DOM树中的btn
        document.body.removeChild(document.getElementById('button'))
        // 但是此时全局变量elements还是保留了对btn的引用, btn还是存在于内存中,不能被GC回收
    }

    解决方法：手动删除，elements.btn = null
        </pre>
      <div>
        <p>
          还有一种情况是在操作过程中不断的产生DOM元素，没有清除。例如移动端下拉加载数据，
          在下拉过程中不断加载DOM元素而没有清除，当到移动极限后就会卡起来。还有一种情况
          就是在使用自定义加载的离线地图，为地图坐标添加了标注信息(openlayers内部提供标注方法，
          但是没有去除标注的元素，跟vue这样的数据框架不一样，标注在鼠标滚动放大到一定级别时内部创建DOM元素，
          在缩小后还要自己手动清除)，当用户查看标注信息缩小后没有清除元素，只是把元素隐藏。
        </p>
      </div>
    </div>
    <div>
      <h4 id="miss">被遗忘的定时器或者回调</h4>
      <p>
        定时器中有 dom 的引用，即使 dom 删除了，但是定时器还在，所以内存中还是有这个 dom。
      </p>
      <pre v-pre>
    // 定时器
    var serverData = loadData()
    setInterval(function () {
        var renderer = document.getElementById('renderer')
        if (renderer) {
            renderer.innerHTML = JSON.stringify(serverData)
        }
    }, 5000)

    // 观察者模式
    var btn = document.getElementById('btn')
    function onClick(element) {
        element.innerHTMl = "I'm innerHTML"
    }
    btn.addEventListener('click', onClick)

        </pre>
      <div>
        <div>解决方法</div>
        <ul>
          <li>手动删除定时器和 dom</li>
          <li>removeEventListener 移除事件监听</li>
        </ul>
      </div>
    </div>
    <div>
      <h4 id="memoryvue">VUE项目常出现的问题</h4>
      <p>
        定时器中有 dom 的引用，即使 dom 删除了，但是定时器还在，所以内存中还是有这个 dom。
      </p>
      <pre v-pre>
    // 在页面设置全局window对象且引用了本页面的dom对象
    mounted() {
      window.variable = {
        name: 'home',
        node: document.getElementById('home'),
      }
      window.addEventListener('click', this.func)
      this.$EventBus.$on('homeTask', res => {})
    }
    // 页面卸载的时候解除引用
    beforeDestroy () {
        window.test = null 
        window.removeEventListener('click', this.func)
        this.$EventBus.$off() // 解除引用
    }

    优雅的解除方法：
    this.$once('hook:beforeDestory',()=>{})
        </pre>
      <div>
        <div>解除Echarts实例</div>
        <p>
          每一个图例在没有数据的时候它会创建一个定时器去渲染气泡，页面切换后，
          echarts 图例是销毁了，但是这个 echarts 的实例还在内存当中，
          同时它的气泡渲染定时器还在运行。使用 dispose()方法销毁这个图例，图例是不存在了，
          但图例的 resize()方法会启动，则会报没有 resize 这个方法，
          而 clear()方法则是清空图例数据，不影响图例的 resize，而且能够释放内存。
        </p>
        <pre v-pre>
    this.chart.clear()
    this.chart=null
        </pre>
      </div>
    </div>
    <div>
      <h4 id="memoryes">ES6防止内存泄漏</h4>
      <p>
        ES6推出了两种新的数据结构： weakset 和 weakmap。
        对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，
        也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存。
      </p>
      <pre v-pre>
    const m = new WeakMap()
    const ele = document.getElementById('myDiv')
    m.set(ele, 'something')
    m.get(ele) // something
    Map解决了对象 hash 结构 问题   obj[element] = 'metadata' === obj['[object HTMLDivElement]'] // "metadata" 
      

      
    // 代码1
    ele.addEventListener('click', handler, false)

    // 代码2
    const listener = new WeakMap()
    listener.set(ele, handler)
    ele.addEventListener('click', listener.get(ele), false)
  
        </pre>
      <div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'memory',
    components: {
      location: () => import('@/components/location/index')
    },
    data() {
      return {
        list: [{
            name: 'js内存',
            id: 'memory'
          },
          {
            name: '意外的全局变量',
            id: 'accident'
          },
          {
            name: '闭包',
            id: 'closure'
          },
          {
            name: '没有清理的 DOM',
            id: 'clearDom'
          },
          {
            name: '被遗忘的定时器或者回调',
            id: 'miss'
          },
          {
            name: 'VUE项目常出现的问题',
            id: 'memoryvue'
          },
          {
            name: 'ES6防止内存泄漏',
            id: 'memoryes'
          }
        ],
      };
    },
  };

</script>
