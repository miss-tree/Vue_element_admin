<template>
    <div>
        <div>
            <h5>mixins</h5>
            <p>
                场景:有些组件有些重复的 js 逻辑,如校验手机验证码,解析时间等,mixins 就可以实现这种混入 mixins 值是一个数组
            </p>
            <pre>
        // mixin.js      
        const mixin={
            created(){
                this.dealTime()
            },
            methods:{
                dealTime(){
                    console.log('这是mixin的dealTime里面的方法');
                }
            }
        }
        export mixin

        // index.vue
        import mixin from "./mixin.js"
        export default{
            mixins:[mixin]
        }
            </pre>
        </div>
        <div>
            <h5>extends</h5>
            <p>
                extends用法和mixins很相似,只不过接收的参数是简单的选项对象或构造函数,所以extends只能单次扩展一个组件
            </p>
            <pre>
        // extend.js      
        const extend={
            created(){
                this.dealTime()
            },
            methods:{
                dealTime(){
                    console.log('这是mixin的dealTime里面的方法');
                }
            }
        }

        // index.vue
        import extend from "./extend.js"
        export default{
            extends:extend
        }

            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"mixins",
}
</script>

