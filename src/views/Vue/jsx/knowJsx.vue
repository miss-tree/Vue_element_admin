<template>
  <div>
    <location :list='list' />
    <div>
      <h5 id="knowJsx">认识jsx</h5>
      <pre>
        export default {
        // 通过配置functional属性指定组件为函数式组件
        functional: true,
        /**
        * 渲染函数
        * @param {*} h
        * @param {*} context 函数式组件没有this, props, slots等都在context上面挂着
        */
        render(h, context) {
            const { props } = context
            if (props.avatar) {
            return &lt;img src={props.avatar}&gt;&lt;/img&gt;
            }
            return &lt;img src="default-avatar.png"&gt;&lt;/img&gt;
        }
        }
        
            </pre>
    </div>
    <div>
      <h5 id="setup">安装使用</h5>
      <pre>
        首先要安装babel插件
        npm i @vue/babel-preset-jsx  -D        
        npm i @vue/babel-helper-vue-jsx-merge-props  -D        
            </pre>
    </div>
    <div>
      <h5 id="Subject">示例</h5>
      <pre>
        &lt;div&gt;
            &lt;input type="text" v-model="dataVal"&gt;
            &lt;select name="select" id="cosur" v-model="selectVal" &gt;
                &lt;option value="hello"&gt;hello&lt;/option&gt;
                &lt;option value="everybody"&gt;world&lt;/option&gt;
            &lt;/select&gt;
            &lt;div class='spanDiv'&gt;
                &lt;span&gt;{ {spanVal} }&lt;/span&gt;
            &lt;/div&gt; 
            &lt;el-button type="primary" @click="onSubmit"&gt;查询&lt;/el-button&gt;
        &lt;/div&gt;    

        ==> script
        /**
        * 将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例，实际上也是 JSX 所要求的。
        * 从 Vue 的 Babel 插件的 3.4.0   *版本开始，
        * 我们会在以 ES2015 语法声明的含有 JSX 的任何方法和 getter 中 (不是函数或箭头函数中) 自动注入 
        * const h = this.$createElement，这样你就可以去掉 (h) 参数了。对于更早版本的插件，
        * 如果 h 在当前作用域中不可用，应用会抛错。
        */
        render(h){
            //<span class="red">h('标签',{属性，事件},[包裹的标签(重复h()函数)])</span> 
            return h('div',{},
                [
                    h('input',{
                        props:{//属性设置
                            value:this.dataVal,//绑定data值
                            type:'txet'//设置属性
                        },
                    }),
                    h('select',{
                        props:{
                            value:this.selectVal
                        },
                        on:{//点击事件
                            select:(value)=>{//选择事件，input框写input.
                                this.selectVal=value
                            }
                        },
                        attrs:{//样式设置  在element-ui 是style
                            width:'55px',
                            padding:'0'
                        }
                    },[
                        h('option',{
                            props:{
                                value:'hello',
                                label:'hello'
                            }
                        }),
                        h('option',{
                            props:{
                                value:'everybody',
                                label:'world'
                            }
                        }),
            /**
            *  若是用vue的v-for 遍历的话可以改成
            *  this.forArr.map(el=>{
            *   return h('option',{
            *          value:el.value,
            *          label:el.label
            *    })
            *   })
            */            
                    ]),
                    h('div',{
                        staticClass:'spanDiv'// 在element-ui 是class
                    },[
                        h('span',{
                            props:{
                                value:this.spanVal
                            }
                        })
                    ]),
                    h('el-button',{
                        props:{
                            type:'primary',
                            value:'查询'//标签的值
                        },
                        on:{
                            click:this.onSubmit//点击事件
                        }
                    })
                ]
            )
        }      

        切换成react的语法
        render(){
            return (
                &lt;div&gt;
                    &lt;input type="text" value={this.dataVal}&gt;
                    &lt;select name="select" id="cosur" v-model="selectVal" &gt;
                        {
                            this.forArr.map(el=>{
                                return &lt;option value={el.value}&gt;el.label&lt;/option&gt;
                            })
                        }
                    &lt;/select&gt;
                    &lt;div class='spanDiv'&gt;
                        &lt;span&gt;{this.spanVal}&lt;/span&gt;
                    &lt;/div&gt; 
                    &lt;el-button type="primary" onChange={this.onSubmit}&gt;查询&lt;/el-button&gt;
                &lt;/div&gt;
            )
        } 
            </pre>
      <p>
        上面的就简单的叙述jsx的使用,实际项目中很少用到，一般都是动态的标签才会用到
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "knowJsx",
    components: {
      location: () => import('@/components/location/index')
    },
    data() {
      return {
        list: [{
            name: '认识jsx',
            id: 'knowJsx'
          },
          {
            name: '安装使用',
            id: 'setup'
          },
          {
            name: '示例',
            id: 'Subject'
          },
        ]
      }
    },
    methods: {
      h() {
        s = 'ss'
      }
    }
  }

</script>

<style lang="scss" scoped>
  .red {
    color: red;
  }

</style>
