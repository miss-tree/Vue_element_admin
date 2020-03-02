<template>
    <div>
        <div>
            <h4>路由跳转</h4>
            <p>
                路由跳转的方式有很多种，下面分别介绍不同用法
            </p>
        </div>
        <div>
            <h5>router-link</h5>
            <p>这是一个vue默认标签取代html的 a 标签，还支持动态传路由方式</p>
            <pre>
        &lt;router-link to="/foo"&gt;Go to Foo&lt;/router-link&gt;
        &lt;router-link to="{name:"bar"}"&gt;Go to Bar&lt;/router-link&gt; 

        &lt;div v-for="(item,index) in arr" :key="index"&gt;
            &lt;router-link :to=item.path&gt;Go to Foo&lt;/router-link&gt;
        &lt;/div&gt;
        &lt;router-link :to="{name:'index',query:{id:'xxx',name:'xxx'}}"&gt;Go to XX&lt;/router-link&gt;

        &lt;router-link to="/foo/:username"&gt;Go to Foo&lt;/router-link&gt;        =>/user/evan
        &lt;router-link to="/bar/:username/post/:post_id"&gt;Go to Bar&lt;/router-link&gt; =>/user/evan/post/123

            </pre> 
        </div>
        <div>
            <h5>this.$router.push()</h5>
            <pre>
        this.$router.push('/home')        
        this.$router.push({path:'路径')};
        this.$router.push({name:'组件名')};

        this.$router.push({path:'index',query:{id:'123'});  => 带查询参数，变成/index?id=123
        this.$router.push({path:'xxx',params:{id:'123'});   =>不显示参数，类似 psot 传参
            </pre>
        </div>
        <div>
            <h5>this.$router.replace()</h5>
            <pre>
        用法同push ，history栈中不会有记录       
        this.$router.replace('/home')        
        this.$router.replace({path:'路径')};
        this.$router.replace({name:'组件名')};

        this.$router.replace({path:'index',query:{id:'123'});  => 带查询参数，变成/index?id=123
        this.$router.replace({path:'xxx',params:{id:'123'});   =>不显示参数，类似 psot 传参
            </pre>
        </div>
        <div>
            <h5>this.$router.go(n)
            <p>his.$router.go(n) this.$router.go(n) 向前或者向后跳转n个页面，n可为正整数或负整数</p>
            <ul>
                <li>this.$router.push 跳转到指定url路径，并想history栈中添加一个记录，点击后退会返回到上一个页面</li>
                <li>this.$router.replace 跳转到指定url路径，但是history栈中不会有记录，点击返回会跳转到上上个页面 (就是直接替换了当前页面)</li>
                <li>this.$router.go(n) 向前或者向后跳转n个页面，n可为正整数或负整数</li>
            </ul>
            </h5>
            <pre>
        用法同push        
        this.$router.replace('/home')        
        this.$router.replace({path:'路径')};
        this.$router.replace({name:'组件名')};

        this.$router.replace({path:'index',query:{id:'123'});  => 带查询参数，变成/index?id=123
        this.$router.replace({path:'xxx',params:{id:'123'});   =>不显示参数，类似 psot 传参
            </pre>
        </div>
        <div>
            <h4>获取参数</h4>
            <span class='G_red'>注意</span>
            <p>
                路由跳转是 $router，获取参数是 $route
            </p>
            <pre>
        this.$router.push({name:'home',params: {id:'1'}})
        =>取参  this.$route.params.id      

        this.$router.push({name:'home',query: {id:'1'}})
        =>取参  this.$route.query.id  
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"jump",
}
</script>

