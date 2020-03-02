<template>
    <div>
        <div>
            <h5>Vue.extend</h5>
            <p>
                多个组件通过同一个挂载点进行组件的切换，is的值是哪个组件的名称，那么页面就会显示哪个组件
            </p>
            <pre>
        // 创建构造器
        var Profile = Vue.extend({
            template: '&lt;p&gt;{extendData}&lt;/br&gt;实例传入的数据为:{propsExtend}&lt;/p&gt;',//template对应的标签最外层必须只有一个标签
            data: function () {
                return {
                    extendData: '这是extend扩展的数据',
                }
            },
            props:['propsExtend']
        })

        // 创建的构造器可以挂载到元素上,也可以通过 components 或 Vue.component()注册使用
        // 挂载到一个元素上。可以通过propsData传参.

        new Profile({propsData:{propsExtend:'我是实例传入的数据'}}).$mount('#app-extend')


        // 通过 components 或 Vue.component()注册
        Vue.component('Profile',Profile)

            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"extend",
}
</script>

