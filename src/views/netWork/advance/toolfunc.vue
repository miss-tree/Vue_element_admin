<template>
    <div>
        <location :list='list'/>
        <div>
            <h5 id="isPassport">验证护照（包含香港、澳门）</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isPassport = value => 
            /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])
            |([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isNoWord">验证不能包含字母</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isNoWord = value => /^[^A-Za-z]*$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isCHNAndEN">验证中文和数字</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isCHNAndEN = value => 
        /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]
            |[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]
            |\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]
            |\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]
            |\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(value);

            </pre>
        </div>
        <div>
            <h5 id="isPostcode">验证邮政编码(中国)</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isPostcode = value => 
            /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isWeChatNum">验证微信号</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isWeChatNum = value => /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isTrainNum">验证火车车次</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isTrainNum = value => /^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isIMEI">验证手机机身码(IMEI)</h5>
            <pre v-pre>
        /**
        *  @param { string } value
        */
        export const isIMEI = value => /^\d{15,17}$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isHttpAndPort">验证必须带端口号的网址(或ip)</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isHttpAndPort = value => /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g.test(value);

        验证网址(支持端口和"?+参数"和"#+参数)
        /**
        *  @param { string } value
        */
        export const isRightWebsite = value => 
            /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(value);

            </pre>
        </div>
        <div>
            <h5 id="isCreditCode">验证统一社会信用代码</h5>
            <pre v-pre>
        /**
        *  @param { string } value
        */
        export const isCreditCode = value => /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isThunderLink">验证迅雷链接</h5>
            <pre v-pre>
        /**
        *  @param { string } value
        */
        export const isThunderLink = value => /^thunderx?:\/\/[a-zA-Z\d]+=$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="ised2k">验证ed2k链接(宽松匹配)</h5>
            <pre v-pre>
        /**
        *  @param { string } value
        */
        export const ised2k = value => /^ed2k:\/\/\|file\|.+\|\/$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isSubnetMask">验证子网掩码</h5>
            <pre v-pre>
        /**
        *  @param { string } value
        */
        export const isSubnetMask = value => 
            /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="OutOsName">Windows根据详细版本号判断当前系统名称</h5>
            <pre v-pre>
       /**
        * @param { string } osVersion 
        */
        export function OutOsName(osVersion) {
            if(!osVersion){
                return
            }
            let str = osVersion.substr(0, 3);
            if (str === "5.0") {
                return "Win 2000"
            } else if (str === "5.1") {
                return "Win XP"
            } else if (str === "5.2") {
                return "Win XP64"
            } else if (str === "6.0") {
                return "Win Vista"
            } else if (str === "6.1") {
                return "Win 7"
            } else if (str === "6.2") {
                return "Win 8"
            } else if (str === "6.3") {
                return "Win 8.1"
            } else if (str === "10.") {
                return "Win 10"
            } else {
                return "Win"
            }
        }
            </pre>
        </div>
        <div>
            <h5 id="isLicensePlateNumberNER">验证车牌号(新能源)</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isLicensePlateNumberNER = value =>
            /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]
            {1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/g.test(value);

        验证车牌号(非新能源)
        /**
        * @param { string } value
        */
        export const isLicensePlateNumberNNER = value => 
            /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]
            {1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g.test(value);

        验证车牌号(新能源+非新能源)
        /**
        * @param { string } value
        */
        export const isLicensePlateNumber = value => 
            /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]
            {1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))
            |(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]
            {1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="average">平均数</h5>
            <pre v-pre>
        /**
        * 返回两个或多个数的平均数
        *  @param { number/Array } value
        */
        export const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length
        average(...[1, 2, 3]); // 2
        average(1, 2, 3); // 2
            </pre>
        </div>
        <div>
            <h5 id="allEqual">是否都相等</h5>
            <pre v-pre>
        /**
        * 判断数组中的元素是否都相等
        *  @param { Array } value
        */
        export const allEqual = arr => arr.every(val => val === arr[0])
        allEqual([1, 2, 3, 4, 5, 6]); // false
        allEqual([1, 1, 1, 1]); // true
            </pre>
        </div>
    </div>
</template>

<script>
    export default {
        name:"toolfunc",
        components:{
            location:()=>import('@/components/location/index')
        },
        data(){
            return {
                list:[
                    {name:'验证护照',id:'isPassport'},
                    {name:'是否包含字母',id:'isNoWord'},
                    {name:'验证中文和数字',id:'isCHNAndEN'},
                    {name:'验证邮政编码',id:'isPostcode'},
                    {name:'验证微信号',id:'isWeChatNum'},
                    {name:'验证火车车次',id:'isTrainNum'},
                    {name:'验证手机机身码',id:'isIMEI'},
                    {name:'验证网址',id:'isHttpAndPort'},
                    {name:'社会信用代码',id:'isCHNAndEN'},
                    {name:'验证迅雷链接',id:'isThunderLink'},
                    {name:'验证ed2k链接',id:'ised2k'},
                    {name:'验证子网掩码',id:'isSubnetMask'},
                    {name:'判断当前系统名称',id:'OutOsName'},
                    {name:'验证车牌号',id:'isLicensePlateNumberNER'},
                    {name:'平均数',id:'average'},
                    {name:'是否都相等',id:'allEqual'},
                    // {name:'验证子网掩码',id:'isSubnetMask'},
                ]
            }
        }
    }
</script>

