<template>
  <div>
    <location :list='list' />
    <div>
      <h4 id="isAccountNumber">鼠标</h4>
      <p>
        鼠标事件是用来响应鼠标操作的，例如：单击、双击、移动等。
        在操作上响应的事件有：click、mouseover、mouseout、mousemove、
        mousedown、mouseup、dbclick
      </p>
      <pre>
    selection.on('mousemove',()=>{})        
    selection.on('mouseleave',()=>{})        
            </pre>
    </div>
    <div>
      <h4 id="status">键盘</h4>
      <ul>
        <li>d3.zoom()：创建缩放行为</li>
        <li>zoom()：将缩放行为应用于选定图元(svg)</li>
        <li>zoom.transform()：更改选定元素的变换</li>
        <li>zoom.translateBy()：转换选定元素的变换</li>

        <li><i class="red">*</i>
          <a href="https://github.com/d3/d3/blob/master/API.md#zooming-d3-zoom">
            更多参考API
          </a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'keynoard',
    components: {
      location: () => import('@/components/location/index')
    },
    data() {
      return {
        haveSvg: false,
        locationUrl: '',
        curveVal: 'Cardinal',
        curveSvg: null,
        list: [{
            name: '鼠标',
            id: 'isAccountNumber'
          },
          {
            name: '键盘',
            id: 'status'
          },
          // {name:'line()使用',id:'append'},
        ],
      }
    },
    mounted() {
      var url = window.location //.href;
      let gloab = process.env.VUE_APP_BASE_URL
      this.locationUrl = gloab + '/demo?page=svgjs'
    },
    methods: {
      createSvg() {

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
    height: 300px;
  }

</style>
