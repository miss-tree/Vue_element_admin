<template>
    <div>
        <div>
            <h4>Grid网格布局</h4>
            <p>
                以前早就听说Grid网格布局的大名了，但是发布比较晚，好像是2015年发布的，但是支持的浏览器都在2017年左右。
                以前不用是怕出兼容问题，手机电脑基本都会用个三五年。好了，现在都2020了，可以放心的用下了。
                其实 Grid 和弹性盒子还是有些相似的，自动铺满，都可以对子项设置。
                Grid作为一个二维的栅格系统，由若干列（column）和行（row）构成。Grid 的最大优势还是栅格布局，
                大大减了对boostrap的依赖(虽然大多数情况用的是UI框架，自带)，能完成对不同情况的布置。
            </p>
            <p>
                感谢阮一峰技术分享，下面不够详细可以看他的博客，
                <a href="http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html" target="_blank" rel="noreferrer">
                    Grid博客地址
                </a>
            </p>
        </div>
        <div>
            <h5>初识 Grid</h5>
            <pre>
        .contain {
            /*display: inline-grid;*/ 此方法会和其他行内元素并列
            display: grid;
            grid-template-columns: 50px 50px 50px;  /* 三列 */
            /*下面是六列,宽分别是100px,20px,80px,100px,20px,80px*/
            /*grid-template-columns: repeat(2, 100px 20px 80px);*/
            /*每列宽100px,然后自动填充，不管下面设置了几行，直到容器不能放置更多的列显示子项*/
            /*grid-template-columns: repeat(auto-fill, 100px);*/
            /*第一列是第二列的一半*/
            /*grid-template-columns: 1fr 2fr;*/
            /*minmax()它接受两个参数，分别为最小值和最大值。*/
            /*grid-template-columns: 1fr 1fr minmax(100px, 1fr);*/
            /*grid-row-gap属性设置行与行的间隔（行间距），grid-column-gap属性设置列与列的间隔（列间距）*/
            /*grid-row-gap: 20px;
            grid-column-gap: 20px;*/
            /*上面的合并写法grid-gap: &lt;grid-row-gap&gt; &lt;grid-column-gap&gt;*/
            grid-gap: 10px 20px;
            /*两行 高分别是50px,50px*/
            grid-template-rows: 50px 50px 50px;
            /*表示三行*/
            /*grid-template-rows: repeat(3, 100px);*/
            /*grid-template-rows: 50px fr 2fr;*/
        }      
        .contain{
            /*竖向排列*/
            grid-auto-flow :column;
            /*横向排列*/
            grid-auto-flow :row;
            /*表示"先行后列"，并且尽可能紧密填满，尽量不出现空格*/
            grid-auto-flow: row dense;
            /*start：对齐单元格的起始边缘。
            end：对齐单元格的结束边缘。
            center：单元格内部居中。
            stretch：拉伸，占满单元格的整个宽度（默认值）.*/
            justify-items:  center |stretch;
            /*start | end | center | stretch*/
            align-items: center| stretch;
            /*place-items属性是align-items属性和justify-items属性的合并简写形式
            place-items: &lt;align-items&gt; &lt;justify-items&gt;;*/
            /*指定元素位置*/
            grid-template-areas: 'a b c' 'd e f' 'g h i';
        }
        .item-1{
            /*从第一王国开始占据*/
            grid-column-start: 1;
            /*长度到第三个网格前,就是占据两个网格*/
            grid-column-end: 3;
            /*grid-column: 1 / 3;*/
            /*或以关键字span 跨越列数来表示：grid-column-start: span 2;//表示跨越两列*/
            /*指定元素位置*/
            grid-area: e;
        }
            </pre>
            <p>
                1.在grid布局中以列优先为准：
            例如：有九个子项，设置列数目为两个，不管设置了几行，
            都会以一行两列的方式排列，不够行数自动添加，多了不管
            2.如果设置好了列，列*行的数目小于子项，
            那么未设置的行高度以内容撑出主
            3.justify-items、align-items如果子项内容不满，添加了背景色容易看出来
            </p>
            <span class="G_red">注意</span>
            <ul>
                <li>设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效。</li>
                <li>
                    区域的命名会影响到网格线，每个区域的起始网格线，会自动命名为区域名-start，
                    终止网格线自动命名为区域名-end。比如，区域名为header，
                    则起始位置的水平网格线和垂直网格线叫做header-start，
                    终止位置的水平网格线和垂直网格线叫做header-end。
                </li>
                <li>
                    <a href="http://js.jirengu.com/xipuy/2/edit?html,css,output" target="_blank" rel="noreferrer">
                    demo地址
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <h5>圣杯布局</h5>
            <p>
                这个布局还是比较适合响应式布局的，根据屏幕大小布局。
                有明显的 boostrap 特点，
                <a href="http://js.jirengu.com/yihef/2/edit?html,css,output" target="_blank" rel="noreferrer">
                    demo地址
                </a>
            </p>
            <pre>
        .container {
            display: grid;
            grid-template-columns: 150px auto 150px;
            grid-gap: 1em;
        }
        header, footer {
            grid-column: 1 / 4;
        }
        header,  aside,  article,  footer {
            background: #eaeaea;
            display: grid;
            place-content: center;
            height: 17vh;
        }
        @media all and (max-width: 700px) {
            aside, article {
                grid-column: 1 / 4;
            }
        }        
            </pre>
        </div>   
    </div>
</template>

<script>
    export default {
        name:"gridLayout",
    }
</script>

