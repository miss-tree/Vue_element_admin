<template>
  <div>
    <div>
      <h5 id="Subject">layers</h5>
      <p>
        openlayers的实例是由一个Map构成，方法参数有以下常用：(调用外网，瓦片加载会很卡)
      </p>
      <pre>
    import 'ol/ol.css';//****！！！样式！！！否则加载osm显示错乱***
    import Map from 'ol/Map';
    import View from 'ol/View';
    import TileLayer from 'ol/layer/Tile'; //  图层类型
    import XYZ from 'ol/source/XYZ';  // 瓦片资源
    import VectorLayer from 'ol/layer/Vector'; // 矢量图层
    import { Stroke ,Style} from 'ol/style'; // 加载样式
    import KML from 'ol/format/KML'
    import MousePosition from 'ol/control/MousePosition' //添加鼠标经过坐标
    import { createStringXY } from 'ol/coordinate'
    import {OSM, Vector as VectorSource} from 'ol/source';
    import { default as defaultControls, ScaleLine }from 'ol/control'

    this.Gmap=new Map({
        target: 'map', // 绑定的html元素
            // controls：[],最初添加到地图的控件
            //defaultControls中添加参数取消默认缩放{ attribution: false, zoom: false, rotate: false }
	controls: defaultControls({ attribution: false, zoom: false, rotate: false })
            .extend([
                    new ScaleLine(),//添加控制插件比例尺
                    mousePositionControl,//鼠标经过信息
                ]),
        layers: [    // 图层可以包括多个类型的layer(矢量、)
            new TileLayer({
                source: new XYZ({
                    url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    maxZoom: 13 //瓦片的最大级别
                })
            }),
            new TileLayer({
                source: new OSM(),
            }),
            new VectorLayer({
                source: new VectorSource({
                    url: 'data/geojson/countries.geojson',//矢量网格
                    format: new GeoJSON(),
                }),
                opacity: 0.5,
            })
        ],
        overlays:[   ],// 悬浮物
        maxTilesLoading：16,//同时加载的最大瓷砖数。
        //moveTolerance光标必须移动的最小距离（以像素为单位）才能被检测为贴图移动事件而不是单击。
        //增加此值可以更容易地单击地图。默认为1
        moveTolerance:1,

        //interactions:ol.interaction.defaults().extend([select, modify]),最初添加到地图的交互

        view: new View({
          projection: "EPSG:4326",
          center: [113.41, 23.02], // 视图中心
          extent: [108, 20, 122, 27],//限制范围[经度，纬度，经度，纬度]
          maxzoom: 9 // 缩放级别
          minzoom:6
          zoom:7,
        })
    })
    
    this.Gmap.addControl(new ScaleLine()) //手动添加比例尺  

    let mousePositionControl = new MousePosition({
        undefinedHTML: '经纬度显示',
        projection: 'EPSG:4326',
        coordinateFormat: function (coordinate) {
          return `经度：${coordinate[1]},纬度:${coordinate[0]}`
        }
      })
      this.Gmap.addControl(mousePositionControl)  // 在地图内部显示经纬度
    /**方法二：
      let handlePosition=new MousePosition({
        undefinedHTML: '&nbsp;',
        projection: 'EPSG:4326',
        className:'custom-mouse-position',//控件css类名
        target:document.getElementById('mouse-position') //将控件渲染到dom元素中
        coordinateFormat: createStringXY(4),//保留小数点后4位
      })
      this.Gmap.addControl(handlePosition)  //地图外自定义位置
     */  

    let vector = new VectorLayer({
      source:new VectorSource({
        url:'/static/gz.kml', /**publick下的绝对路径，否则读取不出来，vue2.7以后版本没问题，支持静态资源 */
        format:new KML({
          extractStyle:false
        })
      }),
      style:new Style({
        stroke:new Stroke({
          width:5,
          color:'#e15757'
        })
      })
    }) 

    this.Gmap.addLayer(vector) // 添加边界图层
      </pre>
    </div>
    <div id="Gmap">
      <div id="mouse-position"></div>
    </div>
  </div>
</template>

<script>
  import 'ol/ol.css';
  import Map from 'ol/Map';
  import View from 'ol/View';
  import TileLayer from 'ol/layer/Tile'; // 图层类型
  import XYZ from 'ol/source/XYZ'; // 瓦片资源
  import VectorLayer from 'ol/layer/Vector'; // 矢量图层资源
  import KML from 'ol/format/KML'
  import MousePosition from 'ol/control/MousePosition'
  import {
    createStringXY
  } from 'ol/coordinate'
  import {
    Stroke,
    Style
  } from 'ol/style'; // 加载样式
  import {
    default as defaultControls,
    ScaleLine
  } from 'ol/control'
  import {
    OSM,
    Vector as VectorSource
  } from 'ol/source';
  export default {
    name: "openlayers-layers",
    data() {
      return {
        Gmap: null
      }
    },
    mounted() {
      this.Gmap = new Map({
        target: 'Gmap', // 绑定的html元素
        // controls: defaultControls({
        //     attribution: false,
        //     zoom: false,
        //     rotate: false
        //   })
        //   .extend([
        //     new ScaleLine() //添加控制插件比例尺
        //   ]),
        layers: [ // 图层可以包括多个类型的layer(矢量、)
          new TileLayer({
            source: new OSM(),
          })
        ],
        view: new View({
          projection: "EPSG:4326",
          center: [113.41, 23.02], // 视图中心
          extent: [108, 20, 122, 27],
          maxzoom: 10, // 缩放级别
          minzoom: 7,
          zoom: 8
        })
      });
      this.Gmap.addControl(new ScaleLine())

      let mousePositionControl = new MousePosition({
        undefinedHTML: '经纬度显示',
        projection: 'EPSG:4326',
        coordinateFormat: function (coordinate) {
          return `经度：${coordinate[1]},纬度:${coordinate[0]}`
        }
      })
      this.Gmap.addControl(mousePositionControl)

      let handlePosition = new MousePosition({
        undefinedHTML: '&nbsp;',
        projection: 'EPSG:4326',
        className: 'custom-mouse-position', //控件css类名
        target: document.getElementById('mouse-position'), //将控件渲染到dom元素中
        coordinateFormat: createStringXY(2), //保留小数点后2位
      })
      this.Gmap.addControl(handlePosition)

      let vector = new VectorLayer({
        source: new VectorSource({
          url: '/static/gz.kml',
          format: new KML({
            extractStyle: false
          })
        }),
        style: new Style({
          stroke: new Stroke({
            width: 5,
            color: '#e15757'
          })
        })
      })

      this.Gmap.addLayer(vector)
    }
  }

</script>
<style lang="scss" scoped>
  #Gmap {
    width: 100%;
    height: 300px;
  }

</style>
