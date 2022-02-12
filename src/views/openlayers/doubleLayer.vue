<template>
  <div class="wrapper">
    <div>
      <p>
        在一些特殊情况下，用户要求只显示用户所在的区域，其他区域覆盖掉。
        虽然网上有些公司直接帮切好图，但是收费还是挺贵的，其实方法上我们还是可以实现的。
        要求我们熟读API(狗屎，API直接是显示底层的方法，看鸡的源码，又不是专业的webGis，个人是不建议的)，
        多看官网示例。有些方法是可以使用的，直接看下面代码：
      </p>
      <pre>
    import 'ol/ol.css';
    import Map from 'ol/Map';
    import View from 'ol/View';
    import TileLayer from 'ol/layer/Tile'; // 图层类型
    import XYZ from 'ol/source/XYZ'; // 瓦片资源
    import VectorLayer from 'ol/layer/Vector'; // 矢量图层资源
    import GeoJSON from 'ol/format/GeoJSON'
    import {  getVectorContext } from 'ol/render'
    import KML from 'ol/format/KML'
    import {Fill,Style,Stroke} from 'ol/style';
    import { OSM,  Stamen, Vector as VectorSource } from 'ol/source';

    //使用另一个画布作为背景需要一个不同的类名
    var background = new TileLayer({
        className: 'stamen',
        source: new Stamen({
            attributions: '© &lt;a href="http://xkcd.com/license.html"&gt;广州惠睿思通&lt;/a&gt;',
            layer: 'toner',
        }),
        opacity:0.4
    });

    var base = new TileLayer({
        source: new XYZ({
            url: 'http://127.0.0.1:5000/allMap/googlemaps/roadmap/{z}/{x}/{y}.png', //开启的地图瓦片服务地址
            maxZoom: 13
        })
    });
    var background2 = new TileLayer({
        source: new XYZ({
            url: 'http://127.0.0.1:5000/allMap/googlemaps/roadmap/{z}/{x}/{y}.png', //开启的地图瓦片服务地址
            maxZoom: 13
        }),
        opacity:0.5
    });

    var clipLayer = new VectorLayer({
        style: null,
        source: new VectorSource({
            // url: './images/switzerland.geojson',
            url: './images/gz.geojson',
            format: new GeoJSON(),
        }),
    });

    //为剪裁层指定范围是必要的，以避免在要素位于视口之外时进行渲染
    clipLayer.getSource().on('addfeature', function () {
        base.setExtent(clipLayer.getSource().getExtent());
    });

    var style = new Style({
        fill: new Fill({
            color: 'black',
        }),
        // stroke: new Stroke({
        //     color:'red'
        // })
    });

    let kmlVector=new VectorLayer({
        source:new VectorSource({
            url:'./images/gz.kml',
            format:new KML({
                extractStyles:false
            })
        }),
        style:new Style({
            stroke:new Stroke({
                width:5,
                color:'#da1f1f'
            })
        })
    })

    base.on('postrender', function (e) {
        var vectorContext = getVectorContext(e);
        e.context.globalCompositeOperation = 'destination-in';
        clipLayer.getSource().forEachFeature(function (feature) {
            vectorContext.drawFeature(feature, style);
        });
        e.context.globalCompositeOperation = 'source-over';
    });   

    var map = new Map({
        // layers: [ background,base,clipLayer,kmlVector],//渲染区域 区域外为background瓦片显示
        layers: [ base,clipLayer,kmlVector], //单独渲染区域 区域外为白色
        target: 'map',
        view: new View({
            center: fromLonLat([113.39, 23.058]),
            zoom: 10,
        }),
    });   
          </pre>
    </div>
    <div id="Gmap"></div>
  </div>
</template>

<script>
  import 'ol/ol.css';
  import Map from 'ol/Map';
  import View from 'ol/View';
  import TileLayer from 'ol/layer/Tile'; // 图层类型
  import XYZ from 'ol/source/XYZ'; // 瓦片资源
  import VectorLayer from 'ol/layer/Vector'; // 矢量图层资源
  import GeoJSON from 'ol/format/GeoJSON';
  import KML from 'ol/format/KML'
  import {
    getVectorContext
  } from 'ol/render';
  import {
    Fill,
    Style,
    Stroke
  } from 'ol/style';
  import {
    OSM,
    Stamen,
    Vector as VectorSource
  } from 'ol/source';
  export default {
    name: 'doubleLayer',
    data() {
      return {};
    },
    mounted() {
      var background = new TileLayer({
        className: 'stamen',
        source: new Stamen({
          attributions: '© <a href="http://xkcd.com/license.html">广州惠睿思通</a>',
          layer: 'toner',
        }),
        opacity: 0.4
      });

      var base = new TileLayer({
        source: new OSM(),
      });

      var clipLayer = new VectorLayer({
        style: null,
        source: new VectorSource({
          url: '/static/gz.geojson',
          format: new GeoJSON(),
        }),
      });

      clipLayer.getSource().on('addfeature', function () {
        base.setExtent(clipLayer.getSource().getExtent());
      });

      var style = new Style({
        fill: new Fill({
          color: 'black',
        }),
        // stroke: new Stroke({
        //     color:'red'
        // })
      });

      let kmlVector = new VectorLayer({
        source: new VectorSource({
          url: '/static/gz.kml',
          format: new KML({
            extractStyles: false
          })
        }),
        style: new Style({
          stroke: new Stroke({
            width: 5,
            color: '#da1f1f'
          })
        })
      })

      base.on('postrender', function (e) {
        var vectorContext = getVectorContext(e);
        e.context.globalCompositeOperation = 'destination-in';
        clipLayer.getSource().forEachFeature(function (feature) {
          vectorContext.drawFeature(feature, style);
        });
        e.context.globalCompositeOperation = 'source-over';
      });

      this.Gmap = new Map({
        target: 'Gmap', // 绑定的html元素
        layers: [base, clipLayer],
        view: new View({
          projection: "EPSG:4326",
          center: [113.41, 23.02], // 视图中心
          extent: [108, 20, 122, 27],
          maxzoom: 10, // 缩放级别
          minzoom: 7,
          zoom: 8
        })
      });
    },
    methods: {}
  };

</script>
<style lang="scss" scoped>
  #Gmap {
    width: 100%;
    height: 300px;
  }

</style>
