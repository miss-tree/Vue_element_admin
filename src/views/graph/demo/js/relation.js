// 'use strict'
 class relation{
    constructor(options){
      
        // 指定卡片大小
        const nodeRect = { width:95,height:95}
        this.nodes=[]
        this.relation=[]
        this.combinboxs=[]
		this.active=[]

        const containerEl = document.querySelector(options.el)
        this.readonly = false
        if(options.expandNode && typeof(options.expandNode)==='function' ){
            this.readonly=true
        }

        
		
		
		
		
		
        
			


















        this.dispatch=d3.dispatch('drawGraph')    

        this.dispatch.on('drawGraph',(nodesList,relationShip)=>{
            if(nodesList){
                //将数据按矩形排列 4*n 设置距离 top:90  left:80 每个节点间隔100
                let row = Math.ceil(Math.abs(nodesList.length/4)) //看数据节点可以拍几排
                for (let i = 0; i < nodesList.length; i++) {
                    nodesList[i].translateX = 80 +((~~(i+1-1)%4)*100)
                    nodesList[i].translateY = 90 +(~~((i+1-1)/4)*100)
                    this.nodes.push(nodesList[i])
                }
            }
            drawCard()
            drawLine()
        })


        // 渲染节点和线条
        const drawCard = ()=>{

            const divHtml=`<div><img src='../image/man.png'></div>`
            // const matrix = [
            //     11975,  5871, 8916, 2868,
            //     // [ 1951, 10048, 2060, 6171],
            //     // [ 8010, 16145, 8090, 8045],
            //     // [ 1013,   990,  940, 6907]
            //   ];
              
            //   graph.select("g.topGroup")
            //     .append("g")
            //     .selectAll("g")
            //     .data(matrix)
            //     .join("text")
            //     .selectAll("text")
            //     .text(d)
            // console.log('ddd===>',this.nodes)
            //  graph.select('g.topGroup').append('g').attr('class','cardNode')
             const cardGroup =graph.select('g.graphLayer>g').data(this.nodes)
            // cardGroup.data(this.nodes)//.classed('cardNode',true)
            // graph.selectAll('g.cardNode').remove()
            cardGroup.exit().remove()
            cardGroup.enter()
                    .insert('g')
                    // .append('g')
                    .attr('class','cardNode')
            // card.enter().append('g')
            //     .attr('class','cardNode')
            //     .attr('transform',d=>`translate(${d.translateX},${d.translateY})`)
            //     .attr('id',d=>d.id)
            //     .append('foreignObject')
            //     .attr('class','card-info')
            //     .each(d=>{
            //         let key=`g.cardNode#${d.id}>foreignObject.card-info`
            //         let foreignElement=graph.select(key).node()

            //         if(!foreignElement) return
            //         foreignElement.innerHTML= divHtml
            //     })

        };

        const drawLine = ()=>{

        }
        /** ========================================= 初始化=============================================== */
        let sssss = document.querySelector('#graph')
        console.log('sssssssssssss===>',sssss);
        const svgCavans = d3.select(`${options.el}`).append('svg')
                        .attr('xmlns',d3.namespaces.svg)
                        .attr('xmlns.xlink',d3.namespaces.xlink)
                        .attr('height',800)
                        .call(zoom)
                        .on('dblclick.zoom',null)
                        // .on('contextmenu',addGraphContexMenu)
        svgCavans.append('defs')
        svgCavans.append('g').attr('id','watermark')

        const graph=svgCavans.append('g').attr('id','graphLayer') 
        graph.append('g').classed('bottomGroup',true)
        graph.append('g').classed('lineGroup',true)
        graph.append('g').classed('topGroup',true)
        

        /** ========================================= 初始化=============================================== */

    }


    /**  ============================================ 对外公共方法============================================= */






    /**
     * param {Array}    nodes 节点数据
     * param {Array}    relation 连线数据
     */
    drawNode(nodes,relation){
        this.dispatch.call('drawGraph',this,nodes,relation)
    }

    /**  ============================================ 对外公共方法============================================= */

}
export default relation