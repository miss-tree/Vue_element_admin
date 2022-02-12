<template>
    <div class="relative">
        <div>
            <h4>绑定数据</h4>
            <p>
                选择集和绑定数据通常是一起使用的,d3能将数据绑定到 DOM 上,
                通过以下两个函数来绑定数据的:
            </p>
            <div>
                slection.datum()：绑定<span class="red">一个数据</span>到选择集上
            </div>
            <div>
                slection.data()：绑定<span class="red">一个数组</span>到选择集上，数组的各项值分别与选择集的各元素绑定
            </div>
        </div>
        <div>
            <h4>datum()</h4>
            <p>
                datum（）方法用于为HTML文档中的单个元素设置值，
                或将选择的元素都设置为添加同个数据
            </p>
            <pre>
        let p = d3.selectAll("p");
                .datum('hello world');
                .text(function(d){      // d 为datum()内绑定的数据
                    return "元素绑定的数据是 " + d;
                }); 
        ==>  每个P元素输出的数据为：元素绑定的数据是hello world  

        let box = d3.selectAll("div");
                .datum('hello world');
                .text('文字')
                .append('span')
                .text(function(d){      // d 为datum()内绑定的数据
                    return "span内容 " + d;
                });  
        上面每个div输出方式为：&lt;div&gt;文字&lt;span&gt;span内容hello world&lt;/span&gt;&lt;/div&gt; 

        let grid = d3.selectAll("div");
                .append('span')
                .text('文字')
                .datum('hello world');
                .text(function(d){      // d 为datum()内绑定的数据
                    return "span内容 " + d;
                });     
        上面每个div输出方式为：&lt;div&gt;&lt;span&gt;span内容hello world&lt;/span&gt;&lt;/div&gt; 
        (因为两个text重复赋值，后面的覆盖前面的)

        排序不一样，输出的方式也会有很大出入    
            </pre>
        </div>
        <div>
            <h4>data()</h4>
            <pre>
        &lt;span&gt;&lt;/span&gt;  
        &lt;span&gt;&lt;/span&gt;

        let spread=d3.selectAll('span')
                .data(['hello','world'])   
                .text((d,i)=>{
                    return `第${i}个元素是${d}`
                })
        output: 第0个元素是hello         
                第1个元素是world    

        // data()绑定第二个参数  键函数里只有一个语句return d.id。表示使用数组项的id属性作为键
        let arr=[{ id: 6 , name:"张三" },{ id: 9 , name:"李四" },{ id: 3 , name:"王五" }]    
        let newMe=d3.selectAll('div') 
                .data(arr,d=>d.id)
                .text(d=>{
                    return d.id+':'+d.name
                })
        output:   6:张三       
                  9:李四      
                  3:王五      
            </pre>
        </div>
        <div>
            <p>
                在绑定数据的时候不会刚刚合适选择元素的个数和数组数据长度相等。
                可能会出现这样的情况，1、元素个数大于数据长度，2、元素个数小于
                数据长度。在这样的情况下就需要selection.enter()和selection.exit()
                核心函数。
            </p>
            <h5>enter()</h5>
            <pre>
        let threeDiv=d3.selectAll('div')
            .data(['good' ,'good', 'study' ,'day', 'day' ,'up'])
            .enter()
            .append('div')
            .text((d,i)=>{
                return d        ===>直接让6个div显示上面数组的数据
            })  

        &lt;div class='.sp'&gt;&lt;/div&gt;
        let spread=d3.selectAll('.sp')
                .data(['hello','world'])  
                .text('文字')
                .append('span')
                .text((d,i)=>{
                    return `add ${d}`
                }) 
    ===>&lt;div&gt;文字&lt;span&gt;add hello&lt;/span&gt;&lt;/div&gt;     
        因为选择级是div，添加的只能是div，否则只能是元素级内部添加，而且这样data()数据也不能读取完'world'  

        //在选择级是一个空集的情况，比如DOM没有P元素的情况
        let nullP=d3.selectAll('p')
                  .data([20,30,44])
                  .enter()
                  .append('p')          ===>若是添加span的话，因为nullP为空级，没办法在一个元素添加span
                  .text((d,i)=>{
                      return 'add'+d
                  })                 
            </pre>
            <h5>exit()</h5>
            <p>
                在使用selection.enter()添加数据元素用到.append()或.insert()方法。
                那么在元素比数组多的时候就要将多余的元素去掉。selection.exit()和
                selection.remove()方法结合使用。
            </p>
            <pre>
        &lt;p&gt;&lt;/p&gt;     有5个p标签   
        plet spread=d3.selectAll('p')
                .data(['hello','world'])  
                .text((d,i)=>{
                    return `元素是${d}`
                })
                .exit()
                .remove()       
    ===>&lt;p&gt;hello&lt;/p&gt;    将多余的元素清除，若不使用exit()和remove()将有3个多余的p标签  
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            locationUrl:''
        }
    },
    mounted(){
    },
    methods:{
        linkTo(e){
            let that=this
            e.preventDefault()
            console.log(that.locationUrl);
            window.open(that.locationUrl)
        }
    }
}
</script>


