<template>
    <div>
        <location :list='list'/>
        <div>
            <h5 id="currentURL">返回当前url</h5>
            <pre v-pre>
        export const currentURL = () => window.location.href;
            </pre>
        </div>
        <div>
            <h5 id="getUrlParam">获取url参数</h5>
            <pre v-pre>
        /**
        * @param {*} name
        * @param {*} url
        */      
        function getQueryString(name,url) {
          const url_string = url //"https://www.baidu.com/t.html?name=mick&age=20"; // window.location.href
          const url = new URL(url_string);
          return url.searchParams.get(name);
        }

        /**
        * @param {*} name
        * @param {*} origin
        */
        export function getUrlParams(name, origin = null) {
            let url = location.href;
            let temp1 = url.split('?');
            let pram = temp1[1];
            let keyValue = pram.split('&');
            let obj = {};
            for (let i = 0; i &lt; keyValue.length; i++) {
                let item = keyValue[i].split('=');
                let key = item[0];
                let value = item[1];
                obj[key] = value;
            }
            return obj[name];
        }

        // obj转换url参数   url = url + '?' + toStringQuery(obj)
        /**
        * @param {*} obj
        */
        export function toStringQuery(obj) {
          Object.keys(obj).forEach(key => { obj[key] ??= "$$$" }) // Ts写法
          return Object.keys(obj).filter(key => obj[key] !== '$$$').map((key) => {
            return (key) + "=" + obj[key]  //  或者 return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
          }).join("&");
        }

        // url参数转换obj   
        /**
        * @param {*} url
        */
        export function queryToObject(url) {
          <!-- 可能url后面还有锚点，使用 URL 对象 -->
          const query = new URL(url).search.slice(1) // .slice(1) 去除参数前 “？”  
          if(query.length>1){ //有参数
            let arr = query.split('&')
            let obj = {}
            for(let n of arr){
              let key = decodeURIComponent(n.split('=')[0]) 
              let value = decodeURIComponent(n.split('=')[1]) 
              obj[key] = value
            }

            return obj
          }
        }
        url = "https://blog.csdn.net/weixin?hello=hei&world=ball#idsda"
        ==> {hello: 'hei', world: 'ball'}

        /**
        * @param {*} name
        * @param {*} origin
        */
        export function getUrlParam(name, origin = null) {
            let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            let r = null;
            if (origin == null) {
                r = window.location.search.substr(1).match(reg);
            } else {
                r = origin.substr(1).match(reg);
            }
            if (r != null) return decodeURIComponent(r[2]);
            return null;
        }
            </pre>
        </div>
        <div>
            <h5 id="getClientHeight">获取窗口可视范围的高度</h5>
            <pre v-pre>
        export function getClientHeight() {
            let clientHeight = 0;
            if (document.body.clientHeight && document.documentElement.clientHeight) {
                clientHeight = (document.body.clientHeight &lt; document.documentElement.clientHeight) ?
                 document.body.clientHeight : document.documentElement.clientHeight;
            }
            else {
                clientHeight = (document.body.clientHeight &gt; document.documentElement.clientHeight) ? 
                document.body.clientHeight : document.documentElement.clientHeight;
            }
            return clientHeight;
        }
            </pre>
        </div>
        <div>
            <h5 id="getPageViewWidth">获取窗口可视范围宽度</h5>
            <pre v-pre>
        export function getPageViewWidth() {
            let d = document,
                a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
            return a.clientWidth;
        }
            </pre>
        </div>
        <div>
            <h5 id="getPageWidth">获取窗口宽度</h5>
            <pre v-pre>
        export function getPageWidth() {
            let g = document,
                a = g.body,
                f = g.documentElement,
                d = g.compatMode == "BackCompat" ? a : g.documentElement;
            return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
        }
            </pre>
        </div>
        <div>
            <h5 id="isNumber">获取窗口尺寸</h5>
            <pre v-pre>
        export function getViewportOffset() {
            if (window.innerWidth) {
                return {
                    w: window.innerWidth,
                    h: window.innerHeight
                }
            } else {// ie8及其以下
                if (document.compatMode === "BackCompat") {
                    // 怪异模式
                    return {
                        w: document.body.clientWidth,
                        h: document.body.clientHeight
                    }
                } else {// 标准模式
                    return {
                        w: document.documentElement.clientWidth,
                        h: document.documentElement.clientHeight
                    }
                }
            }
        }
            </pre>
        </div>
        <div>
            <h5 id="getPageScrollTop">获取滚动条距顶部高度</h5>
            <pre v-pre>
        export function getPageScrollTop() {
            let a = document;
            return a.documentElement.scrollTop || a.body.scrollTop;
        }

            </pre>
        </div>
        <div>
            <h5 id="getPageScrollLeft">获取滚动条距左边的高度</h5>
            <pre v-pre>
        export function getPageScrollLeft() {
            let a = document;
            return a.documentElement.scrollLeft || a.body.scrollLeft;
        }
            </pre>
        </div>
        <div>
            <h5 id="launchFullscreen">开启全屏</h5>
            <pre v-pre>
        /**
        * @param {*} element
        */
        export function launchFullscreen(element) {
            if (element.requestFullscreen) {
                element.requestFullscreen()
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen()
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen()
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullScreen()
            }
        }
            </pre>
        </div>
        <div>
            <h5 id="exitFullscreen">关闭全屏</h5>
            <pre v-pre>
        export function exitFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen()
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen()
            }
        }
            </pre>
        </div>
        <div>
            <h5 id="getScrollPosition">返回当前滚动条位置</h5>
            <pre v-pre>
        export const getScrollPosition = (el = window) => ({
            x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
            y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
        });
            </pre>
        </div>
        <div>
            <h5 id="smoothScroll">滚动到指定元素区域</h5>
            <pre v-pre>
        export const smoothScroll = element =>{
            document.querySelector(element).scrollIntoView({
                behavior: 'smooth'
            });
        };
            </pre>
        </div>
        <div>
            <h5 id="scrollToTop">平滑滚动到页面顶部</h5>
            <pre v-pre>
        export const scrollToTop = () => {
            const c = document.documentElement.scrollTop || document.body.scrollTop;
            if (c > 0) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, c - c / 8);
            }
        };
            </pre>
        </div>
        <div>
            <h5 id="httpsRedirect">http跳转https</h5>
            <pre v-pre>
        export const httpsRedirect = () => {
            if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
        };
            </pre>
        </div>
        <div>
            <h5 id="bottomVisible">检查页面底部是否可见</h5>
            <pre v-pre>
        export const bottomVisible = () =>{
            return document.documentElement.clientHeight + window.scrollY >=
                (document.documentElement.scrollHeight || document.documentElement.clientHeight);
        };
            </pre>
        </div>
        <div>
            <h5 id="openWindow">打开一个窗口</h5>
            <pre v-pre>
        /**
        * @param { string } url
        * @param { string } windowName
        * @param { number } width
        * @param { number } height
        */
        export function openWindow(url, windowName, width, height) {
            var x = parseInt(screen.width / 2.0) - width / 2.0;
            var y = parseInt(screen.height / 2.0) - height / 2.0;
            var isMSIE = navigator.appName == "Microsoft Internet Explorer";
            if (isMSIE) {
                var p = "resizable=1,location=no,scrollbars=no,width=";
                p = p + width;
                p = p + ",height=";
                p = p + height;
                p = p + ",left=";
                p = p + x;
                p = p + ",top=";
                p = p + y;
                window.open(url, windowName, p);
            } else {
                var win = window.open(
                    url,
                    "ZyiisPopup",
                    "top=" +
                    y +
                    ",left=" +
                    x +
                    ",scrollbars=" +
                    scrollbars +
                    ",dialog=yes,modal=yes,width=" +
                    width +
                    ",height=" +
                    height +
                    ",resizable=no"
                );
                eval("try { win.resizeTo(width, height); } catch(e) { }");
                win.focus();
            }
        }
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
                    {name:'返回当前url',id:'currentURL'},
                    {name:'获取url参数',id:'getUrlParam'},
                    {name:'获取窗口可视范围高度',id:'getClientHeight'},
                    {name:'获取窗口可视范围宽度',id:'getPageViewWidth'},
                    {name:'获取窗口宽度',id:'getPageWidth'},
                    {name:'获取窗口尺寸',id:'getViewportOffset'},
                    {name:'获取滚动条距顶部高度',id:'getPageScrollTop'},
                    {name:'开启全屏',id:'launchFullscreen'},
                    {name:'关闭全屏',id:'exitFullscreen'},
                    {name:'获取滚动条距左边的高度',id:'getPageScrollLeft'},
                    {name:'返回当前滚动条位置',id:'getScrollPosition'},
                    {name:'滚动到指定元素区域',id:'smoothScroll'},
                    {name:'平滑滚动到顶部',id:'scrollToTop'},
                    {name:'http跳转https',id:'httpsRedirect'},
                    {name:'检查底部是否可见',id:'bottomVisible'},
                    {name:'打开一个窗口',id:'openWindow'},
                    {name:'自适应页面（rem）',id:'AutoResponse'},
                ]
            }
        }
    }
</script>

