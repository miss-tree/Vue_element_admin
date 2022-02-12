<template>
    <div>
        <location :list='list'/>
        <div>
            <h5 id="formatMoney">金钱格式化，三位加逗号</h5>
            <pre v-pre>
        /**
        *  @param { number } num
        */
        export const formatMoney = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            </pre>
        </div>
        <div>
            <h5 id="difference">数组获取不同</h5>
            <pre v-pre>
        /**
        * 查找两个给定数组的差异，查找出前者数组在后者数组中不存在元素。
        * @param { string } value
        */
        export const  difference = (a, b) => {  
                const s = new Set(b);
                return a.filter(x => !s.has(x));
            };
        difference([1, 2, 3], [1, 2, 4]); // [3]
            </pre>
        </div>
        <div>
            <h5 id="byteSize">字节长度</h5>
            <pre v-pre>
        /**
        * 返回字符串的字节长度
        * @param { string } value
        */
        export const byteSize = str => new Blob([str]).size;
        byteSize('Hello World'); // 11
            </pre>
        </div>
        <div>
            <h5 id="isChineseCharacter">验证中文/汉字</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isChineseCharacter = value => 
        /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]
            |[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]
            |\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]
            |\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]
            |\uD87A[\uDC00-\uDFE0])+$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isDecimal">验证小数</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isDecimal = value => /^\d+\.\d+$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isNumber">验证数字</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isNumber = value => /^\d{1,}$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isNumAndStr">验证数字和字母组成</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isNumAndStr = value => /^[A-Za-z0-9]+$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isEnglish">验证英文字母</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isEnglish = value => /^[a-zA-Z]+$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isCapital">验证大写英文字母</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isCapital = value => /^[A-Z]+$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="isLowercase">验证小写英文字母</h5>
            <pre v-pre>
        /**
        * @param { string } value
        */
        export const isLowercase = value => /^[a-z]+$/g.test(value);
            </pre>
        </div>
        <div>
            <h5 id="getTreeData">递归生成树形结构</h5>
            <pre v-pre>
        export function getTreeData(data, pid, pidName = 'parentId', idName = 'id', childrenName = 'children', key) {
            let arr = [];
            for (let i = 0; i &lt; data.length; i++) {
                if (data[i][pidName] == pid) {
                    data[i].key = data[i][idName];
                    data[i][childrenName] = getTreeData(data, data[i][idName], pidName, idName, childrenName);
                    arr.push(data[i]);
                }
            }
            return arr;
        }
            </pre>
        </div>
        <div>
            <h5 id="createTree">根据pid生成树形结构</h5>
            <pre v-pre>
        /**
        *  @param { object } items 后台获取的数据
        *  @param { * } id 数据中的id
        *  @param { * } link 生成树形结构的依据
        */
        export const createTree = (items, id = null, link = 'pid') =>{
            items.filter(item => item[link] === id).map(item => ({ ...item, children: createTree(items, item.id) }));
        };
            </pre>
        </div>
        <div>
            <h5 id="inArray">查询数组中是否存在某个元素并返回元素第一次出现的下标</h5>
            <pre v-pre>
        /** 
        * @param {*} item 
        * @param { array } data
        */
        export function inArray(item, data) {
            for (let i = 0; i &lt; data.length; i++) {
                if (item === data[i]) {
                    return i;
                }
            }
            return -1;
        }
            </pre>
        </div>
        <div>
            <h5 id="countOccurrences">数组中某元素出现的次数</h5>
            <pre v-pre>
        /**
        * @param { array } arr
        * @param {*} value
        */
        export function countOccurrences(arr, value) {
            return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
        }
        countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
            </pre>
        </div>
        <div>
            <h5 id="tco">递归优化（尾递归）</h5>
            <pre v-pre>
        /**
        * @param { function } f
        */
        export function tco(f) {
            let value;
            let active = false;
            let accumulated = [];

            return function accumulator() {
                accumulated.push(arguments);
                if (!active) {
                    active = true;
                    while (accumulated.length) {
                        value = f.apply(this, accumulated.shift());
                    }
                    active = false;
                    return value;
                }
            };
        }
            </pre>
        </div>
        <div>
            <h5 id="toString">转化为字符串</h5>
            <pre v-pre>
        /**
        * @param { * } obj 将要转化的数组/对象
        */
        export function numberToString(obj){
            if(obj instanceof Array){
                let arr = []
                for (let i=0;i&lt;obj.length;i++){
                    arr[i]=numberToString(obj[i])
                }
                return arr
            }else if(typeof obj ==='object'){
                for( let p in obj){
                    obj[p] = numberToString[obj[p]]
                }
            } else if (typeof obj ==='number'){
                obj = obj + ''
            }
            return obj
        }
            </pre>
        </div>
        <div>
            <h5 id="elementContains">检查是否包含子元素</h5>
            <pre v-pre>
        /**
        * @param { element } parent
        * @param { element } child
        * 例：elementContains(document.querySelector('head'), document.querySelector('title')); // true
        */
        export const elementContains = (parent, child) => parent !== child && parent.contains(child);
            </pre>
        </div>
        <div>
            <h5 id="add">加法/减法/除法/乘法函数</h5>
            <pre v-pre>
        /**
        * @param { number } arg1
        * @param { number } arg2
        */
        export function add(arg1, arg2) {
            let r1, r2, m;
            try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
            try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
            m = Math.pow(10, Math.max(r1, r2));
            return (arg1 * m + arg2 * m) / m
        }

        /**
        * @param { number } arg1
        * @param { number } arg2
        */
        export function sub(arg1, arg2) {
            let r1, r2, m, n;
            try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
            try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
            m = Math.pow(10, Math.max(r1, r2));
            n = (r1 >= r2) ? r1 : r2;
            return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
        }

        /**
        * @param { number } num1
        * @param { number } num2
        */
        export function division(num1,num2){
            let t1,t2,r1,r2;
            try{
                t1 = num1.toString().split('.')[1].length;
            }catch(e){
                t1 = 0;
            }
            try{
                t2=num2.toString().split(".")[1].length;
            }catch(e){
                t2=0;
            }
            r1=Number(num1.toString().replace(".",""));
            r2=Number(num2.toString().replace(".",""));
            return (r1/r2)*Math.pow(10,t2-t1);
        }

        /**
        * @param { number } num1
        * @param { number } num2
        */
        export function mcl(num1,num2){
            let m=0,s1=num1.toString(),s2=num2.toString();
            try{m+=s1.split(".")[1].length}catch(e){}
            try{m+=s2.split(".")[1].length}catch(e){}
            return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
        }

            </pre>
        </div>
    </div>
