<template>
  <div>
    <location :list='list' />
    <div>
      <h5 id="localStorageSet">escape()和unescape()</h5>
      <pre v-pre>
        escape("abc123");     // "abc123"
        escape("äöü");        // "%E4%F6%FC"
        escape("ć");          // "%u0107"

        // special characters
        escape("@*_+-./");    // "@*_+-./"


        unescape('abc123');     // "abc123"
        unescape('%E4%F6%FC');  // "äöü"
        unescape('%u0107');     // "ć"

            </pre>
    </div>
    <div>
      <h5 id="localStorageGet">encodeURIComponent()和decod</h5>
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
      <h5 id="cookieGet">base64编码</h5>
      <p>上面的方法都不支持对数字的编码，遇到数字会直接返回，base64编码会将数字变成字符串然后在编码，但是解码返回的也是字符串而不是数字了</p>
      <pre v-pre>
        // ucs-2 string to base64 encoded ascii
        function utoa(str) {
            let unicode =window.btoa(unescape(encodeURIComponent(str)))
            console.log("utoa unicode",unicode)
            return unicode
        }
        // base64 encoded ascii to ucs-2 string
        function atou(str) {
            
            let unicode =decodeURIComponent(escape(window.atob(str)))
            console.log("atou unicode",unicode)
            return unicode
        }
        // Usage:
        utoa(111111); // 4pyTIMOgIGxhIG1vZGU=
        atou('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"

        utoa('I \u2661 Unicode!'); // SSDimaEgVW5pY29kZSE=
        atou('SSDimaEgVW5pY29kZSE='); // "I ♡ Unicode!"
            </pre>
    </div>
    <div>
      <h5 id="cookieRemove">二进制</h5>
      <pre v-pre>
        // convert a Unicode string to a string in which
        // each 16-bit unit occupies only one byte
        function toBinary(string) {
          const codeUnits = new Uint16Array(string.length);
          for (let i = 0; i &lt; codeUnits.length; i++) {
            codeUnits[i] = string.charCodeAt(i);
          }
          const charCodes = new Uint8Array(codeUnits.buffer);
          let result = '';
          for (let i = 0; i &lt; charCodes.byteLength; i++) {
            result += String.fromCharCode(charCodes[i]);
          }
          return result;
        }

        // a string that contains characters occupying > 1 byte
        const myString = "☸☹☺☻☼☾☿";

        const converted = toBinary(myString);
        const encoded = btoa(converted);
        console.log(encoded);                 // OCY5JjomOyY8Jj4mPyY=


        function fromBinary(binary) {
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i &lt; bytes.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }
        const charCodes = new Uint16Array(bytes.buffer);
        let result = '';
        for (let i = 0; i &lt; charCodes.length; i++) {
          result += String.fromCharCode(charCodes[i]);
        }
        return result;
      }

      const decoded = atob(encoded);
      const original = fromBinary(decoded);
      console.log(original);                // ☸☹☺☻☼☾☿


            </pre>
    </div>
    <div>
      <h5 id="other">其他编码加密方法</h5>
      <ul>
        <li>MD5加密（不可逆）</li>
        <li>sha1加密（不可逆）</li>
        <li>AES/DES加密解密</li>
        <li>RSA加密</li>
        <li></li>
      </ul>
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
      ]
    }
  }
}
</script>

