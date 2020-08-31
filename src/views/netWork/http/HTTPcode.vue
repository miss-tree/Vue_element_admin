<template>
    <div>
        <div class="G_local">
            <span @click="goAnchor('#request')">请求方式</span>
            <span @click="Tocontone('#code')">常见状态码</span>
            <span @click="goAnchor('#localstorage')">缓存机制</span>
            <span @click="goAnchor('#Cache')">Cache-Control指令</span>
            <span @click="goAnchor('#respond')">缓存响应指令</span>
            <span @click="goAnchor('#1st')">首部字段</span>
            <span @click="goAnchor('#req1s')">请求首部字段</span>
            <span @click="goAnchor('#reqww')">响应首部字段</span>
            <span @click="goAnchor('#ssss')">实体首部字段</span>
            <span @click="goAnchor('#hhxx')">缓存响应指令</span>
        </div>
        <back-top/>
        <div>
            <h4>HTTPcode</h4>
            <div class="G_img">
                <img src="@/assets/netWork/netcp03.jpg">
                <img src="@/assets/netWork/netcp04.jpg">
            </div>
            <p >
                 下面是在前端实际开发中常遇的字段，熟悉字段有利于项目的开发，感谢掘金作者
                <a href="https://juejin.im/post/5e198194e51d451c88361977#heading-13" target='_blank'>
                    蓝布偶
                </a>技术分享
            </p>
        </div>
        <div>
            <h5 id="request">请求方式</h5>
            <div class="G_table">
                <div class="G_table_th">
                    <span class="G_table_title">请求方式</span>
                    <span class="G_table_describle">描述</span>
                </div>
                <div class="G_table_tr" v-for="(el,index) in reqList" :key="index">
                    <span class="G_table_title">{{el.title}}</span>
                    <span class="G_table_describle">{{el.explain}}</span>
                </div>
            </div>    
        </div>
        <div>
            <h5 id="code">常见状态码</h5>
            <div class="G_table">
                <div class="G_table_th">
                    <span class="G_table_title">状 态 码</span>
                    <span class="G_table_describle">描述</span>
                </div>
                <div class="G_table_tr" v-for="(el,index) in stateList" :key="index">
                    <span class="G_table_title">{{el.title}}</span>
                    <span class="G_table_describle">{{el.explain}}</span>
                </div>
            </div> 
        </div>
        <div>
            <h5 id="localstorage">缓存机制</h5>
            <h6>图解 HTTP 缓存</h6>
            <img src="../img/Cache-Control.jpg" alt="" style="width:1100px;height:700px;">
            <img src="@/assets/netWork/netcp05.jpg" alt="">
            <p>
                强缓存:在缓存有效期内，客户端直接读取本地资源。强缓存返回的状态码是 200
            </p>
            <p>
                协商缓存：关键在于协商，在使用本地缓存之前，需要先跟服务器做个对比，
                服务器告知你的资源可用，是最新的，那就可以直接取本地资源，
                反之，服务器返回最新的资源给客户端，客户端收到后更新本地资源。
                若本地资源是最新的，那么返回 304 （考点!）
                若比对后，需要从服务器获取最新资源，那就是正常的 200
            </p>
        </div>
        <div>
            <h5 id="Cache">Cache-Control指令</h5>
            <img src="@/assets/netWork/netcp06.jpg" alt="">
        </div>
        <div>
            <h5 id="respond">缓存响应指令</h5>
            <img src="@/assets/netWork/netcp07.jpg" alt="">
        </div>
        <div>
            <h5 id="1st">首部字段</h5>
            <div class="G_table">
                <div class="G_table_th">
                    <span class="G_table_title">首部字段名</span>
                    <span class="G_table_describle">说明</span>
                </div>
                <div class="G_table_tr" v-for="(el,index) in strList" :key="index">
                    <span class="G_table_title">{{el.title}}</span>
                    <span class="G_table_describle">{{el.explain}}</span>
                </div>
            </div> 
        </div>
        <div>
            <h5 id="req1s">请求首部字段</h5>
            <div class="G_table">
                <div class="G_table_th">
                    <span class="G_table_title">首部字段名</span>
                    <span class="G_table_describle">说明</span>
                </div>
                <div class="G_table_tr" v-for="(el,index) in numList" :key="index">
                    <span class="G_table_title">{{el.title}}</span>
                    <span class="G_table_describle">{{el.explain}}</span>
                </div>
            </div> 
        </div>
        <div>
            <h5 id="reqww">响应首部字段</h5>
            <div class="G_table">
                <div class="G_table_th">
                    <span class="G_table_title">首部字段名</span>
                    <span class="G_table_describle">说明</span>
                </div>
                <div class="G_table_tr" v-for="(el,index) in boonList" :key="index">
                    <span class="G_table_title">{{el.title}}</span>
                    <span class="G_table_describle">{{el.explain}}</span>
                </div>
            </div> 
        </div>
        <div>
            <h5 id="ssss">实体首部字段</h5>
            <div class="G_table">
                <div class="G_table_th">
                    <span class="G_table_title">首部字段名</span>
                    <span class="G_table_describle">说明</span>
                </div>
                <div class="G_table_tr" v-for="(el,index) in ggList" :key="index">
                    <span class="G_table_title">{{el.title}}</span>
                    <span class="G_table_describle">{{el.explain}}</span>
                </div>
            </div> 
        </div>
        <div>
            <h5 id="hhxx">缓存响应指令</h5>
            <img src="@/assets/netWork/netcp08.jpg" alt="">
        </div>
        <div>
            <dialog ref="dialog">
                <h2>Dialog Title</h2>
                <p>Dialog content and other stuff will go here</p>
            </dialog>
        </div>
    </div>
