<template>
    <div>
        <div>
            <h4>字符串新增</h4>  
        </div>
        <div>
            <h5>includes(), startsWith(), endsWith()</h5>
            <ul>
                <li>includes()：返回布尔值，表示是否找到了参数字符串。</li>
                <li>startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。</li>
                <li>endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。</li>
            </ul>
            <pre>
        let s = 'Hello world!';

        s.startsWith('Hello') => true
        s.endsWith('!') => true
        s.includes('o') => true    


        let s = 'Hello world!';

        s.startsWith('world', 6) => true
        s.endsWith('Hello', 5) => true
        s.includes('Hello', 6) => false
            </pre>
        </div>
        <div>
            <h5>repeat()</h5>
            <pre>
        'x'.repeat(3) => "xxx"
        'hello'.repeat(2) => "hellohello"
        'na'.repeat(0) => ""

        'na'.repeat(2.9) => "nana"      参数如果是小数，会被取整。负数则取0
            </pre>
        </div>
        <div>
            <h5>padStart()，padEnd()</h5>
            <pre>
        'x'.padStart(5, 'ab') => 'ababx'
        'x'.padStart(4, 'ab') => 'abax'

        'x'.padEnd(5, 'ab') => 'xabab'
        'x'.padEnd(4, 'ab') => 'xaba'        
            </pre>
        </div>
        <div>
            <h5>trimStart()，trimEnd()</h5>
            <p>
                它们的行为与trim()一致，trimStart()消除字符串头部的空格，
                trimEnd()消除尾部的空格。它们返回的都是新字符串，不会修改原始字符串。
            </p>
            <pre>
        const s = '  abc  ';

        s.trim() => "abc"
        s.trimStart() => "abc  "
        s.trimEnd() => "  abc"        
            </pre>
        </div>
    </div>
</template>
<script>
    export default{
        name:"stringAdd"
    }
</script>