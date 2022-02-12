<template>
  <div class="">
    <location :list='list' />
    <div>
      <h4>Axios</h4>
      <p>
        Axios是全网最受欢迎的request请求库，已经达到了将近80k的欢迎程度。
        <a href="http://axios-js.com/docs/" target="_blank">中文文档</a>
      </p>
    </div>
    <div>
      <h4 id="interceptors">拦截器</h4>
      <p>
        Axios 是一个基于 Promise 的 HTTP 客户端，而 HTTP 协议是基于请求和响应，
        Axios 提供了请求拦截器和响应拦截器来分别处理请求和响应。
      </p>
      <img src="../images/request.jpg" alt="this is a request.img">
      <ul>
        <li>请求拦截器：在请求发送前统一执行某些操作，比如在请求头中添加 token 字段</li>
        <li>响应拦截器：在接收到服务器响应后统一执行某些操作，比如发现响应状态码为 401 时，自动跳转到登录页</li>
      </ul>
      <pre v-pre>
    const service = axios.create({
        baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
        timeout: 5000 // request timeout,
        headers:{
           'Content-Type':'application/x-www-form-urlencoded'
        }
    })
    // 添加
    service.defaults.headers.common['Authorization'] = AUTH_TOKEN;

    // request interceptor
    service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['X-Token'] = getToken()
        }
        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    })

    // response interceptor
    service.interceptors.response.use(
    response => {
        const res = response.data
        console.log(res)
        if (res.code !== 20000) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {//自定义一些失效的请求 tooken:401
                MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
                confirmButtonText: 'Re-Login',
                cancelButtonText: 'Cancel',
                type: 'warning'
                }).then(() => {
                    store.dispatch('user/resetToken').then(() => {
                        location.reload()
                    })
                })
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
        return res
        }
    },
    error => {
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
    )      
        </pre>
    </div>
    <div>
      <h4 id="config">请求配置</h4>
      <p>在 service.get(config) 调用时 config 设置的参数</p>
      <pre v-pre>
    {
    // `url` 是用于请求的服务器 URL
        url: '/user',

    // `method` 是创建请求时使用的方法
        method: 'get', // default

    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
        baseURL: 'https://some-domain.com/api/',

    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
        transformRequest: [function (data, headers) {
            // 对 data 进行任意转换处理
            return data;
        }],

    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
        transformResponse: [function (data) {
            // 对 data 进行任意转换处理
            return data;
        }],

    // `headers` 是即将被发送的自定义请求头
        headers: {'X-Requested-With': 'XMLHttpRequest'},

    // `params` 是即将与请求一起发送的 URL 参数
    // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
        params: {
            ID: 12345
        },

    // `paramsSerializer` 是一个负责 `params` 序列化的函数
    // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
        paramsSerializer: function(params) {
            return Qs.stringify(params, {arrayFormat: 'brackets'})
        },

    // `data` 是作为请求主体被发送的数据
    // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
    // 在没有设置 `transformRequest` 时，必须是以下类型之一：
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - 浏览器专属：FormData, File, Blob
    // - Node 专属： Stream
        data: {
            firstName: 'Fred'
        },

    // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
    // 如果请求话费了超过 `timeout` 的时间，请求将被中断 ，会覆盖实例化创建时的数据
        timeout: 1000,

    // `withCredentials` 表示跨域请求时是否需要使用凭证
        withCredentials: false, // default

    // `adapter` 允许自定义处理请求，以使测试更轻松
    // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
        adapter: function (config) {
            /* ... */
        },

    // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
    // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
        auth: {
            username: 'janedoe',
            password: 's00pers3cret'
        },

    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
        responseType: 'json', // default

    // `responseEncoding` indicates encoding to use for decoding responses
    // Note: Ignored for `responseType` of 'stream' or client-side requests
        responseEncoding: 'utf8', // default

    // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
        xsrfCookieName: 'XSRF-TOKEN', // default

    // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
        xsrfHeaderName: 'X-XSRF-TOKEN', // default

    // `onUploadProgress` 允许为上传处理进度事件
        onUploadProgress: function (progressEvent) {
            // Do whatever you want with the native progress event
        },

    // `onDownloadProgress` 允许为下载处理进度事件
        onDownloadProgress: function (progressEvent) {
            // 对原生进度事件的处理
        },

    // `maxContentLength` 定义允许的响应内容的最大尺寸
        maxContentLength: 2000,

    // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
        validateStatus: function (status) {
            return status >= 200 && status &lt; 300; // default
        },

    // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
    // 如果设置为0，将不会 follow 任何重定向
        maxRedirects: 5, // default

    // `socketPath` defines a UNIX Socket to be used in node.js.
    // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
    // Only either `socketPath` or `proxy` can be specified.
    // If both are specified, `socketPath` is used.
        socketPath: null, // default

    // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
    // `keepAlive` 默认没有启用
        httpAgent: new http.Agent({ keepAlive: true }),
        httpsAgent: new https.Agent({ keepAlive: true }),

    // 'proxy' 定义代理服务器的主机名称和端口
    // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
    // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
        proxy: {
            host: '127.0.0.1',
            port: 9000,
            auth: {
            username: 'mikeymike',
            password: 'rapunz3l'
            }
        },

    // `cancelToken` 指定用于取消请求的 cancel token
    // （查看后面的 Cancellation 这节了解更多）
        cancelToken: new CancelToken(function (cancel) { })
    }        
        </pre>
    </div>
    <div>
      <h4 id="response">响应配置</h4>
      <p>在请求回来的数据处理：</p>
      <pre>
    {
    // `data` 由服务器提供的响应
        data: {},

    // `status` 来自服务器响应的 HTTP 状态码
        status: 200,

    // `statusText` 来自服务器响应的 HTTP 状态信息
        statusText: 'OK',

    // `headers` 服务器响应的头
        headers: {},

    // `config` 是为请求提供的配置信息
        config: {},
    // 'request'
    // `request` is the request that generated this response
    // It is the last ClientRequest instance in node.js (in redirects)
    // and an XMLHttpRequest instance the browser
        request: {}
    }      
      </pre>
    </div>
    <div>
      <h4 id="dispatchRequest">适配器</h4>
      <p>
        Axios 同时支持浏览器和 Node.js 环境，对于浏览器环境来说，
        我们可以通过 XMLHttpRequest 或 fetch API 来发送 HTTP 请求，
        而对于 Node.js 环境来说，我们可以通过 Node.js 内置的 http 或 https 模块来发送 HTTP 请求。
        为了支持不同的环境，Axios 引入了适配器。
        在 HTTP 拦截器设计部分，我们看到了一个 dispatchRequest 方法。
      </p>
      <pre>
    // lib/core/dispatchRequest.js
    module.exports = function dispatchRequest(config) {
    // 省略部分代码
    var adapter = config.adapter || defaults.adapter;
    
    return adapter(config).then(function onAdapterResolution(response) {
        // 省略部分代码
        return response;
    }, function onAdapterRejection(reason) {
        // 省略部分代码
        return Promise.reject(reason);
    });
    };

    // 自定义适配器插件 axios-mock-adapter
    var axios = require("axios");
    var MockAdapter = require("axios-mock-adapter");

    // 在默认的Axios实例上设置mock适配器
    var mock = new MockAdapter(axios);

    // 模拟 GET /users 请求
    mock.onGet("/users").reply(200, {
    users: [{ id: 1, name: "John Smith" }],
    });

    axios.get("/users").then(function (response) {
    console.log(response.data);
    });
    
        </pre>
    </div>
    <div>
      <h4 id="csrf">CSRF 防御</h4>
      <ul>
        <li>
          检查 Referer 字段:HTTP 头中有一个 Referer 字段，这个字段用以标明请求来源于哪个地址。
          在处理敏感数据请求时，通常来说，Referer 字段应和请求的地址位于同一域名下。</li>
        <li>
          同步表单 CSRF 校验:在返回页面时将 token 渲染到页面上，
          在 form 表单提交的时候通过隐藏域或者作为查询参数把 CSRF token 提交到服务器
        </li>
        <li>双重 Cookie 防御:将 token 设置在 Cookie 中，在提交（POST、PUT、PATCH、DELETE）等请求时提交 Cookie，
          并通过请求头或请求体带上 Cookie 中已设置的 token，服务端接收到请求后，再进行对比校验。</li>
      </ul>
      <div>同步表单 CSRF 校验:</div>
      <pre v-pre>
    &lt;form method="POST" action="/upload?_csrf={{由服务端生成}}" enctype="multipart/form-data"&gt;
        用户名: &lt;input name="name" /&gt;
        &lt;button type="submit"&gt;提交&lt;/button&gt;
    &lt;/form>
        </pre>
      <div>内部代码防御：</div>
      <pre v-pre>
    // lib/defaults.js
    var defaults = {
        adapter: getDefaultAdapter(),

        // 省略部分代码
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
    };

    // lib/adapters/xhr.js
    module.exports = function xhrAdapter(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
            var requestHeaders = config.headers;
            
            var request = new XMLHttpRequest();
            // 省略部分代码
            
            // 添加xsrf头部
            if (utils.isStandardBrowserEnv()) {
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
                cookies.read(config.xsrfCookieName) :
                undefined;

            if (xsrfValue) {
                requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
            }

            request.send(requestData);
        });
    };

        
        </pre>
    </div>
    <div>
      <h4 id="logic">内部处理逻辑</h4>
      <p>最后看一下Axios内部的处理过程：</p>
      <img src="../images/axios.jpg" alt="this is a LOGIC.img">
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {
      location: () => import('@/components/location/index')
    },
    data() {
      return {
        list: [{
            name: '拦截器',
            id: 'interceptors'
          },
          {
            name: '请求配置',
            id: 'config'
          },
          {
            name: '响应配置',
            id: 'response'
          },
          {
            name: ' 适配器',
            id: 'dispatchRequest'
          },
          {
            name: 'CSRF 防御',
            id: 'csrf'
          },
          {
            name: '内部处理逻辑',
            id: 'logic'
          }
        ],
      };
    },
    mounted() {},
  };

</script>
<style lang="scss" scoped>
  img {
    width: 100%;
    height: 100%;
  }

</style>
