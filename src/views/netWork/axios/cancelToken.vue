<template>
  <div class="wrapper">
    <location :list='list' />
    <div>
      <h4>关于取消数据请求</h4>
      <p>
        在加载大量数据时是比较消耗服务端性能，尤其是在数据串并的情况下，
        后端需要处理多个数据，查询的时间会很久。这时候我们想重新查询缩小查询范围，
        做到精准查询，加快后端返回数据的速度。但是我们要在前端告诉后台，之前我查询的任务取消了，
        要进行新的任务，释放之前的内存。下面介绍两种常用的方法：
      </p>
    </div>
    <div>
      <h4 id="request">原生取消请求</h4>
      <pre>
    var native = new XMLHttpRequest();
    native.open("GET","https://api.github.com/");
    native.send();
    native.onreadystatechange=function(){
        if(native.readyState==4&&native.status==200){
            console.log(native.response);           
        }else{
            console.log(native.status);
        }
    }
    native.abort();            
        </pre>
    </div>
    <div>
      <h4 id="axios">axios取消</h4>
      <router-link to='axios'>更多操作请查看文档</router-link>
      <pre>
    var CancelToken = axios.CancelToken;

    var source = CancelToken.source();
    axios({
        method:"GET",
        url:"https://api.github.com/",
        cancelToken:source.token     /**关键一步 */
    }).then((res) => {
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    });

    var custom = CancelToken.source();
    axios({
        method:"GET",
        url:"https://api.github.com/",
        cancelToken:custom.token    /**关键一步 */
    }).then((res)=>{
        console.log(res.data);
    }).catch((err)=>{
        console.log(err);
    });

    source.cancel('Operation canceled by the user.');
    custom.cancel('精确取消');      
    </pre>
      <div>
        http.js封装
      </div>
      <pre>
    request.js
    const http = axios.create({
        baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
        timeout: 5000 // request timeout
    })      
    http.CancelToken=axios.CancelToken
    ……
    export default http

    main.js
    Vue.prototype.$http=http

    components
    this.source=this.$http.CancelToken.source()
    this.$http({
        url:url,
        method:'GET/POST',
        cancelToken:this.source.token
    })

    取消事件
    this.source.cancel()
        </pre>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cancelToken',
    components: {
      location: () => import('@/components/location/index')
    },
    data() {
      return {
        list: [{
            name: '原生取消请求',
            id: 'request'
          },
          {
            name: 'axios取消',
            id: 'axios'
          },
          // {name:'line()使用',id:'append'},
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
