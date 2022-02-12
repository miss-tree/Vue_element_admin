<template>
  <div>
    <location :list='list' />
    <div id="graph" :style="{'height':svgHeight+'px'}">
      <div id="thumbel"></div>
    </div>
    <div>
      <h4 id="isAccountNumber">使用文档</h4>
      <p>
        学过svg都知道画线段的时候需要line标签，在d3中有类似之前html笔记中的
        <a :href="locationUrl" target="_blank">svg.js</a> 里面
        SVG('ID').size(300,300).line(0, 0, 100, 150)和
        SVG('ID').size(300,300).path('M100,200L300,400')
        专门创建方法非常相似
      </p>
    </div>
  </div>
</template>

<script>
  // import relation from './js/relation'
  import relation from './js/graphAll'
  import {
    types
  } from '@babel/core'
  export default {
    name: 'relation',
    components: {
      location: () => import('@/components/location/index')
    },
    data() {
      return {
        locationUrl: '',
        svgHeight: 400,
        graph: null,
        curveVal: 'Cardinal',
        list: [{
            name: '线段生成器',
            id: 'demo'
          },
          {
            name: '使用文档',
            id: 'isAccountNumber'
          },
        ],
      }
    },
    mounted() {
      this.svgHeight = window.innerHeight - 170
      var url = window.location //.href;
      let gloab = process.env.VUE_APP_BASE_URL
      this.locationUrl = gloab + '/demo?page=svgjs'
      this.drawGraph()
    },
    methods: {
      drawGraph() {
        this.graph = new relation({
          el: "#graph",
          //   hawkEye: "#thumbel", //鹰眼
          nodeTip: this.createNodeTip,
          expandAction: this.expandNode
        })
        const nodes = [{
            id: 'node1',
            name: '张衡',
            sex: '男',
            levl: 1,
            primary: true,
            elements: [{
                type: 'QQ',
                value: '846611333844'
              },
              {
                type: '手机',
                value: '846611333844'
              },
              {
                type: '身份证',
                value: '6548246971354687'
              },
            ]
          },
          {
            id: 'node2',
            name: '王朔',
            sex: '男',
            levl: 1,
            primary: true,
            elements: [{
              type: '银行账号',
              value: '6222036469987233153'
            }, ]
          },
          {
            id: 'node3',
            name: '王晶晶',
            sex: '女',
            levl: 1,
            primary: true,
            elements: [{
                type: 'QQ',
                value: '56846221569'
              },
              {
                type: '手机',
                value: '1395468245'
              },
            ]
          },
          {
            id: 'node4',
            name: '黎树',
            sex: null,
            levl: 2,
            primary: true,
            elements: [{
                type: '手机',
                value: '65549871302336'
              },
              {
                type: '微信',
                value: 'ls59489966456'
              },
            ]
          }
        ]
        const relations = [{
            id: 're001',
            sourceId: 'node1',
            targetId: 'node4',
            remark: '资金交易',
            directed: 'true',
            description: '一共转了5笔'
          },
          {
            id: 're002',
            sourceId: 'node1',
            targetId: 'node4',
            remark: '朋友',
            directed: 'true',
            description: '初中开始相识'
          },
          {
            id: 're003',
            sourceId: 'node2',
            targetId: 'node3',
            remark: '同伙',
            directed: 'true',
            description: '多次盗窃'
          },
          {
            id: 're004',
            sourceId: 'node2',
            targetId: 'node4',
            remark: '资金交易',
            directed: 'true',
            description: '一共转了5笔'
          },
          {
            id: 're005',
            sourceId: 'node1',
            targetId: 'node3',
            remark: '前女友',
            directed: 'true',
            description: '处了3年'
          },
          {
            id: 're006',
            sourceId: 'node3',
            targetId: 'node4',
            remark: '情侣',
            directed: 'true',
            description: '现已相处1年'
          },
        ]
        const combinboxs = []
        let data = {
          nodes,
          relationships: relations,
          combinboxs
        }
        this.graph.drawNode(data)
      }
    }
  }

</script>
<style lang="scss" scoped>
  .svg {
    width: 100%;
    height: 100px;
  }

  .container {
    width: 100%;
    height: 200px;
  }

</style>
