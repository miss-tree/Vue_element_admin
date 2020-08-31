<template>
  <div>
      <h4>provide/inject</h4>
      <p>
          provide / inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，
          主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。
      </p>
      <pre>
    // A.vue
    export default {
        provide: {
            name: '浪里行舟'
        }
    }

    // B.vue
    export default {
        inject: ['name'],
        mounted () {
            console.log(this.name);  // 浪里行舟
        }
    }
      </pre>
      <p>
          需要注意的是：provide 和 inject 绑定并不是可响应的。
          这是刻意为之的。然而，如果你传入了一个可监听的对象，
          那么其对象的属性还是可响应的----vue官方文档
      </p>
      <div>
          provide与inject 怎么实现数据响应式
      </div>
      <div>
          <img src="@/assets/provide.png" alt="">
          <div>
              <pre>
        // A 组件  方法一：推荐使用
        provide() {
            return {
                theme: this         //方法一：提供祖先组件的实例
            };
        },   
        方法二:使用2.6最新API Vue.observable 观察方式优化响应式 provide
        provide() {
            this.theme = Vue.observable({
                color: "blue"
            });
            return {
                theme: this.theme,
                customForm: this
            };
        },
        methods:{
            handle(val){
                this.dataVal=val
            }
        }

        // F 组件
        inject: {
            theme: {
                //函数式组件取值不一样
                default: () => ({})
            },
            customForm:{
                default: () => ({})
            }
        },  
        mounted(){
            this.customForm.handle(fDataVal)//参数传个值改变组件A的data值
        }
              </pre>
              <p>
                  在调用组件A的方法最好是通过将A的this传递到后代中，这样就比较方便调用组件A的方法。
                  相当于在后代中直接发布订阅的方式调用组件A的方法，没有隔代的限制，不需要一个个传递事件。
                  若在后代要响应改变值还是通过provide()里传递A的方法，在方法内带参数，后代将参数带到方法中，
                  在A的方法里改变this.data里的值。
              </p>
              <p>
                  优势：
              </p>
              <ul>
                  <li>对比$attrs|$listent方法不需要一个个传递，父组件提供provide(),后代组件inject都能接收到，而且不会有缺失</li>
                  <li>对比全局的观察方式Vue.prototype.Bus，能传递更多的方法和值</li>
              </ul>   
          </div>
      </div>
  </div>
</template>
<script>