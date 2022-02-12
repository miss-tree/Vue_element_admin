<template>
  <div>
    <div>
      <h5 id="knowJsx">认识openLayers</h5>
      <p>
        openLayers是一个开源免费的Web GIS 客户端开发提供的JavaScript 类库包，
        支持在线、离线地图瓦片的加载。但是大多数情况下都是做离线地图，因为在国内
        在线地图基本都是百度、高德的地图的调用，对开发者还是比较友好的。
        但是都是收费的，开发者都是限制访问次数的， 而且在数据保密上不安全，
        这时候就需要开启一个自己公司的地图服务部署GeoServer。因为离线瓦片需要的比较
        大，项目的demo还是以谷歌的OSM格式的地图瓦片为主，投影格式以"EPSG:3857"为准,或者"EPSG:4326"
      </p>
      <p>
        同样Web GIS 客户端开发还有ArcGis、LeafletJS(移动端)
      </p>
    </div>
    <div>
      <h5 id="setup">安装使用</h5>
      <pre>
       npm i ol
      </pre>
    </div>
    <div>
      <h5 id="Subject">示例</h5>
      <div>
        更多请查看国外<a href="https://openlayers.org/" target="_blank">官网</a> ,

      </div>
      <pre>
    import Map from 'ol/Map';
    import View from 'ol/View';
    import TileLayer from 'ol/layer/Tile'; //  图层类型
    import XYZ from 'ol/source/XYZ';  // 瓦片资源

    new Map({
        target: 'map', // 绑定的html元素
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                })
            })
        ],
        view: new View({
            projection: 'EPSG:3857',
            center: [0, 0], // 视图中心
            zoom: 7  // 缩放级别
        })
    });      
      </pre>
      <p>
        从上面的示例可以看出openlayers的api调用都是按需引入的，这样大大减少了文件的大小
      </p>
      <div>
        图层===》控件===》事件点击===》绘画
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "introduce",
    data() {
      return {}
    }
  }

</script>
