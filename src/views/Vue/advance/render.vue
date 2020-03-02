<template>
    <div>
        <div>
            <h5>render</h5>
            <p>
                render选项的值是一个函数，通常叫渲染函数。
                传承了react的render函数，在vue中多用于做类似react的函数组件。
            </p>
            <ul>
                <li>没有管理任何状态</li>
                <li>没有监听任何传递给它的状态</li>
                <li>没有生命周期方法</li>
                <li>只是接收一些prop的函数</li>
                <li>函数式组件优点，渲染开销低</li>
            </ul>
            <pre>
        全局组件的例子
        Vue.component('myComponent', {
            render: function (createElement) {
                return createElement(
                    'h1',
                    this.title
                )
            },
            props: {
                title: {
                    type: String,
                    default: '我是渲染出来的组件'
                }
            }
        })
        =>&lt;h1&gt;我是渲染出来的全局组件&lt;/h1&gt;

        组件
        export default {
            props: {
                title: {
                    type: String,
                    default: "我是渲染出来的组件"
                }
            },
            data() {
                return {};
            },
            render: function(createElement) {
                return createElement("div", this.title);
            },
        };
        =>&lt;div&gt;我是渲染出来的组件&lt;/div&gt;

            </pre>
        </div>
        <div>
            <h5>createElement函数的第二个参数用来接收组件的数据对象,类型为Object,可选。</h5>
            <pre>
        class:        
        data() {
            return {
                classB:true
            };
        },
        render: function (createElement) {
            return createElement('div',
                {
                    class:['classA',{'classB':this.classB}],
                },
                '我是渲染出来的组件',
            );
        },
        
        style:
        render: function (createElement) {
            return createElement('div',
                {
                    style:[
                        {
                            color:'red',
                        },
                        {
                            fontSize: '14px'
                        }
                    ]
                },
                '我是渲染出来的组件',
            );
        },

        attrs：
        render: function (createElement) {
            return createElement('div',
                {
                    attrs:{
                        id:'idA',
                        title:'我是渲染出来的组件'
                    }
                },
                '我是渲染出来的组件',
            );
        },

        监听事件
        render: function (createElement) {
            return createElement('div',
                {
                    on: {
                        click: function(e){
                            console.log(e)
                        },
                    }
                },
                '我是渲染出来的组件',
            );
        },
            </pre>
        </div>
        <div>
            <h5>createElement函数的第三个参数用来接收子级虚拟节点，可选。</h5>
            <pre>
        export default {
            props: {
                title: {
                    type: Function,
                    default: "我是渲染出来的组件"
                }
            },
            data() {
                return {};
            },
            render: function (createElement) {
                return createElement('div', [this.title,'我是字符串',createElement('h1','我是子节点')]);
            },
        };
            </pre>
        </div>
        <div>
            <h5>render函数中实现v-if v-else v-for 模板功能</h5>
            <pre>
        props: ['lists'],
        render: function (h) {
            if (this.lists.length) {
                return h('ul', this.lists.map(function (item) {
                    return h('li', item.name)
                }))
            } else {
                return h('p', '没有数据')
            }
        }
            </pre>
        </div>
        <div>
            <h5>render函数中实现v-model模板功能</h5>
            <pre>
        props: ["value"],
        render: function(h) {
            var _this = this;
            return h("input", {
                domProps: {
                    value: _this.value
                },
                on: {
                    input: function(event) {
                        _this.$emit("input", event.target.value);
                    }
                }
            });
        }
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"render",
}
</script>

