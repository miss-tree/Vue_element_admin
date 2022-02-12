<template>
    <div>
        <div>
            <h4>IntersectionObserver</h4>
            <pre>
        let io = new IntersectionObserver(callback, option);        
            </pre>
            <p>
        IntersectionObserver是浏览器原生提供的构造函数，
        接受两个参数：callback是可见性变化时的回调函数，
        一般会触发两次。一次是目标元素刚刚进入视口（开始可见），
        另一次是完全离开视口（开始不可见）。
        option是配置对象（该参数可选）。      
        构造函数的返回值是一个观察器实例。
        实例的observe方法可以指定观察哪个 DOM 节点。  
            </p>
            <pre>
        // 开始观察
        io.observe(document.getElementById('example'));

        // 停止观察
        io.unobserve(element);

        // 关闭观察器
        io.disconnect();        
            </pre>
        </div>
        <div>
            <h5>IntersectionObserverEntry 对象</h5>
            <p>
        callback函数的参数（entries）是一个数组，每个成员都是一个IntersectionObserverEntry对象。
        IntersectionObserverEntry对象提供目标元素的信息，一共有六个属性。        
            </p>
            <pre>
    {
        time: 3893.92,
        rootBounds: ClientRect {
            bottom: 920,
            height: 1024,
            left: 0,
            right: 1024,
            top: 0,
            width: 920
        },
        boundingClientRect: ClientRect {
            // ...
        },
        intersectionRect: ClientRect {
            // ...
        },
        intersectionRatio: 0.54,
        target: element
    }        
            </pre>
            <ul>
                <li>time：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒</li>
                <li>target：被观察的目标元素，是一个 DOM 节点对象</li>
                <li>rootBounds：根元素的矩形区域的信息，
                    getBoundingClientRect()方法的返回值，
                    如果没有根元素（即直接相对于视口滚动），则返回null</li>
                <li>boundingClientRect：目标元素的矩形区域的信息</li>
                <li>intersectionRect：目标元素与视口（或根元素）的交叉区域的信息</li>
                <li>intersectionRatio：目标元素的可见比例，
                    即intersectionRect占boundingClientRect的比例，
                    完全可见时为1，完全不可见时小于等于0</li>
            </ul>
        </div>
        <div>
            <h5>惰性加载（lazy load）</h5>
            <p>
                只有目标区域可见时，才会将模板内容插入真实 DOM，从而引发静态资源的加载。
                下面选择的元素 '.lazy-loaded' 可以是多个，看成一个伪数组。
                遍历的时候观察是否到视口
            </p>
            <pre>
        function query(selector) {
            return Array.from(document.querySelectorAll(selector));
        }

        var observer = new IntersectionObserver(
            function(changes) {
                changes.forEach(function(change) {
                var container = change.target;
                var content = container.querySelector('template').content;
                container.appendChild(content);
                observer.unobserve(container);
                });
            }
        );

        query('.lazy-loaded').forEach(function (item) {
            observer.observe(item);
        });        
            </pre>
            <pre>
        无限滚动
        var intersectionObserver = new IntersectionObserver(
        function (entries) {
            // 如果不可见，就返回
            if (entries[0].intersectionRatio <= 0) return;
            loadItems(10);
            console.log('Loaded new items');
        });

        // 开始观察
        intersectionObserver.observe(
            document.querySelector('.scrollerFooter')
        );        
            </pre>
        </div>
        <div>
            <h5>Option 配置对象</h5>
            <pre>
        new IntersectionObserver(
            entries => {/* ... */}, 
            {
                threshold: [0, 0.25, 0.5, 0.75, 1]
            }
        );        
        [0, 0.25, 0.5, 0.75, 1]就表示当目标元素 0%、25%、50%、75%、100% 可见时，会触发回调函数。

        var opts = { 
            root: document.querySelector('.container'),
            rootMargin: "500px 0px" 
        };
        var observer = new IntersectionObserver(
            callback,
            opts
        );
        除了root属性，还有rootMargin属性。后者定义根元素的margin，用来扩展或缩小rootBounds这个矩形的大小，
        从而影响intersectionRect交叉区域的大小。它使用CSS的定义方法，比如10px 20px 30px 40px，
        表示 top、right、bottom 和 left 四个方向的值。
    这样设置以后，不管是窗口滚动或者容器内滚动，只要目标元素可见性变化，都会触发观察器。
            </pre>
        </div>
        <div>
            <h5 class="red">注意点</h5>
            <p>
        IntersectionObserver API 是异步的，不随着目标元素的滚动同步触发。
规格写明，IntersectionObserver的实现，应该采用requestIdleCallback()，即只有线程空闲下来，
才会执行观察器。这意味着，这个观察器的优先级非常低，只在其他任务执行完，浏览器有了空闲才会执行。        
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:"IntersectionObserver",
}
</script>

