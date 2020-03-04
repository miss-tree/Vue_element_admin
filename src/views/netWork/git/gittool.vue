<template>
    <div>
        <div>
            <h4>可视化工具使用</h4>
            <p>
                <a href="https://desktop.github.com/ " target="_blank">官网下载</a> 
                GitHubDesktopSetup.exe文件安装git桌面工具，安装按照自己电脑安装就好了。
            </p>

        </div>
        <div>
            <h5>创建项目</h5>
            <div class="G_img">
                 <img src="@/assets/git05.jpg" alt="">   
                 <img src="@/assets/git06.jpg" alt="">  
                 <img src="@/assets/git07.jpg" alt="">  
            </div>
        </div>
        <div>
            <h5>fork他人项目</h5>
            <p>
                在他人项目上点击fork，就可以将他人的项目克隆到自己git上。
                在可视化工具上的操作就是：点击file=>选择Clone a respository => 
                在 GitHub.com 上输入fork的项目名称点击刷新选择项目，然后选择安装地址。
                或者在 URL 输入克隆的地址，选择安装地址。就可以进行任意的开发和学习。
            </p>
            <div>
                若在做了一些创造性开发之后，你可以向原作者提交合并的申请
            </div>
            <div class="G_img">
                 <img src="@/assets/git09.jpg" alt="">   
                 <img src="@/assets/git10.jpg" alt="">  
            </div>
            <div>
                原作者就会收到一个合并请求，他可以通过审核你的提交，来决定需不需要合并。
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"gitTool",
}
</script>

