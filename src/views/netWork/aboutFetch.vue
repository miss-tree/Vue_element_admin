<template>
  <div>
    <div>
      <h4>fetch()</h4>
      <p>
        fetch() 是继AJAX新的api调用方法，支持Ajax所有的方法。
        目前还没有被所有浏览器支持，它提供的api返回的是Promise对象。
        如果考虑低版本浏览器的问题的话，引入https://github.com/github/fetch/blob/master/fetch.js 即可兼容
        fetch方法接受2个参数，参数1为请求url或 Request 对象，参数2为可选配置对象
      </p>
      <pre>
        fetch(url, options)
        .then(function(res) {
            res.Json()      //得到是数据需要再次转化 否则得到的数据是一个 Promise对象，而且没有数据
        }).then((response)=>{
             data =response.data
        })
        .catch(function(error) {
            // handle network error
        })   

        option配置
            method: 请求使用的方法，如 GET、POST。
            headers: 请求的头信息，形式为 Headers 对象或 ByteString。
            body: 请求的 body 信息：可能是一个 Blob、BufferSource、FormData、URLSearchParams 或者 USVString 对象。注意 GET 或 HEAD 方法的请求不能包含 body 信息。
            mode: 请求的模式，如 cors、 no-cors 或者 same-origin。
            credentials: 请求的 credentials，如 omit、same-origin 或者 include。
            cache: 请求的 cache 模式: default, no-store, reload, no-cache, force-cache, 或者 only-if-cached。
        数据转化的方法
            text() - 以string的形式生成请求text
            json() - 生成JSON.parse(responseText)的结果
            blob() - 生成一个Blob
            arrayBuffer() - 生成一个ArrayBuffer
            formData() - 生成格式化的数据，可用于其他的请求
            </pre>
      <h5>then的回调函数接受一个Response对象参数，其对象拥有9个属性，8个方法</h5>
      <div>属性：</div>
      <ul>
        <li>type 只读 包含Response的类型 (例如, basic, cors)</li>
        <li>url 只读 包含Response的URL</li>
        <li>useFinalURL 包含了一个布尔值来标示这是否是该Response的最终URL</li>
        <li>status 只读 包含Response的状态码</li>
        <li>ok 只读 包含了一个布尔值来标示该Response成功(状态码200-299)</li>
        <li>redirected 只读 表示该Response是否来自一个重定向，如果是的话，它的URL列表将会有多个</li>
        <li>statusText 只读 包含了与该Response状态码一致的状态信息</li>
        <li>headers 只读 包含此Response所关联的Headers 对象</li>
        <li>bodyUsed Body 只读 包含了一个布尔值来标示该Response是否读取过Body</li>
      </ul>
      <div>方法:</div>
      <ul>
        <li>clone 创建一个Response对象的克隆</li>
        <li>error 返回一个绑定了网络错误的新的Response对象</li>
        <li>redirect(url, status) 用另一个URL创建一个新的 response</li>
        <li>arrayBuffer 接受一个 Response 流, 并等待其读取完成. 并 resolve 一个 ArrayBuffer 对象</li>
        <li>blob blob()方法使用一个 Response 流，并将其读取完成</li>
        <li>formData 将 Response 对象中的所承载的数据流读取并封装成为一个对象</li>
        <li>json 使用一个 Response 流，并将其读取完成。解析结果是将文本体解析为 JSON</li>
        <li>text 提供了一个可供读取的"返回流", 它返回一个包含USVString对象，编码为UTF-8</li>
      </ul>
    </div>
    <div>
      <h5>POST使用</h5>
      <pre>
        fetch("http://127.0.0.1:7777/postContent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify({
                content: "留言内容"
            })
        })
        .then(function(res) {
            if (res.status === 200) {
                return res.json()
            } else {
                return Promise.reject(res.json())
            }
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function(err) {
            console.log(err);
        });        
            </pre>
    </div>
    <div>
      <h5>text()字符串转化方法</h5>
      <pre>
        fetch('/users.html')
        .then(function(response) {
            return response.text()
        }).then(function(body) {
            document.body.innerHTML = body
        })     
            </pre>
    </div>
  </div>
</template>

<script>
  export default {
    name: "aboutFetch",
  }

</script>
