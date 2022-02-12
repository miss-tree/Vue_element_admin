<template>
    <div>
        <location :list='list'/>
        <div>
            <h5 id="localStorageSet">localStorage 存贮</h5>
            <pre v-pre>
        /**
        * 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略
        * @param { String } key  属性
        * @param { string } value 值
        */
        export const localStorageSet = (key, value) => {
            if (typeof (value) === 'object') value = JSON.stringify(value);
            localStorage.setItem(key, value)
        };
            </pre>
        </div>
        <div>
            <h5 id="localStorageGet">localStorage 获取</h5>
            <pre v-pre>
        /**
        * @param {String} key  属性
        */
        export const localStorageGet = (key) => {
            return localStorage.getItem(key)
        };
            </pre>
        </div>
        <div>
            <h5 id="localStorageRemove">localStorage 移除</h5>
            <pre v-pre>
        /**
        * @param {String} key  属性
        */
        export const localStorageRemove = (key) => {
            localStorage.removeItem(key)
        };
            </pre>
        </div>
        <div>
            <h5 id="localStorageSetExpire">localStorage 存贮某一段时间失效</h5>
            <pre v-pre>
        /**
        * @param {String} key  属性
        * @param {*} value 存贮值
        * @param { number } expire 过期时间,毫秒数
        */
        export const localStorageSetExpire = (key, value, expire) => {
            if (typeof (value) === 'object') value = JSON.stringify(value);
            localStorage.setItem(key, value);
            setTimeout(() => {
                localStorage.removeItem(key)
            }, expire)
        };
            </pre>
        </div>
        <div>
            <h5 id="sessionStorageSet">sessionStorage 存贮</h5>
            <pre v-pre>
        /**
        * @param {String} key  属性
        * @param {*} value 值
        */
        export const sessionStorageSet = (key, value) => {
            if (typeof (value) === 'object') value = JSON.stringify(value);
            sessionStorage.setItem(key, value)
        };

            </pre>
        </div>
        <div>
            <h5 id="sessionStorageGet">sessionStorage 获取</h5>
            <pre v-pre>
        /**
        * @param {String} key  属性
        */
        export const sessionStorageGet = (key) => {
            return sessionStorage.getItem(key)
        };
            </pre>
        </div>
        <div>
            <h5 id="sessionStorageRemove">sessionStorage 删除</h5>
            <pre v-pre>
        /**
        * @param {String} key  属性
        */
        export const sessionStorageRemove = (key) => {
            sessionStorage.removeItem(key)
        };
            </pre>
        </div>
        <div>
            <h5 id="sessionStorageSetExpire">sessionStorage 存贮某一段时间失效</h5>
            <pre v-pre>
        /**
        * @param {String} key  属性
        * @param {*} value 存贮值
        * @param {String} expire 过期时间,毫秒数
        */
        export const sessionStorageSetExpire = (key, value, expire) => {
            if (typeof (value) === 'object') value = JSON.stringify(value);
            sessionStorage.setItem(key, value);
            setTimeout(() => {
                sessionStorage.removeItem(key)
            }, expire)
        };
            </pre>
        </div>
        <div>
            <h5 id="cookieSet">cookie 存贮</h5>
            <pre v-pre>
        /**
        * @param {String} key  属性
        * @param {*} value  值
        * @param { String } expire  过期时间,单位天
        */
        export const cookieSet = (key, value, expire) => {
            const d = new Date();
            d.setDate(d.getDate() + expire);
            document.cookie = `${key}=${value};expires=${d.toUTCString()}`
        };
            </pre>
        </div>
        <div>
            <h5 id="cookieGet">cookie 获取</h5>
            <pre v-pre>
        /**
        * @param {String} key  属性
        */
        export const cookieGet = (key) => {
            const cookieStr = unescape(document.cookie);
            const arr = cookieStr.split('; ');
            let cookieValue = '';
            for (let i = 0; i &lt; arr.length; i++) {
                const temp = arr[i].split('=');
                if (temp[0] === key) {
                    cookieValue = temp[1];
                    break
                }
            }
            return cookieValue
        };
            </pre>
        </div>
        <div>
            <h5 id="cookieRemove">cookie 删除</h5>
            <pre v-pre>
        /**
        * @param {String} key  属性
        */
        export const cookieRemove = (key) => {
            document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
        };
            </pre>
        </div>
        <div>
            <h5 id="AutoResponse">自适应页面（rem）</h5>
            <pre v-pre>
        /**
        * @param { number } width
        */
        export function AutoResponse(width = 750) {
            const target = document.documentElement;
            target.clientWidth >= 600
                ? (target.style.fontSize = "80px")
                : (target.style.fontSize = target.clientWidth / width * 100 + "px");
        }
            </pre>
        </div>
    </div>
</template>

<script>
    export default {
        name:"browsertool",
        components:{
            location:()=>import('@/components/location/index')
        },
        data(){
            return {
                list:[
                    {name:'localStorage 存贮',id:'localStorageSet'},
                    {name:'localStorage 获取',id:'localStorageGet'},
                    {name:'localStorage 移除',id:'localStorageRemove'},
                    {name:'localStorage存贮时间',id:'localStorageSetExpire'},
                    {name:'sessionStorage 存贮',id:'sessionStorageSet'},
                    {name:'sessionStorage 获取',id:'sessionStorageGet'},
                    {name:'sessionStorage 删除',id:'sessionStorageRemove'},
                    {name:'sessionStorage存贮时间',id:'sessionStorageSetExpire'},
                    {name:'cookie 存贮',id:'cookieSet'},
                    {name:'cookie 获取',id:'cookieGet'},
                    {name:'cookie 删除',id:'cookieRemove'},
                    // {name:'滚动到指定元素区域',id:'smoothScroll'},
                    // {name:'平滑滚动到顶部',id:'scrollToTop'},
                    // {name:'http跳转https',id:'httpsRedirect'},
                    // {name:'检查底部是否可见',id:'bottomVisible'},
                    // {name:'打开一个窗口',id:'openWindow'},
                    // {name:'自适应页面（rem）',id:'AutoResponse'},
                ]
            }
        }
    }
</script>

