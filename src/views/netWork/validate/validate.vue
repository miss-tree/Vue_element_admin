<template>
    <div>
        <location :list='list'/>
        <div>
            <h4>validate</h4>
            <p>
                在用element-ui表单的时候经常会用到验证函数，判断输入的值是否符合规则。
                常用的验证规则有以下方法:
            </p>
            <pre v-pre>
        &lt;el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"&gt;
            &lt;el-form-item label="密码" prop="pass"&gt;
                &lt;el-input type="password" v-model="ruleForm.pass" autocomplete="off"&gt;&lt;/el-input&gt;
            &lt;/el-form-item&gt;
            ……
        &lt;/el-form&gt;          

        data(){
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请输入密码'));
                } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
                }
            };
            rules:{
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
            }
        }        
            </pre>
        </div>
        <div>
            <h5 id="axios">验证时请求</h5>
            <pre>
        在验证过程中请求数据库数据是否符合要求，以创建用户时为例:

        let validateName=(rule,value,callback)=>{
            let name=this.role.name
            this.$http({
                url:url,
                methods:'get',
                data:name
            }).then((res)=>{
                if(res.result){
                    callback(new Error('角色名称重复，请重新输入'))
                }else{
                    callback()
                }
            })
            callback()
        }        
            </pre>
        </div>
        <div>
            <h5 id="trends">动态验证</h5>
            <p>
                在一些提交表格中，经常会有一些动态添加的条件。
                不能直接在验证的条件传个prop="condition",然后再data()函数定义规则，
                需要做一些如下改变：
            </p>
            <pre>
        &lt;el-form ref="form" :rules="validates" :model="form" label-width="80px"&gt; 
            &lt;el-form-item label="活动名称" v-for=""(el,index) in conditons&gt; 
                &lt;el-input v-model="el.name"
                :prop="'conditons'+index+'.name'"
                :rules="validates.name"
                &gt; &lt;/el-input&gt; 
            &lt;/el-form-item&gt; 
            ……
        &lt;/el-form&gt; 

        data(){
            isAllSpace(s){
                return s.toString().replace(/\s*/g,'')===''
            }
            notAllSpace(){
                let validObj=(rule,value,callback)=>{
                    if(value&&isAllSpace(value)){
                        callback(new Error('输入值不能为空'))
                    }else{
                        callback()
                    }
                }
            }
            return{
                validates:{
                    name:[
                        { require:true, message:'请选择活动名称',trigger:'blur'},
                        { validate:notAllSpace(),trigger:'blur'}
                    ]
                }
            }
        }      
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"aboutValidate",
    components:{
        location:()=>import('@/components/location/index')
    },
    data(){
        return{
            list:[
                {name:'验证时请求',id:'axios'},
                {name:'动态验证',id:'trends'},
            ]
        }
    },
}
</script>

