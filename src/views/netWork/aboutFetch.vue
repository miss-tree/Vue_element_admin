<template>
    <div>
        <div>
            <h4>fetch()</h4>
            <p>
                fetch() 是继AJAX新的api调用方法，支持Ajax所有的方法。
                语法：
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
        name:"aboutFetch",
    }
</script>

