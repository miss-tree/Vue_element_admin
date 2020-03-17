<template>
    <div>
        <div>
            <h5 id="random">Blob 对象</h5>
            <p>
                Blob构造函数接受两个参数。第一个参数是数组，成员是字符串或二进制对象，表示新生成的Blob实例对象的内容；
                第二个参数是可选的，是一个配置对象，目前只有一个属性type，它的值是一个字符串，
                表示数据的 MIME 类型，默认是空字符串。
            </p>
            <pre v-pre>
        var htmlFragment = ['&lt;a id="a"&gt;&lt;b id="b"&gt;hey!&lt;/b&gt;&lt;/a&gt;'];
        var myBlob = new Blob(htmlFragment, {type : 'text/html'});

        var obj = { hello: 'world' };
        var blob = new Blob([ JSON.stringify(obj) ], {type : 'application/json'});
            </pre>
        </div>
        <div>
            <h5 id="replace">FileReader 对象</h5>
            <p>
                File对象代表一个文件，用来读写文件信息。它继承了 Blob对象，或者说是一种特殊的 Blob对象，
                所有可以使用 Blob 对象的场合都可以使用它。 下面代码中，file是用户选中的第一个文件，它是 File 的实例。
            </p>
            <pre v-pre>
        // HTML 代码如下
        // &lt;input id="fileItem" type="file"&gt;
        var file = document.getElementById('fileItem').files[0];
        file instanceof File // true
            </pre>
            <ul>
                <li>FileReader.result：读取完成后的文件内容，有可能是字符串，也可能是一个 ArrayBuffer 实例。</li>
                <li>FileReader.onload：load事件（读取操作完成）的监听函数，通常在这个函数里面使用result属性，拿到文件内容。</li>
            </ul>
            <pre>
        // HTML 代码如下
        // &lt;input type="file" onchange="onChange(event)"&gt;

        function onChange(event) {
            var file = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function (event) {
                var percent = (event.loaded / event.total) * 100 + '%';  // 监听上传进度
                console.log(event.target.result)
            };

            reader.readAsText(file);
        }
            </pre>
            <ul>
                <li>
                    FileReader.readAsDataURL()：读取完成后，result属性将返回一个 Data URL 格式（Base64 编码）的字符串，
                    代表文件内容。对于图片文件，这个字符串可以用于&lt;img&gt;元素的src属性。
                    注意，这个字符串不能直接进行 Base64 解码，必须把前缀data:*/*;base64,从字符串里删除以后，再进行解码
                </li>
                <li>
                    FileReader.readAsText()：读取完成后，result属性将返回文件内容的文本字符串。
                    该方法的第一个参数是代表文件的 Blob 实例，第二个参数是可选的，表示文本编码，默认为 UTF-8。
                </li>
            </ul>
            <pre>
        /* HTML 代码如下
        &lt;input type="file" onchange="previewFile()"&gt;
        &lt;img src="" height="200"&gt;
        */

        function previewFile() {
        var preview = document.querySelector('img');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();

        reader.addEventListener('load', function () {
            preview.src = reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
        
            </pre>
        </div>
    </div>
</template>

<script>
    export default {
        name:"blob",
    }
</script>

