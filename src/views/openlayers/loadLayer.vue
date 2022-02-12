<template>
  <div class="wrapper">
    <location :list='list' />
      <div>
          <h4 id="isAccountNumber">加载ArcGIS切片</h4>
          <p>
              做离线地图就要做好瓦片加载，不同的投影方式生成的瓦片命名都是不一样的。
              <br/>
              ArcGIS切片文件夹和文件名都是以16进制的形式命名的，因此我们通过重写x,y的方式，就是将原来的x,y更改为以16进制表示的形式。
              <br/>
              其中：切片文件夹都是以R开头的，表示row，也就是y；
            　　切片名称都是以C开头的，表示col，也就是x.
          </p>
        <pre>
        var riverLayer = new ol.layer.Tile({
            source: new ol.source.XYZ({
                projection: 'EPSG:4326',
                maxZoom: 17,
                minZoom: 7,
                tileUrlFunction: function(tileCoord){
                    var oo = "00000000";
                    var zz = tileCoord[0];
                    var z = "L" + zz;
                    var xx = tileCoord[1].toString(16);
                    var x = "C" + oo.substring(0, 8 - xx.length) + xx;
                    var yy = (-tileCoord[2] - 1).toString(16); //注意此处，计算方式变了
                    var y = "R" + oo.substring(0, 8 - yy.length) + yy;
                    return 'data/_alllayers/' + z + '/' + y + '/' + x + '.png';
                }
            })

        })

        map.addLayer(riverLayer);
        </pre>  
      </div>
      <div>
          <h4 id="Tile">加载百度地图瓦片</h4>
          <p>
              在中国常用的地图有百度和高德地图，高德地图调用的是谷歌的投影方式，
              所以在调用高德地图瓦片的时候可以直接使用（openlayers使用的谷歌地图投影方式）。
              但是使用百度地图瓦片就不行了，要进行转换了。
              百度在火星坐标系GCJ02的基础上进行的二次加密格式。
          </p>
          <p>
              关于火星坐标系：GPS全球定位系统使用的坐标系统，GPS设备直接返回的坐标即为WGS84。
              全球初神州外，几乎所有地图商都是使用这个坐标系，比如Google地图使用的就是WGS84坐标。
              为了国家安全保密需要，要求全部国内地图测绘单位必须使用这套坐标系统，对GPS的坐标系统进行调整。
              所以会导致使用国内测绘的地理地图数据对不上使用GPS坐标测绘的地图数据，
              甚至是卫星地图对不上的原因。
              地图公司测绘地图，测绘完成后，送到国家测绘局，将真实坐标的电子地图，加密成“火星坐标”，这样的地图才是可以出版和发布的
          </p>
          <pre>
    import {TileImage} from 'ol/source'
    import {TileGrid} from 'ol/tilegrid'
    import proj from 'ol/proj'

    var projection = proj.get("EPSG:3857");
    var resolutions = [];
    for(var i=0; i&lt;19; i++){
        resolutions[i] = Math.pow(2, 18-i);
    }
    var tilegrid  = new TileGrid({
        origin: [0,0],
        resolutions: resolutions
    });

    var baidu_source = new TileImage({
        projection: projection,
        tileGrid: tilegrid,
        tileUrlFunction: function(tileCoord, pixelRatio, proj){
            if(!tileCoord){  return "" }
            var z = tileCoord[0];
            var x = tileCoord[1];
            var y = tileCoord[2];

            if(x&lt;0){ x = "M"+(-x) }
            if(y&lt;0){ y = "M"+(-y) }

            return "http://online3.map.bdimg.com/onlinelabel/?qt=tile&x="+x+"&y="+y+"&z="+z+"&styles=pl&udt=20151021&scaler=1&p=1";
        }
    });

    var baidu_layer = new TileLayer({
        source: baidu_source
    });

    var map = new Map({
        target: 'map',
        layers: [baidu_layer],
        view: new View({
            center:  [12959773,4853101],
            zoom: 12
        })
    });
          
          </pre>
          <a href="https://github.com/openlayers/openlayers/issues/3522" target="_blank" rel="noopener noreferrer">
        详情请查看github方法  
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'loadLayer',
  components: {
      location: () => import('@/components/location/index')
    },
  data() {
    return {
        list: [
          {  name: '加载ArcGIS切片', id: 'isAccountNumber'  },
          { name: '加载百度地图瓦片', id: 'Tile' },
        //   { name: '鹰眼控件', id: 'overviewmap' },
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