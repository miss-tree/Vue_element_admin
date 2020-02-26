<template>
    <div>
        <div>
            <h4>认识ES6</h4>
            <p>在此感谢
              <a href="https://es6.ruanyifeng.com/" target="_blank">阮一峰的ES6</a>文档分享，写的非常的详细。
            </p>
            <div>JavaScript 历程</div>
            <ul>
                <li>1997 年 :JavaScript 的创造者 Netscape 公司向 ECMA 发布 262 号标准文件（ECMA-262）的第一版</li>
                <li>1998 年 6 月:ECMAScript 2.0</li>    
                <li>1999 年 12 月: ECMAScript 3.0(是一个巨大的成功,奠定了 JavaScript语言的基本语法，以后的版本完全继承)</li>   
                <li>2000 年: ECMAScript 4.0(最后没有通过，但是它的大部分内容被 ES6 继承)</li>
                <li>2009 年 12 月: ECMAScript 5.0</li>              
                <li>2013 年 3 月: ECMAScript 6.0 ,ECMAScript 6 草案冻结，不再添加新功能</li>                
                <li>2013 年 12 月: ECMAScript 6 草案发布</li>                
                <li>2015 年 6 月: ECMAScript 6 正式通过</li>                  
            </ul>  
        </div>
        <div>
            <h5>Babel 转码器</h5>
            <p>
                Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在老版本的浏览器执行。
                这意味着，你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持。下面是一个例子。
            </p>
            <pre>
        // 转码前
        input.map(item => item + 1);

        // 转码后
        input.map(function (item) {
        return item + 1;
        });        
            </pre>
        </div>
        <div>
            <h5>配置文件 .babelrc</h5>
            <p>
                Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在老版本的浏览器执行。
                这意味着，你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持。下面是一个例子。
            </p>
            <pre>
        {
            "presets": [
            "@babel/env",
            "@babel/preset-react"
            ],
            "plugins": []
        }      
            </pre>
            <div>现在一般用前端框架很少会用到babel命令，更多的是安装模块配置参数， 更多babel命令请
                <a href="https://es6.ruanyifeng.com/#docs/intro#%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%BD%AC%E7%A0%81" target="_blank">查看文档</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"explain",
    data(){
        return{
        }
    }    
}
</script>
