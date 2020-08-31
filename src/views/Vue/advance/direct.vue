<template>
<div>
    <div>
        <location :list='list'/>
        <h5 id="direct">权限指令</h5>
        <pre>
    // 全局指令 定义时不需要 v-  调用时要加上 v- 前缀    
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
        <div>
            钩子函数
        </div>
        <ul>
            <li>bind : 只调用一次 , 指令第一次绑定元素时调用 , 在这里可以进行一次性的初始化设置 ;</li>
            <li>inserted : 被绑定元素插入父节点时调用 , 不一定渲染完成 , html 已经创建好了</li>
            <li>update : 所在组件的 VNode 更新时调用</li>
            <li>componentUpdated : 指令所在的组件的 VNode 全部更新完成后</li>
            <li>unbind : 指令与元素解绑时调用</li>
        </ul>
    </div>
    <div>
        <h5 id="lifetype">拖拽指令</h5>
        <div>钩子函数参数</div>
        <ul>
            <li>el : 指令所绑定的元素 , 可以直接操作 DOM</li>
            <li>binding : 指令相关的配置对象
                <ul>
                    <li>modifiers : 一个包含修饰符的对象 示例 v-drag.limit</li>
                    <li>name : 指令名 , 不包含前缀</li>
                    <li>value : 指令绑定的值 v-drag="true"</li>
                </ul>
            </li>
        </ul>
        <pre>
            // 拖拽方块案例
        Vue.directive('drag', {
            // 初始化样式
            bind(el) {
                el.style.position = 'absolute'
                el.style.top = 0
                el.style.left = 0
                el.style.width = '100px'
                el.style.height = '100px'
                el.style.background = 'skyblue'
                el.style.cursor = 'pointer'
            },
            // 元素对象存在后, 开始写拖动逻辑
            inserted(el, binding) {
                let draging = false
                let elLeft = 0
                let elRight = 0
                document.addEventListener('mousedown', function (e) {
                    draging = true
                    let move = el.getBoundingClientRect()
                    elLeft = e.clientX - move.left
                    elRight = e.clientY - move.top  
                })
                document.addEventListener('mousemove', function (e) {
                    let moveX = e.clientX - elLeft
                    let moveY = e.clientY - elRight
                    if (draging) {
                        el.style.left = moveX + 'px'
                        el.style.top = moveY + 'px'
                    }
                })
                document.addEventListener('mouseup', function () {
                    draging = false
                })
            }
        })

        </pre>
    </div>
    <div>
        <h5 id="addClass">增删class</h5>
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
    components:{
        location:()=>import('@/components/location/index')
    },
    data(){
        return {
            list:[
                {name:'权限指令',id:'direct'},
                {name:'拖拽指令',id:'lifetype'},
                {name:'增删class',id:'addClass'},
            ]
        }
    }
}
</script>

