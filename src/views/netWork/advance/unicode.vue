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
      <h5 id="localStorageGet">encodeURIComponent()decodeURIComponent()</h5>
      <p>主要编码中文，字母和数字不编码</p>
      <pre v-pre>
        encodeURIComponent('你好')    // "%E4%BD%A0%E5%A5%BD"
        encodeURIComponent('test1234')    // "test1234"

        decodeURIComponent(encodedURI)
        decodeURIComponent('%3Fx%3Dtest')  //  ?x=test
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
        { name: 'escape()', id: 'localStorageSet' },
        { name: 'encodeURIComponent()/decodeURIComponent()', id: 'localStorageGet' },
        { name: 'base64编码(推荐)', id: 'cookieGet' },
        { name: '二进制', id: 'cookieRemove' },
        { name: '其他编码加密方法', id: 'other' },
      ]
    }
  }
}
</script>

