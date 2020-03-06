<template>
    <div>
        <div>
            <h4>微信登录</h4>
            <ul>
                <li>调用wx.login()获取临时登录凭证code,并回传到开发者服务器</li>
                <li>
                    调用code2Session 接口，换取用户唯一标识OpenID和
                    会话密钥 session_key. 在微信支付会用到这两个。
                </li>
            </ul>
        </div>
        <div>
            <h5>微信授权</h5>
            <ul>
                <li>
                    调用getSetting获取用户是否授权
                    若已经授权。则success函数authSetting属性会对
                    有对应属性(res.authSetting["scope.userInfo"])
                </li>
                <li>
                    如果没有授权，则调用相应接口
                    例如:wx.getUserInfo 获取用户信息 
                </li>
                <li>
                    低版本微信授权窗口，可以通过wx.authorize触发
                    基础库2.3.0开始，需要用户点击按钮触发
                    例子:&lt;button open-type='getUserInfo'&gt;获取授权&lt;/button&gt;
                </li>
            </ul>
            <span>微信授权主要用到以下接口</span>
            <ul>
                <li><span class="G_line_r">wx.openSetting</span> <span class="G_line_l">获取授权列表</span></li>
                <li><span class="G_line_r">wx.getSetting</span> <span class="G_line_l">查看授权情况</span></li>
                <li><span class="G_line_r">wx.chooseAddress</span> <span class="G_line_l">获取通讯地址</span></li>
                <li>
                    <a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/access-token/getAccessToken.html" target="_blank">
                        其他授权接口，具体查询 scope 列表
                    </a>
                </li>
            </ul>
            <pre>
        Page({
            ...
            getUserInfo: function() {
                wx.getUserInfo({
                success: function(e) {
                    console.log(e)
                }
                })
            },
            bindgetuserinfo: function (res) {
                let baseUrl = "https://nideshop2.bluej.cn/api/"
                console.log(res)
                let userInfo = res.detail;
                wx.login({
                success: function (result) {
                    console.log(result)
                    wx.request({
                    // 向后台发送code换取openid,session_key
                    // 使用后台提供的接口地址，前端存在跨域问题
                    url: baseUrl + 'auth/loginByWeixin',
                    method: "POST",
                    data: {
                        appId: "wxfa54ffbb933a4714",
                        secret: "062dee09b204a8f707b5df8270cc1259",
                        code: result.code,
                        userInfo: userInfo,
                        // grant_type: "authorization_code"
                    },
                    success: function (res) {
                        console.log(rest)
                        if (res.data.data.token) {
                        app.globaData.token = data.data.token;
                        app.globaData.userInfo = data.data.userInfo;
                        } else {
                        console.log("失败了")
                        }
                    }
                    })
                }
                })
            },
        })        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"chatLogin",
    data(){
        return{
        }
    }
}
</script>

