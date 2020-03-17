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
        <div>
            <h5>增删class</h5>
            <pre v-pre>
        // 注册一个全局自定义指令 v-toggle
        Vue.directive('toggleClass', {
            bind: function(el, binding) {
                el.onclick = function(e) {
                    // e.preventDefault();
                        e.stopPropagation();
                    if (el.className.indexOf(binding.value.class) v-pre &lt; 0) {
                        el.className = el.className + ' ' + binding.value.class
                    } else {
                        el.className = el.className.replace(' ' + binding.value.class, '');
                    }
                }
                if(binding.value.close){
                    var doc=document;
                    if (doc.addEventListener) { //所有主流浏览器，除了 IE 8 及更早 IE版本
                        doc.addEventListener("click", function(){
                            el.className = el.className.replace(' ' + binding.value.class, '');
                        });
                    } else if (doc.attachEvent) { // IE 8 及更早 IE 版本
                        doc.attachEvent("onclick", function(){
                            el.className = el.className.replace(' ' + binding.value.class, '');
                        });
                    }
                }
            }
        })        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"direct",
}
</script>

