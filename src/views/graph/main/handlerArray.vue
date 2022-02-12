<template>
    <div class="relative">
        <div>
            <h4>处理数组</h4>
            <p>
                d3.js提供了一大批计算函数方便我们在计算的时候调用，下面先介绍常用的方法：
            </p>
            <ul>
                <li><b class="Dblue">Statistics(统计类方法)</b></li>
                <li>d3.max(array[,accessor])：返回数组最大值</li>
                <li>d3.min(array[,accessor])：返回数组最小值</li>
                <li>d3.extent(array[,accessor])：返回数组最小值和最大值</li>
                <li>d3.sum(array[,accessor])：返回数组总和，若数组为空，则返回0</li>
                <li>d3.mean(array[,accessor])：返回数组平均值，若数组为空，则返回undefind</li>
                <li>d3.median(array[,accessor])：返回数组的中位数. 如果数组为空则返回 undefined.(指定了 accessor除外)</li>
                <li>d3.quantile(array[,accessor])：返回指定 有序数组 的 p-分位数, p 是 [0, 1] 之间的小数.</li>
                <li>d3.variance(array[,accessor])：返回数组方差</li>
                <li>d3.deviation(array[,accessor])：返回数组的标准差</li>
                <li><b class="Dblue">Search</b></li>
                <li>d3.scan(array[,accessor])：返回对指定的数组执行线性扫描, 根据指定的比较器返回最小元素的索引(类似d3.min())</li>
                <li>d3.bisectLeft(array[,accessor])：返回数组做左边的位置</li>
                <li>d3.bisectRight(array[,accessor])：返回数组最右边位置</li>
                <li>d3.bisect(array[,accessor])：和bisectRight()一样</li>
            </ul>
        </div>
        <div>
            <h4>数值比较</h4>
            <pre>
        let number=[30,10,50,40,20]   
        let maxAcc=d3.max(number)   ===>50    
        let maxAcd=d3.max(number,(d)=>{
            return d*3
            })   ===>150    
        let minAcc=d3.min(number)   ===>10
        let minAcd=d3.min(number,(d)=>{
            return d+3
            })   ===>13
        let extendAcc=d3.extend(number) ===>[10,50]
        let extendAcd=d3.extend(number,(d)=>{
            return d%7
            })  ===>[]
            </pre>
        </div>
        <div>
            <h4>和|平均值|中间值</h4>
            <pre>

            </pre>
        </div>
        <div>
            <h4>比较位置</h4>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    mounted(){
        console.log('====================================');
    },
    methods:{
    }
}
</script>


