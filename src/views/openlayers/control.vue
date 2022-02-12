<template>
  <div class="wrapper">
    <location :list='list' />
    <div>
      <h4 id="isAccountNumber">全屏控件</h4>
      <pre>
    import {FullScreen ,defaults as defaultControls} from 'ol/control';

    var map=new Map({
      ...
      controls:defaultControls().extend([new FullScreen()]),
      ...
    })    

    额外参数配置请查看：https://openlayers.org/en/latest/apidoc/module-ol_control_FullScreen.html
      </pre>
    </div>
    <div>
      <h4 id="status">鼠标位置控件</h4>
      <pre>
    import MousePosition from 'ol/control/MousePosition'
    //在地图内显示
    let mousePositionControl = new MousePosition({
        undefinedHTML: '经纬度显示',
        projection: 'EPSG:4326',
        coordinateFormat: function (coordinate) {
          return `经度：${coordinate[1]},纬度:${coordinate[0]}`
        }
      })
    var Gmap=new Map({
      ...
      controls:defaultControls().extend([mousePositionControl]),
      ...
    }) 

    //在地图外显示
    let handlePosition = new MousePosition({
        undefinedHTML: '&nbsp;',
        projection: 'EPSG:4326',
        className: 'custom-mouse-position', //控件css类名
        target: document.getElementById('mouse-position'), //将控件渲染到dom元素中
        coordinateFormat: createStringXY(2), //保留小数点后2位
      })
    Gmap.addControl(handlePosition)    
      </pre>
    </div>
    <div>
      <h4 id="overviewmap">鹰眼控件</h4>
      <p>
        openlayers自带的控件，但是我们可以通过两个地图联动的方法设置成一个自定义的视窗地图
      </p>
      <pre>

    import {OverviewMap, defaults as defaultControls} from 'ol/control';

    var source = new OSM();    
    var overviewMapControl = new OverviewMap({
        layers: [
          new TileLayer({
            source: source,
          }) ],
      });  

    /** 额外方法
    import {  DragRotateAndZoom,  defaults as defaultInteractions,} from 'ol/interaction';
      var rotateWithView = document.getElementById('rotateWithView');

    var overviewMapControl = new OverviewMap({
      // see in overviewmap-custom.html to see the custom CSS used
      className: 'ol-overviewmap ol-custom-overviewmap',
      layers: [
        new TileLayer({
          source: new OSM({
            'url':
              'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png' +
              '?apikey=Your API key from http://www.thunderforest.com/docs/apikeys/ here',
          }),
        }) ],
      collapseLabel: '\u00BB',
      label: '\u00AB',
      collapsed: false,
    });

    rotateWithView.addEventListener('change', function () {
      overviewMapControl.setRotateWithView(this.checked);
    });
     */


    var Gmap=new Map({
      ...
      controls:defaultControls().extend([overviewMapControl]),
      // interactions: defaultInteractions().extend([new DragRotateAndZoom()]),// 额外方法
      ...
    })     
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'control',
  components: {
    location: () => import('@/components/location/index')
  },
  data() {
    return {
        list: [
          {  name: '全屏控件', id: 'isAccountNumber'  },
          { name: '鼠标位置控件', id: 'status' },
          { name: '鹰眼控件', id: 'overviewmap' },
        ]
    };
  },
  watch: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
 
</style>