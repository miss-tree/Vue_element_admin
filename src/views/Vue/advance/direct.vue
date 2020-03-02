<template>
    <div>
        <div>
            <h5>权限指令</h5>
            <p>
                多个组件通过同一个挂载点进行组件的切换，is的值是哪个组件的名称，那么页面就会显示哪个组件
            </p>
            <pre>
        import store from '@/store'        
        Vue.directive('permission',{
            inserted(el, binding, vnode) {
                const { value } = binding
                const roles = store.getters && store.getters.roles

                if (value && value instanceof Array && value.length > 0) {
                    const permissionRoles = value
                    const hasPermission = roles.some(role => {//判断是否有权限
                        return permissionRoles.includes(role)
                    })
                    if (!hasPermission) {// 没有权限 移除Dom元素
                        el.parentNode && el.parentNode.removeChild(el)
                    }
                } else {
                    throw new Error(`need roles! Like v-permission="['admin','editor']"`)
                }
            }
        })    

        // 使用方式
        &lt;template&gt;
            &lt;div&gt;
                &lt;h1&gt;I am Home&lt;/h1&gt;
                &lt;!-- 按钮根据value --&gt;
                &lt;div v-permission="'admin'"&gt;
                    &lt;button&gt;权限1&lt;/button&gt;
                &lt;/div&gt;
                &lt;div v-permission="'editor'"&gt;
                    &lt;button&gt;权限2&lt;/button&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;

        // 无需再通过value去判断，直接通过v-permission的值进行判断即可
   
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"direct",
}
</script>

