<template>
    <div class="relative">
        <location :list='list'/>
        <div>
            <h4>处理数据</h4>
            <p>
                将数据绑定后我们经常要将数据进行处理，常用的方法有：filter()、each()、sort()
            </p>
        </div>
        <div>
            <h4 id="filter">selection.filter()</h4>
            <pre>
        d3.selectAll('circle')
        .filter(function(d, i) { // filter返回偶数的元素
            return i % 2 === 0;
        })
        .style('fill', 'orange');// 偶数元素作色为橘色

        d3.selectAll('circle')
        .filter(function(d, i) { // filter返回奇数的元素
            return i % 2 === 1;
        })
        .style('fill', 'blue'); // 奇数元素作色为蓝色        
            </pre>
        </div>
        <div>
            <h4 id="each">selection.each()</h4>
            <p>
                .each 允许对每个selection中的每个元素执行一段函数功能（同样传入d,i, this参数可以使用）
            </p>
            <pre>
        function addNumberedCircle(d, i) {
            d3.select(this)
                .append('circle')
                .attr('r', 40);

            d3.select(this)
                .append('text')
                .text(i + 1)
                .attr('y', 50)
                .attr('x', 30);
        }

        d3.selectAll('g.item')
        .each(addNumberedCircle); 


        d3.selectAll('circle')
        .each(function(d, i) {
            var odd = i % 2 === 1;
            d3.select(this)
            .style('fill', odd ? 'orange' : '#ddd')  // 对奇偶元素使用不用的颜色和半径大小
            .attr('r', odd ? 40 : 20);
        });    
            </pre>
            <p>还可以在绑定数据Data的时候使用each()给每个数据添加属性，在text()后使用此属性</p>
            <pre>
        let attrData = [{name:'hello'},{name:'world'}]        
        let p=d3.selecte('body').selectAll('p')        
        p.data(attrData)
        .each((d,i)=>{
            d.age=20+i
        })
        .text((d,i)=>{
            return d.name+'.'+d.age
        })
            </pre>
        </div>
        <div>
            <h4 id="call">selection.call()</h4>
            <p>
                .call 允许对 selection itself. 执行相应的函数功能
            </p>
            <pre>
        function addNumberedCircle(selection) {
            selection
                .append('circle')
                .attr('r', 40);

            selection
                .append('text')
                .text(function(d, i) {
                return i + 1;
                })
                .attr('y', 50)
                .attr('x', 30);
        }

        d3.selectAll('g.item')
        .call(addNumberedCircle); 
            </pre>
        </div>
        <div>
            <h4 id="sort">selection.sort()</h4>
            <p>
                数据排序经常会用到在柱形统计图，排序高低。
            </p>
            <pre>
        let stArr= [
                {"name":"Andy","score":37},
                {"name":"Beth","score":39},
                {"name":"Craig","score":31},
            ]    
        d3.selectAll('.person')
        .data(stArr)
        .sort(function(a, b) {
            return b.score - a.score;
        });    

        比较函数本身有两个参数，通常为a,b分别代表了被比较的两个元素上绑定的datam.
        如果比较函数返回负值，那么a将在b之前，如果是正，则a放在b之后。
            </pre>
            <p>
                在上述的方法外，d3.js还提供了方法d3.ascending和d3.descending。
            </p>
            <div>
                d3.ascending(a,b):递增函数，a小于b，返回-1；a大于b，返回1；值相等返回0。
            </div>
            <div>
                d3.descending(a,b):递增函数，a小于b，返回1；a大于b，返回-1；值相等返回0。
            </div>
            <pre>
        let number=[22,35,12,36,7,88,65]
        number.sort(d3.ascending)
        console.log(number) ===>[7,12,22,35,36,65,88]

        number.sort(d3.descending)
        console.log(number) ===>[88,65,36,35,22,12,7]
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:'handlerData',
    components:{
        location:()=>import('@/components/location/index')
    },
    data(){
        return{
            list:[
                {name:'filter()',id:'filter'},
                {name:'each()',id:'each'},
                {name:'call()',id:'call'},
                {name:'sort()',id:'sort'},
            ]
        }
    },
    mounted(){
    },
    methods:{
    }
}
</script>


