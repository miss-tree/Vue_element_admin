<template>
    <div>
        <div>
            <h4>数值的扩展</h4>
        </div>
        <div>
            <h5>Number.isFinite()和Number.isNaN()</h5>
            <ul>
                <li>Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。如果参数类型不是数值，Number.isFinite一律返回false。</li>
                <li>Number.isNaN()用来检查一个值是否为NaN。如果参数类型不是NaN，Number.isNaN一律返回false。</li>
            </ul>
            <pre>
        Number.isFinite(15); => true
        Number.isFinite(0.8); => true
        Number.isFinite(NaN); => false
        Number.isFinite(Infinity); => false
        Number.isFinite(-Infinity); => false
        Number.isFinite('foo'); => false
        Number.isFinite('15'); => false
        Number.isFinite(true); => false

        Number.isNaN(NaN) => true
        Number.isNaN(15) => false
        Number.isNaN('15') => false
        Number.isNaN(true) => false
        Number.isNaN(9/NaN) => true
        Number.isNaN('true' / 0) => true
        Number.isNaN('true' / 'true') => true

        isFinite(25) => true
        isFinite("25") => true
        Number.isFinite(25) => true
        Number.isFinite("25") => false

        isNaN(NaN) => true
        isNaN("NaN") => true
        Number.isNaN(NaN) => true
        Number.isNaN("NaN") => false
        Number.isNaN(1) => false
            </pre>
        </div>
        <div>
            <h5>parseInt()和parseFloat()</h5>
            <pre>
        /*/ ES5的写法
        parseInt('12.34') => 12
        parseFloat('123.45#') => 123.45

        /*/ ES6的写法
        Number.parseInt('12.34') => 12
        Number.parseFloat('123.45#') => 123.45

        Number.parseInt === parseInt => true
        Number.parseFloat === parseFloat => true
            </pre>
        </div>
        <div>
            <h5>Number.isInteger()</h5>
            <pre>
        Number.isInteger(25) => true
        Number.isInteger(25.1) => false      
        Number.isInteger(25.0) => true 
        如果参数不是数值，Number.isInteger返回false。
        Number.isInteger() => false
        Number.isInteger(null) => false
        Number.isInteger('15') => false
        Number.isInteger(true) => false
            </pre>
        </div>
    </div>
</template>
<script>
export default {
    name:"numberAdd"
}
</script>

