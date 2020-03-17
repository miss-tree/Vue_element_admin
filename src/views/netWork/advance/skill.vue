<template>
    <div>
        <location :list='list'/>
        <div>
            <h5 id="random">数组随机打乱</h5>
            <pre v-pre>
        function disOrder(ary) {
            for (let i = 0; i &lt; ary.length; i++) {
                let randomIndex = Math.floor(Math.random() * ary.length);
                swap(ary, i, randomIndex);
            }
        }

        function swap(ary, a, b) {
            let temp = ary[a];
            ary[a] = ary[b];
            ary[b] = temp;
        }
        let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        disOrder(ary);

        console.log(ary);
            </pre>
        </div>
        <div>
            <h5 id="replace">数字增加“逗号”分隔</h5>
            <pre v-pre>
        function parseNumber(num) {
            if (!num) return "";
            return num.replace(/(\d)(?=(\d{3})+(\.|$))/g, "$1,");
        }
        console.log(parseNumber('123456789.012'))       =>123,456,789.012
            </pre>
        </div>
        <div>
            <h5 id="CapsLock">是否按下了大写键</h5>
            <pre v-pre>
        document.addEventListener('click', function (e) {
            console.log(e.getModifierState('CapsLock'));
        }, false);

            </pre>
        </div>
    </div>
</template>

<script>
    export default {
        name:"skill",
        components:{
            location:()=>import('@/components/location/index')
        },
        data(){
            return {
                list:[
                    {name:'数组随机打乱',id:'random'},
                    {name:'数字增加“逗号”分隔',id:'replace'},
                    {name:'是否按下了大写键',id:'CapsLock'},
                ]
            }
        }
    }
</script>

