<template>
    <div>
        <location :list='list'/>
        <div>
            <h4>npm|yarn</h4>
            <p>
                两个都是安装项目依赖包的安装工具，区别在于用windows系统的基本都用npm，
                ios系统的安装yarn。Yarn会在每个安装包被执行前校验其完整性。正式版的 yarn 比较与 npm 更高效
                也不是说windows不能安装yard，各有各的优势。
            </p>
        </div>
        <div>
            <h5 id="axios">常用命令对比</h5>
            <div class="table">
                <div class="row">
                    <div class="title">安装命令</div>
                    <div class="title">Npm</div>
                    <div class="title">Yarn</div>
                </div>
                <div class="row"
                    v-for="el in order" :key="el.handler">
                    <div>{{el.handler}}</div>
                    <div>{{el.npm}}</div>
                    <div>{{el.yarn}}</div>
                </div>
            </div>
        </div>
        <div>
            <h5 id="trends">更新依赖</h5>
            <pre>
        先检查更新
        npm outdated

        我们需要先更新 package.json文件：
        安装"npm-check-updates"模块
        npm install -g npm-check-updates

        检查可更新的模块
        ncu   npm-check-updates

        更新package.json的依赖包到最新版本
        ncu -u

        更新某个依赖
         npm update xxx

        查看电脑全局安装的包
        npm list -g --depth 0
            </pre>
        </div>
        <div>
            <h5 id="modules">快速删除node_modules</h5>
            <pre>
        第一种方法:（最方便，删除速度超快）
          cnpm install rimraf -g
          rimraf node_modules
        
       第二种方法: 
          rmdir /s/q your_app_dir
          /s 是代表删除所有子目录跟其中的档案。 
          /q 是不要它在删除档案或目录时，不再问我 Yes or No 的动作。 
          
       第三种方法:
          rm -f /node_modules
        
       第四种方法:
          cnpm install -g dlf 
          dlf  C:\Users\92809\Desktop\12
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"aboutNpm",
    components:{
        location:()=>import('@/components/location/index')
    },
    data(){
        return{
            list:[
                {name:'常用命令对比',id:'axios'},
                {name:'更新依赖',id:'trends'},
                {name:'快速删除node_modules',id:'modules'},
            ],
            order:[
                {handler:'安装依赖',npm:'npm i XX | npm install XX',yarn:'yarn add XX'},
                {handler:'安装指定版本',npm:'npm install xxx@1.2.0',yarn:' '},
                {handler:'创建package',npm:'npm init',yarn:'yarn init'},
                {handler:'安装package所有依赖',npm:'npm i ',yarn:'yarn install'},
                {handler:'强制重新下载',npm:'npm install --force',yarn:'yarn install --force'},
                {handler:'安装全局依赖',npm:'npm install xxx -g',yarn:'yarn global add <packageName>'},
                {handler:'安装生产依赖',npm:'npm i XX --save | npm i XX -S',yarn:''},
                {handler:'安装开发依赖',npm:'npm i XX –save-dev | npm i XX –D',yarn:''},
                {handler:'删除依赖',npm:'npm uninstall XX | npm uninstall XX -g',yarn:'yarn remove XX'},
                {handler:'删除package依赖',npm:'npm uninstall XX --save | npm uninstall XX -D',yarn:''},
                {handler:'显示某个包信息',npm:'npm info webpack',yarn:'yarn info webpack'},
                {handler:'显示某个包信息输出 json 格式',npm:'npm info webpack --json',yarn:'yarn info webpack --json'},
                {handler:'显示某个包信息输出 README 部分',npm:'npm info webpack readme ',yarn:'yarn info webpack readme '},
                {handler:'列出项目的所有依赖',npm:'npm list',yarn:'yarn list'},
                // {handler:'安装全局依赖',npm:'npm install xxx -g',yarn:'yarn global add <packageName>'},
                // {handler:'安装全局依赖',npm:'npm install xxx -g',yarn:'yarn global add <packageName>'},
                // {handler:'安装全局依赖',npm:'npm install xxx -g',yarn:'yarn global add <packageName>'},
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
.table{
    border: 1px solid #ccc;
    width: 100%;
    .row{
        width: 100%;
        display: grid;
        grid-template-columns:30% 40% 40%;
        div{
            padding: 5px 10px;
            text-align: center;
        }
        div:nth-child(2),div:nth-child(3){
            text-align: left;
            padding-left: 15px;
        }
        div~div{
            border-left: 1px solid #ccc;
        }
        .title{
            text-align: center !important;
            background: #eef1f6;
            color: #222;
            font-weight: bold;
        }
    }
    .row~.row{
        border-top: 1px solid #ccc;
    }
}
</style>