</template>

<script>
    export default {
        name:"toolusually",
        components:{
            location:()=>import('@/components/location/index')
        },
        data(){
            return {
                list:[
                    {name:'金钱格式化',id:'formatMoney'},
                    {name:'数组获取不同',id:'isChineseName'},
                    {name:'字节长度',id:'byteSize'},
                    {name:'验证中文',id:'isChineseCharacter'},
                    {name:'验证小数',id:'isDecimal'},
                    {name:'验证数字',id:'isNumber'},
                    {name:'验证数字和字母组成',id:'isNumAndStr'},
                    {name:'验证英文字母',id:'isEnglish'},
                    {name:'验证大写英文字母',id:'isCapital'},
                    {name:'验证小写英文字母',id:'isLowercase'},
                    {name:'递归生成树形结构',id:'getTreeData'},
                    {name:'根据pid生成树形结构',id:'createTree'},
                    {name:'数组是否存在元素',id:'inArray'},
                    {name:'元素出现的次数',id:'countOccurrences'},
                    {name:'递归优化',id:'tco'},
                    {name:'转化为字符串',id:'toString'},
                    {name:'是否包含子元素',id:'elementContains'},
                    {name:'加法/减法/除法/乘法函数',id:'add'},
                ]
            }
        }
    }
</script>

