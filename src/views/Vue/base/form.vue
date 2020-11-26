<template>
    <div>
        <div>
            <h5>数据重置</h5>
            <p>
                有时候表单或者数据重置需要获取到最初始的数据，
                vue这方面有重置数据的方法。
            </p>
            <pre>
        vue中：
        this.$data 获取当前状态下的data
        this.$options.data() 获取该组件初始状态下的data

        所以，下面就可以将初始状态的data复制到当前状态的data，实现重置效果：
        Object.assign(this.$data, this.$options.data())

        当然，如果你只想重置data中的某一个对象或者属性：
        this.form = this.$options.data().form
            </pre>
        </div>
        <div>
          <h5>数值设置</h5>
          <p>
            在设置数据的时候有时候会出现数据不响应，要用到this.$set(dataVal,'attr',val)方法，
            this.$set()是vue3的方法，使用proxy方法劫持代理数据响应，取消了原来的Object.defindproterty()
            方法，
          </p>
          <pre>
      //设置data里的form里的一个name属性
      this.$set(this.form,'name','hello')

      //删除属性
      this.$delete(this.form,'age')
          </pre>
        </div>
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
