<template>
  <div>
    <div>
      <h5 id="copy">v-copy</h5>
      <pre v-pre>
    const copy = {
        bind(el, { value }) {
            el.$value = value
            el.handler = () => {
              if (!el.$value) {
                  // 值为空的时候，给出提示。可根据项目UI仔细设计
                  console.log('无复制内容')
                  return
              }
              // 动态创建 textarea 标签
              const textarea = document.createElement('textarea')
              // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
              textarea.readOnly = 'readonly'
              textarea.style.position = 'absolute'
              textarea.style.left = '-9999px'
              // 将要 copy 的值赋给 textarea 标签的 value 属性
              textarea.value = el.$value
              // 将 textarea 插入到 body 中
              document.body.appendChild(textarea)
              // 选中值并复制
              textarea.select()
              const result = document.execCommand('Copy')
              if (result) {
                  console.log('复制成功') // 可根据项目UI仔细设计
              }
              document.body.removeChild(textarea)
            }
            // 绑定点击事件，就是所谓的一键 copy 啦
            el.addEventListener('click', el.handler)
        },
        // 当传进来的值更新的时候触发
        componentUpdated(el, { value }) {
            el.$value = value
        },
        // 指令与元素解绑的时候，移除事件绑定
        unbind(el) {
            el.removeEventListener('click', el.handler)
        },
    }

    export default copy
        </pre>
    </div>
    <div>
      <h5 id="debounce">v-debounce</h5>
      <pre v-pre>
    const debounce = {
        inserted: function (el, binding) {
            let timer
            el.addEventListener('click', () => {
                if (timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(() => {
                    binding.value()
                    //==> func.apply(context, args)
                }, 1000)
            })
        },
    }
    export default debounce

    main.js
    import {debounce} from './utils/permission' 
    Vue.directive('debounce', debounce)

    components.vue
    &lt;h5&gt; id="qarams" v-debounce="debounceClick"&gt;参数&lt;/h5&gt;
    methods:{
        debounceClick () {
            console.log('只触发一次')
        }
    }
        </pre>
    </div>
    <div>
      <h5 id="waterMarker">加水印</h5>
      <pre v-pre>
    function addWaterMarker(str, parentNode, font, textColor) {
        // 水印文字，父元素，字体，文字颜色
        var can = document.createElement('canvas')
        parentNode.appendChild(can)
        can.width = 200                 //通过宽高控制水印的密度
        can.height = 150            
        can.style.display = 'none'
        var cans = can.getContext('2d')
        cans.rotate((-20 * Math.PI) / 180)      //控制旋转角度
        cans.font = font || '16px Microsoft JhengHei'   
        cans.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)'
        cans.textAlign = 'left'
        cans.textBaseline = 'Middle'
        cans.fillText(str, can.width / 10, can.height / 2)
        parentNode.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
        }

        const waterMarker = {
        bind: function (el, binding) {
            addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor)
        },
    }

    export default addWaterMarker


    main.js
    import {addWaterMarker} from './utils/permission' 
    Vue.directive('waterMarker', addWaterMarker)

    components.vue
    &lt;div&gt; class="waterMarker"
    v-waterMarker="{text:'miss-tree版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"&gt;&lt;/div&gt;
    .waterMarker{
        width:  100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9999;
    }
        </pre>
    </div>
    <div>
      <h5 id="LazyLoad">懒加载</h5>
      <pre v-pre>
    const LazyLoad = {
        // install方法
        install(Vue, options) {
            const defaultSrc = options.default
            Vue.directive('lazy', {
            bind(el, binding) {
                LazyLoad.init(el, binding.value, defaultSrc)
            },
            inserted(el) {
                if (IntersectionObserver) {
                LazyLoad.observe(el)
                } else {
                LazyLoad.listenerScroll(el)
                }
            },
            })
        },
        // 初始化
        init(el, val, def) {
            el.setAttribute('data-src', val)
            el.setAttribute('src', def)
        },
        // 利用IntersectionObserver监听el
        observe(el) {
            var io = new IntersectionObserver((entries) => {
            const realSrc = el.dataset.src
            if (entries[0].isIntersecting) {
                if (realSrc) {
                el.src = realSrc
                el.removeAttribute('data-src')
                }
            }
            })
            io.observe(el)
        },
        // 监听scroll事件
        listenerScroll(el) {
            const handler = LazyLoad.throttle(LazyLoad.load, 300)
            LazyLoad.load(el)
            window.addEventListener('scroll', () => {
            handler(el)
            })
        },
        // 加载真实图片
        load(el) {
            const windowHeight = document.documentElement.clientHeight
            const elTop = el.getBoundingClientRect().top
            const elBtm = el.getBoundingClientRect().bottom
            const realSrc = el.dataset.src
            if (elTop - windowHeight < 0 && elBtm > 0) {
            if (realSrc) {
                el.src = realSrc
                el.removeAttribute('data-src')
            }
            }
        },
        // 节流
        throttle(fn, delay) {
            let timer
            let prevTime
            return function (...args) {
            const currTime = Date.now()
            const context = this
            if (!prevTime) prevTime = currTime
            clearTimeout(timer)

            if (currTime - prevTime > delay) {
                prevTime = currTime
                fn.apply(context, args)
                clearTimeout(timer)
                return
            }

            timer = setTimeout(function () {
                prevTime = Date.now()
                timer = null
                fn.apply(context, args)
            }, delay)
            }
        },
        }

        export default LazyLoad


    main.js
    import {LazyLoad} from './utils/permission' 
    Vue.directive('debounce', LazyLoad)

    components.vue
    &lt;img&gt; img v-LazyLoad="xxx.jpg"/&gt;
        </pre>
    </div>
    <div>
      <h5 id="longpress">长按</h5>
      <pre v-pre>
    const longpress = {
        bind: function (el, binding, vNode) {
            if (typeof binding.value !== 'function') {
                throw 'callback must be a function'
            }
            // 定义变量
            let pressTimer = null
            // 创建计时器（ 2秒后执行函数 ）
            let start = (e) => {
                if (e.type === 'click' && e.button !== 0) {
                    return
                }
                if (pressTimer === null) {
                    pressTimer = setTimeout(() => {
                        handler()
                    }, 2000)
                }
            }
            // 取消计时器
            let cancel = (e) => {
                if (pressTimer !== null) {
                    clearTimeout(pressTimer)
                    pressTimer = null
                }
            }
            // 运行函数
            const handler = (e) => {
            binding.value(e)
            }
            // 添加事件监听器
            el.addEventListener('mousedown', start)
            el.addEventListener('touchstart', start)
            // 取消计时器
            el.addEventListener('click', cancel)
            el.addEventListener('mouseout', cancel)
            el.addEventListener('touchend', cancel)
            el.addEventListener('touchcancel', cancel)
        },
        // 当传进来的值更新的时候触发
        componentUpdated(el, { value }) {
            el.$value = value
        },
        // 指令与元素解绑的时候，移除事件绑定
        unbind(el) {
            el.removeEventListener('click', el.handler)
        },
    }

    export default longpress


    main.js
    import {longpress} from './utils/permission' 
    Vue.directive('longpress', longpress)

    components.vue
    &lt;button&gt;  v-longpress="longpress"&gt;长按&lt;/button&gt;
    methods:{
        longpress () {
            console.log('长按指令生效')
        }
    }
        </pre>
    </div>
  </div>
</template>

<script>
