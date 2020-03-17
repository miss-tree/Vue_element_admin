<template>
    <div>
        <location :list='list'/>
        <div>
            <h5 id="inBrowser">检测当前宿主环境是否是浏览器</h5>
            <pre>
        // 通过判断 `window` 对象是否存在即可
        export const inBrowser = typeof window !== 'undefined'
            </pre>
        </div>
        <div>
            <h5 id="hasProto">检查当前环境是否可以使用对象的 __proto__ 属性</h5>
            <pre v-pre>
        // 一个对象的 __proto__ 属性指向了其构造函数的原型
        // 从一个空的对象字面量开始沿着原型链逐级检查。
        export const hasProto = '__proto__' in {}
            </pre>
        </div>
        <div>
            <h5 id="Agent">user Agent常量的一系列操作</h5>
            <pre v-pre>
        // toLowerCase目的是 为了后续的各种环境检测
        export const UA = inBrowser && window.navigator.userAgent.toLowerCase()

        IE浏览器判断
        export const isIE = UA && /msie|trident/.test(UA)

        IE9| Edge | Chrome 判断
        export const isIE9 = UA && UA.indexOf('msie 9.0') > 0
        export const isEdge = UA && UA.indexOf('edge/') > 0
        export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
            </pre>
        </div>
        <div>
            <h5 id="string">字符串操作</h5>
            <pre v-pre>
        连字符转驼峰        
        const camelizeRE = /-(\w)/g
        export const camelize = cached((str: string): string => {
            return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
        })

        首字符大写
        // 忽略cached
        export const capitalize = cached((str: string): string => {
            return str.charAt(0).toUpperCase() + str.slice(1)
        })

        驼峰转连字符
        const hyphenateRE = /\B([A-Z])/g
        export const hyphenate = cached((str: string): string => {
            return str.replace(hyphenateRE, '-$1').toLowerCase()
        })
            </pre>
        </div>
        <div>
            <h5 id="decide">类型判断</h5>
            <pre v-pre>
        判断变量是否为正则对象。
        // 使用 Object.prototype.toString 与 '[object RegExp]' 做全等对比。
        export function isRegExp (v: any): boolean {
            return _toString.call(v) === '[object RegExp]'
        }

        判断变量是否含有效的数组索引
        export function isValidArrayIndex (val: any): boolean {
            const n = parseFloat(String(val))
            // n >= 0 && Math.floor(n) === n 保证了索引是一个大于等于 0 的整数
            return n >= 0 && Math.floor(n) === n && isFinite(val)
        }
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"operation",
    name:"ergodic",
        components:{
            location:()=>import('@/components/location/index')
        },
        data(){
            return {
                list:[
                    {name:'是否是浏览器',id:'inBrowser'},
                    {name:'检查对象的_proto_属性',id:'hasProto'},
                    {name:'user Agent',id:'Agent'},
                    {name:'字符串操作',id:'string'},
                    {name:'类型判断',id:'decide'},
                ]
            }
        }
}
</script>