</template>

<script>
export default {
    name:"HTTPcode",
    components:{
        backTop:()=>import('@/components/BackToTop/index')
    },
    data(){
        return{
            reqList:[
                {title:'GET',explain:'GET方法请求一个指定资源的表示形式. 使用GET的请求应该只被用于获取数据.'},
                {title:'HEAD',explain:'HEAD方法请求一个与GET请求的响应相同的响应，但没有响应体（报文主体）,用于确认URI的有效性及资源更新的日期时间等.'},
                {title:'POST',explain:'	POST方法用于将实体提交到指定的资源，通常导致在服务器上的状态变化或副作用.'},
                {title:'PUT',explain:'PUT方法用请求有效载荷替换目标资源的所有当前表示, 由于PUT自身不带验证机制，存在安全问题，一般不用，若配合web程序的验证制或架构设计采用REST标准的同类web网站，可能会开放PUT方法'},
                {title:'DELETE',explain:'DELETE方法删除指定的资源，一般不用，原因PUT'},
                {title:'CONNECT',explain:'CONNECT方法建立一个到由目标资源标识的服务器的隧道.'},
                {title:'OPTIONS',explain:'查询针对指定请求URI指定的资源支持的方法'},
                {title:'TRACE',explain:'TRACE方法配合Max-forwords沿着到目标资源的路径执行一个消息环回测试，不常用（容易跨站追踪攻击）'},
                {title:'LINK',explain:'	建立和资源之间的联系(HTTP/1.1已弃用)'},
                {title:'UNLINK',explain:'断开连接关系(HTTP/1.1已弃用)'},
                {title:'GET',explain:'GET方法请求一个指定资源的表示形式'},
            ],
            stateList:[
                {title:'1xx',explain:'Informational(信息性状状态码)，接受的请求正在处理'},
                {title:'2xx',explain:'Success(成功状态码)，请求正常处理完毕'},
                {title:'200',explain:'OK:请求正常处理完毕，注意HEAD请求方法不返回报文主体'},
                {title:'204',explain:'NO CONTENT:成功处理但是返回响应不含任何实体的主体；当然也不允许返回任何实体的主体，一般用于不需要对客户端返回新内容对情况'},
                {title:'206',explain:'Partial Content:客户端进行了范围请求，而服务器成功执行了这部分GET请求，响应报文中包含由Content-Range指定范围的实体内容'},
                {title:'3xx',explain:'重定向'},
                {title:'301',explain:'Moved Permanently:永久性重定向，请求的资源已经被分配新的URI,以后应使用该URI'},
                {title:'302',explain:'Found:临时性重定向，请求的资源已经被分配新的URI,希望本次应使用该URI'},
                {title:'303',explain:'See Other:对应当前请求的响应可以在另一个 URI 上被找到，而且客户端应当采用 GET 的方式访问那个资源。与302区别是如果POST方式希望用户能使用GET重定向，303状态码更加合适，虽然功能上是一样的'},
                {title:'304',explain:'Not Modified:客户端发送带有条件的请求时，服务器允许请求访问资源，但是因发生请求未满条件的情况（即可直接shying客户端未过期缓存）'},
                {title:'307',explain:'Temporary Redirect:临时性重定向，与302含义相同，尽管302标准禁止POST改为GET，但是实际大家并不遵守，307会遵守标准不会POST改为GET，但是对于处理响应的行为，每种浏览器可能不一样'},
                {title:'4xx',explain:'客户端错误'},
                {title:'400',explain:'Bad Request：请求报文中存在语法错误'},
                {title:'401',explain:'Unauthorized：当前请求需要用户验证，弹出认证用的对话窗口；若之前已经请求过一次，则表示用户认证失败，该响应必须包含一个适用于请求资源的 WWW-Authenticate 信息头用以询问用户信息'},
                {title:'403',explain:'Forbidden：服务器已经理解请求，但是拒绝执行它'},
                {title:'404',explain:'Not Found：请求失败，请求所希望得到的资源未被在服务器上发现.也可用于当服务器不想揭示到底为何请求被拒绝或者没有其他适合的响应用的情况'},
                {title:'405',explain:'Method Not Allowed：请求行中指定的请求方法不能被用于请求相应的资源。该响应必须返回一个Allow 头信息用以表示出当前资源能够受的请求方法的列表'},
                {title:'5xx',explain:'服务器错误'},
                {title:'502',explain:'Bad Gateway：此错误响应表明服务器作为网关需要得到一个处理这个请求的响应，但是得到一个错误的响应。'},
                {title:'503',explain:'Service Unavailable：服务器没有准备好处理请求。 常见原因是服务器因维护或超负载而停机'},
                {title:'504',explain:'Gateway Timeout：当服务器作为网关，不能及时得到响应时返回此错误代码'},
            ],
            strList:[
                {title:'Cache-Control',explain:'控制缓存的行为'},
                {title:'Connection',explain:'逐跳首部、连接的管理'},
                {title:'Date',explain:'创建报文的日期时间'},
                {title:'Pragma',explain:'报文指令'},
                {title:'Trailer',explain:'报文末端的首部一览'},
                {title:'Transfer-Encoding',explain:'指定报文主体的传输编码方式'},
                {title:'Upgrade',explain:'升级为其他协议'},
                {title:'Via',explain:'代理服务器的相关信息'},
                {title:'Warning',explain:'错误通知'},
            ],
            numList:[
                {title:'Accept',explain:'用户代理可处理的媒体类型'},
                {title:'Accept-Charset',explain:'优先的字符集'},
                {title:'Accept-Encoding',explain:'优先的内容编码'},
                {title:'Accept-Language',explain:'优先的语言（自然语言）'},
                {title:'Authorization',explain:'Web认证信息'},
                {title:'Expect',explain:'期待服务器的特定行为'},
                {title:'From',explain:'用户的电子邮箱地址'},
                {title:'Host',explain:'请求资源所在服务器'},
                {title:'If-Match',explain:'比较实体标记（ETag）'},
                {title:'If-Modified-Since',explain:'比较资源的更新时间'},
                {title:'If-None-Match',explain:'比较实体标记（与 If-Match 相反）'},
                {title:'If-Range',explain:'资源未更新时发送实体 Byte 的范围请求'},
                {title:'If-Unmodified-Since',explain:'比较资源的更新时间（与If-Modified-Since相反）'},
                {title:'Max-Forwards',explain:'最大传输逐跳数'},
                {title:'Proxy-Authorization',explain:'代理服务器要求客户端的认证信息'},
                {title:'Range',explain:'实体的字节范围请求'},
                {title:'Referer',explain:'对请求中 URI 的原始获取方'},
                {title:'TE',explain:'传输编码的优先级'},
                {title:'User-Agent',explain:'HTTP 客户端程序的信息'},
            ],
            boonList:[
                {title:'Accept-Ranges',explain:'是否接受字节范围请求'},
                {title:'Age',explain:'推算资源创建经过时间'},
                {title:'ETag',explain:'资源的匹配信息'},
                {title:'Location',explain:'令客户端重定向至指定URI'},
                {title:'Proxy-Authenticate',explain:'代理服务器对客户端的认证信息'},
                {title:'Retry-After',explain:'对再次发起请求的时机要求'},
                {title:'Server',explain:'HTTP服务器的安装信息'},
                {title:'Vary',explain:'代理服务器缓存的管理信息'},
                {title:'WWW-Authenticate',explain:'服务器对客户端的认证信息'},
            ],
            ggList:[
                {title:'Allow',explain:'资源可支持的HTTP方法'},
                {title:'Content-Encoding',explain:'实体主体适用的编码方式'},
                {title:'Content-Language',explain:'实体主体的自然语言'},
                {title:'Content-Length',explain:'实体主体的大小（单位：字节）'},
                {title:'Content-Location',explain:'替代对应资源的URI'},
                {title:'Content-MD5',explain:'实体主体的报文摘要'},
                {title:'Content-Range',explain:'实体主体的位置范围'},
                {title:'Content-Type',explain:'实体主体的媒体类型'},
                {title:'Expires',explain:'实体主体过期的日期时间'},
                {title:'Last-Modified',explain:'资源的最后修改日期时间'},
            ],
        }
    },
    methods: {
        openDialog(){
            console.log('dialog');
            this.$refs.dialog.show()
        },
        Tocontone(id){
            document.querySelector(id).scrollIntoView(true);
        },
        goAnchor(selector) {
            // console.log(typeof selector ,selector)
            var anchor = this.$el.querySelector(selector) // 参数为要跳转到的元素id
            // console.log(typeof anchor ,anchor)
            document.body.scrollTop = anchor.offsetTop; // chrome
            document.documentElement.scrollTop = anchor.offsetTop; // firefox
        }
    }
}
</script>

