<template>
    <div>
        <div>
            <h4>组件传值</h4>
            <p>
                WePY传值的方式有很多种：props、$emit、$broadcast、$invoke；
                前面两个和原来vue的方法基本一样。就简单讲述后面两个
            </p>
        </div>
        <div>
            <h5>$broadcast</h5>
            <p>
                $broadcast 事件是由父组件发起，
                所有子组件都会收到此广播事件，除非事件被手动取消。
                传递顺序为 父=>子(轮询完所有子组件)=>孙(轮询完所有孙组件)。
            </p>
            <h5>$invoke</h5>
            <p>
                $invoke是一个页面或组件对另一个组件中的方法的直接调用，通过传入组件路径找到相应的组件，然后再调用其方法。
                $invoke('组件名', 'someMethod', '方法');
            </p>
            <pre>
        比如，想在父组件中调用组件ComA的某个方法：
        this.$invoke('ComA', 'someMethod', 'someArgs');

        如果想在组件ComA中调用组件ComG(可能不与ComA同级，也可能是同级的孙级)的某个方法：
        this.$invoke('./../ComB/ComG', 'someMethod', 'someArgs');        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"WePYpass",
    data(){
        return{
            list:[
                {name:"npm install wepy-cli -g",explain:"全局安装或更新WePY命令行工具"},
                {name:"wepy init standard myproject",explain:"生成Demo开发项目"},
                {name:"wepy list",explain:"查看项目模板"},
                {name:"npm  install",explain:"安装依赖"},
                {name:"wepy build --watch",explain:"开启实时编译"},
            ]
        }
    }
}
</script>

