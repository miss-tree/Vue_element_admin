<template>
  <div>
    <location :list='list' />
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

        <!-- 如果设置过期时间就要把键值设置成对象，获取当前时间，在获取键值的时候获取时间和设置时间对比看是否过期 -->
        //设置本地缓存
        export function setExpire(key,value, expire){
            let obj = {
                data: value,
                time: Date.now(),
                expire: expire
            };
            localStorage.setItem(key, JSON.stringify(obj));
        }
        //获取本地缓存
        export function getExpire(key){
            let val = localStorage.getItem(key);
            if (!val) {
                return val;
            }
            val = JSON.parse(val);
            if (Date.now() - val.time > val.expire) {
                localStorage.removeItem(key);
                return null;
            }
            return val.data;
        }
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

        localStorage.claer() // 清除全部
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

        <!-- https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie -->
        var docCookies = {
          getItem: function (sKey) {
            return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
          },
          setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
            if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
            var sExpires = "";
            if (vEnd) {
              switch (vEnd.constructor) {
                case Number:
                  sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                  break;
                case String:
                  sExpires = "; expires=" + vEnd;
                  break;
                case Date:
                  sExpires = "; expires=" + vEnd.toUTCString();
                  break;
              }
            }
            document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
            return true;
          },
          removeItem: function (sKey, sPath, sDomain) {
            if (!sKey || !this.hasItem(sKey)) { return false; }
            document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");
            return true;
          },
          hasItem: function (sKey) {
            return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
          },
          keys: /* optional method: you can safely remove it! */ function () {
            var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
            for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
            return aKeys;
          }
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
  name: "browsertool",
  components: {
    location: () => import('@/components/location/index')
  },
  data () {
    return {
      list: [
        { name: 'localStorage 存贮', id: 'localStorageSet' },
        { name: 'localStorage 获取', id: 'localStorageGet' },
        { name: 'localStorage 移除', id: 'localStorageRemove' },
        { name: 'localStorage存贮时间', id: 'localStorageSetExpire' },
        { name: 'sessionStorage 存贮', id: 'sessionStorageSet' },
        { name: 'sessionStorage 获取', id: 'sessionStorageGet' },
        { name: 'sessionStorage 删除', id: 'sessionStorageRemove' },
        { name: 'sessionStorage存贮时间', id: 'sessionStorageSetExpire' },
        { name: 'cookie 存贮', id: 'cookieSet' },
        { name: 'cookie 获取', id: 'cookieGet' },
        { name: 'cookie 删除', id: 'cookieRemove' },
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

