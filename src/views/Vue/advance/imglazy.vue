<template>
    <div>
        <div>
            <h5>v-imgLazy</h5>
            <p>
                图片懒加载和图片预加载的方法是不一样的，图片预加载也称为图片懒加载，
                但是定义是不一样的，它是通过预加载一张图片显示占位，在加载成功后替换图片。
                会一次性加载所有图片，没加载的还是现实预先设置好的图片显示，比较消耗性能。
                但是在网络不好的时候会比较好。而下面讲的图片懒加载是通过IntersectionObserver 对象方法实现。
                默认加载当前屏幕的的图片，通过下拉回滚添加新的图片。
                <router-link to="/vue/plugins">
                    首先请先理解什么是IntersectionObserver
                </router-link>
            </p>
            <pre>
        // 引入默认图片
        import baseImg from '@/assets/logo.png';
        let timer = null;
        // 创建一个监听器
        let observer = new IntersectionObserver((entries)=>{  
            // entries是所有被监听对象的集合  
            entries.forEach(entry =>{    
                if(entry.isIntersecting || entry.intersectionRatio>0){      
                    // 当被监听元素到临界值且未加载图片时触发。      
                    !entry.target.isLoaded  && showImage(entry.target,entry.target.data_src)    
                    }  
                })
            })
        function showImage(el,imgSrc){  
            const img = new Image();  
            img.src = imgSrc;  
            img.onload = ()=>{    
                el.src = imgSrc;    
                el.isLoaded = true;  
            }}
        export default {  
            // 这里用inserted和bind都行，因为IntersectionObserver时异步的，以防意外还是用inserted好一点  
            // inserted和bind的区别在于inserted时元素已经插入页面，能够直接获取到dom元素的位置信息。  
            inserted(el,binding,vnode) {    
                clearTimeout(timer)    
                // 初始化时展示默认图片    
                el.src = baseImg;    
                // 将需要加载的图片地址绑定在dom上    
                el.data_src = binding.value;    
                observer.observe(el)    
                // 防抖，这里在组件卸载的时候停止监听    
                const vm = vnode.context;    
                timer = setTimeout(() => {      
                    vm.$on('hook:beforeDestroy', () => {        
                        observer.disconnect();     
                    })    
                }, 20);  
            },  
            // 图片更新触发  
            update(el,binding){    
                el.isLoaded = false;    
                el.data_src = binding.value;  
            },  
            // unbind不太好，会执行多次，改进一下用组件的beforeDestroy卸载  
            // unbind(){  //   // 停止监听  //   observer.disconnect();  
            // }
        }        
            </pre>
            <pre>
        main.js
        import imgLazy from '@/directive/imgLazy.js'
        Vue.directive('imgLazy', imgLazy)        

        组件使用
        &lt;div v-for="(item,index) in imgSrc" :key="index" &gt;     
            &lt;img v-imgLazy="item" /&gt;   
        &lt;/div&gt; 
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"imgLazy",
}
</script>

