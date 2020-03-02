<template>
  <div>
    <div>
        <h4>$parent / $children与 ref</h4>
        <div>
          <ul>
            <li>ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例</li>
            <li>$parent / $children：访问父 / 子实例</li>
          </ul>
        </div>
        <pre>
    // 父组件
    &lt;template&gt;
      &lt;component-a ref="comA"&gt;&lt;/component-a&gt;
    &lt;/template&gt;
    &lt;script&gt;
      export default {
        mounted () {
          const comA = this.$refs.comA;
          comA.sayHello();  // 弹窗
        },
        methods(){
          getVal(){
            ...
          }
        }
      }
    &lt;/script&gt;  

    //componentA
    &lt;template&gt;
      &lt;div&gt;hello&lt;/div&gt;
    &lt;/template&gt;
    &lt;script&gt;
      export default {
        mounted () {
          const comA = this.$parent.getVal;
        },
        methods(){
          sayHello(){
            ...
          }
        }
      }
    &lt;/script&gt;      
        </pre>
        <div>
          还有一个方法就是 $root ,就是访问根实例  
        </div>
    </div>
  </div>
</template>