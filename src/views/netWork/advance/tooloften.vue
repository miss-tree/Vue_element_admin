<template>
    <div>
        <location :list='list'/>
        <div>
            <h5 id="isAccountNumber">验证银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isAccountNumber = value => /^[1-9]\d{9,29}$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isChineseName">验证中文姓名</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isChineseName = value => /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isChineseName">验证英文姓名</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isEnglishName = value => /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isMPStrict">验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isMPStrict = value => /^(?:(?:\+|00)86)?1(?:(?:3[\d])
            |(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(value);

        验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可
        /**
        * @param { string } value
        */
        export const isMPRelaxed = value => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isEmail">验证email(邮箱)</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isEmail = value => 
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?
            (?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isLandlineTelephone">验证座机电话(国内),如: 0341-86091234</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isLandlineTelephone = value => /\d{3}-\d{8}|\d{4}-\d{7}/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isIDCardOld">验证身份证号(1代,15位数字)</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isIDCardOld = value => /^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/g.test(value);

        验证身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
        /**
        * @param { string } value
        */
        export const isIDCardNew = value => 
            /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/g.test(value);

        验证身份证号, 支持1/2代(15位/18位数字)
        /**
        * @param { string } value
        */
        export const isIDCard = value => 
            /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)
            ([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isQQNum">验证qq号格式</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isQQNum = value => /^[1-9][0-9]{4,10}$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="getOSType">判断手机是Andoird还是IOS</h5>
            <pre v-pre>
        /**
        *  0: ios
        *  1: android
        *  2: 其它
        */
        export function getOSType() {
            let u = navigator.userAgent, app = navigator.appVersion;
            let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
            let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            if (isIOS) {
                return 0;
            }
            if (isAndroid) {
                return 1;
            }
            return 2;
        }
            </pre>
        </div>
        <div>
            <h5 id="debounce">函数防抖</h5>
            <pre v-pre>
        /**
        * @param { function } func
        * @param { number } wait 延迟执行毫秒数
        * @param { boolean } immediate  true 表立即执行，false 表非立即执行
        */
        export function debounce(func,wait,immediate) {
            let timeout;
            return function () {
                let context = this;
                let args = arguments;

                if (timeout) clearTimeout(timeout);
                if (immediate) {
                    let callNow = !timeout;
                    timeout = setTimeout(() => {
                        timeout = null;
                    }, wait);
                    if (callNow) func.apply(context, args)
                }
                else {
                    timeout = setTimeout(() => {
                        func.apply(context, args)
                    }, wait);
                }
            }
        }
            </pre>
        </div>
        <div>
            <h5 id="throttle">函数节流</h5>
            <pre v-pre>
        /**
        * @param { function } func 函数
        * @param { number } wait 延迟执行毫秒数
        * @param { number } type 1 表时间戳版，2 表定时器版
        */
        export function throttle(func, wait ,type) {
            let previous, timeout;
            if(type===1){
                previous = 0;
            }else if(type===2){
                timeout = null;
            }
            return function() {
                let context = this;
                let args = arguments;
                if(type===1){
                    let now = Date.now();

                    if (now - previous > wait) {
                        func.apply(context, args);
                        previous = now;
                    }
                }else if(type===2){
                    if (!timeout) {
                        timeout = setTimeout(() => {
                            timeout = null;
                            func.apply(context, args)
                        }, wait)
                    }
                }

            }
        }
            </pre>
        </div>
        <div>
            <h5 id="type">判断数据类型</h5>
            <pre v-pre>
        /**
        * @param {*} target 
        */
        export function type(target) {
            let ret = typeof(target);
            let template = {
                "[object Array]": "array",
                "[object Object]":"object",
                "[object Number]":"number - object",
                "[object Boolean]":"boolean - object",
                "[object String]":'string-object'
            };

            if(target === null) {
                return 'null';
            }else if(ret == "object"){
                let str = Object.prototype.toString.call(target);
                return template[str];
            }else{
                return ret;
            }
        }
            </pre>
        </div>
        <div>
            <h5 id="RandomNum">生成指定范围随机数</h5>
            <pre v-pre>
        /**
        * @param { number } min 
        * @param { number } max 
        */
        export const RandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
            </pre>
        </div>
        <div>
            <h5 id="arrScrambling">数组乱序</h5>
            <pre v-pre>
        /**
        * @param {array} arr
        */
        export function arrScrambling(arr) {
            let array = arr;
            let index = array.length;
            while (index) {
                index -= 1;
                let randomIndex = Math.floor(Math.random() * index);
                let middleware = array[index];
                array[index] = array[randomIndex];
                array[randomIndex] = middleware
            }
            return array
        }
            </pre>
        </div>
        <div>
            <h5 id="similarity">数组交集</h5>
            <pre v-pre>
        /**
        * @param { array} arr1
        * @param { array } arr2
        */
        export const similarity = (arr1, arr2) => arr1.filter(v => arr2.includes(v));
            </pre>
        </div>
        <div>
            <h5 id="duplication">数组对象去重</h5>
            <pre v-pre>
        /**
        * es5冒泡排序法，去重arr
        */
        var arr = [{name: 'a',id: 1}, {name: 'a',id: 2}, {name: 'b',id: 3}, {name: 'c',id: 4},
        {name: 'c',id: 6}, {name: 'b',id: 6}, {name: 'd',id: 7}];
        function deWeight() {
            for (var i = 0; i &lt; arr.length - 1; i++) {
                for (var j = i + 1; j &lt; arr.length; j++) {
                    if (arr[i].name == arr[j].name) {
                        // 若条件是筛选手机号、微信号等相同的去重，还要加条件   && arr[i].id !== arr[j].id
                        arr.splice(j, 1);
                        //因为数组长度减小1，所以直接 j++ 会漏掉一个元素，所以要 j--
                        j--;
                    }
                }
            }
            return arr;
        }
        var newArr = deWeight();
        console.log('%c%s', 'color:red;', '方法一：es5,newArr', newArr);
        
        /**
        * es6的Map()，去重arr3
        */
        var arr3 = [{name: 'a',id: 1}, {name: 'a',id: 2}, {name: 'b',id: 3}, {name: 'c',id: 4},
        {name: 'c',id: 6}, {name: 'b',id: 6}, {name: 'd',id: 7}];
        let deWeightThree = () => {
            let map = new Map();
            for (let item of arr3) {
                if (!map.has(item.name)) {
                    map.set(item.name, item);
                }
            }
            return [...map.values()];
        }
        let newArr3 = deWeightThree();
        console.log('%c%s', 'color:red;', '方法三：es6,newArr3', newArr3);

        /**
        * es5，对象法去重arr4
        */
        var arr4 = [{name: 'a',id: 1}, {name: 'a',id: 2}, {name: 'b',id: 3}, {name: 'c',id: 4},
        {name: 'c',id: 6}, {name: 'b',id: 6}, {name: 'd',id: 7}];
        // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
        // (function(必选初始值或计算结束返回值, 必选当前元素, 可选索引, 可选原数组),可选函数初始值)
        var obj = {};
        function deWeightFour() {
            arr4 = arr4.reduce(function(a, b) {
                obj[b.name] ? '' : obj[b.name] = true && a.push(b);
                return a;
            }, [])
            return arr4;
        }
        var newArr4 = deWeightFour();
        console.log('%c%s', 'color:red;', '方法四：es5,newArr4', newArr4);
        
            </pre>
        </div>
        <div>
            <h5 id="similarity">去除空格</h5>
            <pre v-pre>
        /**
        * @param { string } str 待处理字符串
        * @param  { number } type 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
        */
        export function trim(str, type = 1) {
            if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
            switch (type) {
                case 1:
                    return str.replace(/\s/g, "");
                case 2:
                    return str.replace(/(^\s)|(\s*$)/g, "");
                case 3:
                    return str.replace(/(^\s)/g, "");
                case 4:
                    return str.replace(/(\s$)/g, "");
                default:
                    return str;
            }
        }
            </pre>
        </div>
        <div>
            <h5 id="turnCase">大小写转换</h5>
            <pre v-pre>
        /**
        * @param { string } str 待转换的字符串
        * @param { number } type 1-全大写 2-全小写 3-首字母大写 其他-不转换
        */

        export function turnCase(str, type) {
            switch (type) {
                case 1:
                    return str.toUpperCase();
                case 2:
                    return str.toLowerCase();
                case 3:
                    return str[0].toUpperCase() + str.substr(1).toLowerCase();
                default:
                    return str;
            }
        }

        将一个句子中每个单词首字母转换成大写字母，这里中要运用了正则表达式进行替换。
        const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

        capitalizeEveryWord('hello world!'); // 'Hello World!'
            </pre>
        </div>
        <div>
            <h5 id="detectDeviceType">检测移动/PC设备</h5>
            <pre v-pre>
        export const detectDeviceType = () => { 
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 
                'Mobile' : 'Desktop'; };
            </pre>
        </div>
        <div>
            <h5 id="isBrowser">检查是否为浏览器环境</h5>
            <pre v-pre>
        const isBrowser = () => ![typeof window, typeof document].includes('undefined');
	
        isBrowser(); // true (browser)
        isBrowser(); // false (Node)
            </pre>
        </div>
    </div>
</template>

<script>
    export default {
        name:"tooloften",
        components:{
            location:()=>import('@/components/location/index')
        },
        data(){
            return {
                list:[
                    {name:'验证银行卡号',id:'isAccountNumber'},
                    {name:'验证中文姓名',id:'isChineseName'},
                    {name:'验证英文姓名',id:'isEnglishName'},
                    {name:'验证手机号中国',id:'isMPStrict'},
                    {name:'验证email',id:'isEmail'},
                    {name:'验证座机电话',id:'isLandlineTelephone'},
                    {name:'验证身份证号',id:'isIDCardOld'},
                    {name:'验证qq号',id:'isQQNum'},
                    {name:'判断是Andoird|IOS',id:'getOSType'},
                    {name:'函数防抖',id:'debounce'},
                    {name:'函数节流',id:'throttle'},
                    {name:'判断数据类型',id:'type'},
                    {name:'范围随机数',id:'RandomNum'},
                    {name:'数组乱序',id:'arrScrambling'},
                    {name:'数组交集',id:'similarity'},
                    {name:'数组对象去重',id:'duplication'},
                    {name:'去除空格',id:'trim'},
                    {name:'大小写转换',id:'turnCase'},
                    {name:'检测移动/PC设备',id:'detectDeviceType '},
                    {name:'检查是否为浏览器环境',id:'isBrowser'},
                ]
            }
        }
    }
</script>

