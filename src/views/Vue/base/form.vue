<template>
    <div>
        <div>
            <h5>表单数据绑定</h5>
            <div>
                经常会用到表单进行数据的绑定，主要是对 input 框、 单选复选框、
                下拉框和文本框值的绑定和修改
            </div>
            <pre>
        &lt;form action="" method="post"&gt;
            &lt;!--用户名：&lt;input type="text" name="username" v-model="username"/&gt;--&gt;
            用户名：&lt;input type="text" name="username" v-bind:value="username" v-on:input="setUsername($event)"/&gt;
            密码：&lt;input type="password" name="psw" v-model="psw"/&gt;&lt;/br&gt;
            性别：男&lt;input type="radio" name="sex"  value="0" v-model="sex"/&gt;&lt;/br&gt;
            女&lt;input type="radio" name="sex"  value="1" v-model="sex"/&gt;&lt;/br&gt;
            爱好：吃鸡&lt;input type="checkbox" name="hobbies[]" value="chiji" v-model="hobbies" /&gt;&lt;/br&gt;
                    王者&lt;input type="checkbox" value="wangzhe" v-model="hobbies" /&gt;&lt;/br&gt;
                    电影&lt;input type="checkbox"  value="dianying" v-model="hobbies" /&gt;&lt;/br&gt;
                
                地区
            &lt;select name="area" v-model="area"&gt;
                &lt;option disabled="disabled" value=""&gt;请选择&lt;/option&gt;
                &lt;option  value="0"&gt;机场&lt;/option&gt;
                &lt;option  value="2"&gt;学校&lt;/option&gt;
                &lt;option  value="1"&gt;靶场&lt;/option&gt;
            &lt;/select&gt;		
        &lt;/form&gt;         

      
        methods:{
            setUsername($event){
                this.username=$event.target.value;
            }
        },
        data:{
            area:"",
            hobbies:[],
            value:"",
            sex:"",
            username:"",
            psw:""
        }
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"form"
}
</script>

