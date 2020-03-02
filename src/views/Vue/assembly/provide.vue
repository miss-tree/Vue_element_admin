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
        方法二:使用2.6最新API Vue.observable 优化响应式 provide
        provide() {
            this.theme = Vue.observable({
                color: "blue"
            });
            return {
                theme: this.theme
            };
        },

        // F 组件
        inject: {
            theme: {
                //函数式组件取值不一样
                default: () => ({})
            }
        }       
              </pre>
          </div>
      </div>
  </div>
</template>
<script>