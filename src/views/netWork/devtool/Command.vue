<template>
    <div>
        <location :list='list'/>
        <div>
            <h5 id="cmd">常用工具命令</h5>
            <ul>
                <li>Ctrl + Shift+I：打开调试工具</li>
                <li>Ctrl + Shift+p：打开调试工具菜单</li>
                <li>F2：编辑HTML</li>
                <li>Enter：修改类名、id、name</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div> 
        <div>
            <h5 id="cropper">截屏</h5>
            <div>
                进入command模式后输入Capture full size screenshot，
                点击确定就可以将截图保存了
            </div>
            <img src="../../../assets/netWork/comond.gif" alt="">
            <div>
                截取某个元素的图片命令：Screenshot Capture node screenshot
            </div>
        </div>
        <div>
            <h5 id="edit">编辑页面上的任何文本</h5>
            <div>
                console页面输入：document.body.contentEditable="true"
            </div>
            <div>
                或者输入：document.designMode = 'on'
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"example",
        components:{
            location:()=>import('@/components/location/index')
        },
        data(){
            return {
                list:[
                    {name:'常用工具命令',id:'cmd'},
                    {name:'截屏',id:'cropper'},
                    {name:'编辑页面上的任何文本',id:'edit'},
                ]
            }
        }
    }
</script>

