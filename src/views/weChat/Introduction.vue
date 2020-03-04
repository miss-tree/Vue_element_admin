<template>
    <div>
        <div>
            <h4>关于小程序</h4>
            <p>
                小程序是微信开发出来的一个不需要下载安装即可使用的应用，
                它实现了应用“触手可及”的梦想，用户扫一扫或搜一下即可打开应用。
                提供了许多功能应用，如果用第三方工具直接开发小程序的功能就用不了，
                还需要借助第三方工具才行，例如 ：mpvue；
            </p>
        </div>
        <div>
            <h5>注册账号</h5>
            <p>
                既然使用微信小程序就要按照规矩来，直接用邮箱注册就好了。
                记住好账号信息，小程序账号会有使用期限，若在规定时间内没登陆或者没有更新数据，
                会被小程序回收使用。账号名称也可能被人使用。
            </p>
            <div>
                AppID(小程序ID) wx0939bd7228422af2
            </div>
            <div>
                AppSecret(小程序密钥) a3ce8ba5e95e07c59e6b0785bb4a4aeb
            </div>
            <p>
                账号注册有什么不懂的可以看
                <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/getstart.html#%E7%94%B3%E8%AF%B7%E5%B8%90%E5%8F%B7" target="_blank">文档</a> 
                登录 小程序后台 ，我们可以在菜单 “开发”-“开发设置” 看到小程序的 AppID 了 。
            </p>
        </div>
        <div>
            <h5>开发项目</h5>
            <p>
                微信开发工具 <a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html" target="_blank">下载</a>。
                根据自己的电脑安装，安装好之后扫描登录，输入小程序APPID和安装地址，不要选择云开发！！！！选择正常快速开启就好了。
            </p>
            <p>
                完成上述步骤就可以愉快的开发了。
            </p>
        </div>
        <div>
            <h5>小程序项目结构</h5>
            <ul>
                <li>.json 后缀的 JSON 配置文件</li>
                <li>.wxml 后缀的 WXML 模板文件</li>
                <li>.wxss 后缀的 WXSS 样式文件</li>
                <li>.js 后缀的 JS 脚本逻辑文件</li>
            </ul>
            <b id=""><span>JSON 配置</span></b>
            <ul>
                <li>
                    小程序配置 app.json:
                    <div>
                        app.json 是当前小程序的全局配置，包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等。
                        更多配置请看
                        <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE" target="_blank">全局配置</a> 
                    </div>
                </li>
                <li>
                    工具配置 project.config.json
                    <div>
                        针对各自喜好做一些个性化配置，例如界面颜色、编译配置等等，
                        <a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html" target="_blank">配置详情设置</a>
                    </div>
                </li>
                <li>
                    页面配置 page.json
                    <div>
                        主要是根据进入不同页面设置不同样式或界面配置。
                        <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE" target="_blank">配置详情设置</a>
                    </div>
                </li>
                <li>
                    sitemap 配置 sitemap.json
                    <div>
                        当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。
                    </div>
                </li>
            </ul>
            <b id="wxml"><span>WXML 模板文件</span></b>
            <p>
                在小程序中也有同样的角色，其中 WXML 充当的就是类似 HTML 的角色。
                经常会用到的标签是 div, p, span，在小程序中就变成view, button, text 等等，
                其他的标签基本不变
                <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html" target="_blank">配置详情设置</a>
            </p>
            <b id="wxss"><span>WXSS 样式</span></b>
            <p>
                <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html" target="_blank">配置详情设置</a>
            </p>
            <b id="js"><span>JS 逻辑交互</span></b>
            <p>
                点击事件onClick写法变成bindtap
                <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html" target="_blank">事件详情设置</a>
            </p>
            <div>
                app.js相当于在Vue的main.js文件。其实小程序就是类似一个UI，介于UI和Vue框架之间。
                只是定义了一些用法不一样，其他都是相同的。
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Introduction",
}
</script>

