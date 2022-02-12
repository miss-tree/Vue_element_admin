<template>
  <div>
    <location :list='list' />
    <div>
      <p>
        通过webpack-bundle-analyze插件可以查看打包时的文件大小，有时有写东西不需要打包的
        也打包了，就需要一些插件帮忙
      </p>
    </div>
    <div>
      <h4 id="isAccountNumber">压缩打包文件</h4>
      <pre>

    npm i compression-webpack-plugin -D 
    cnpm i compression-webpack-plugin -D 
    yarn add compression-webpack-plugin

    module.exports = {
        ...
        chainWebpack:config => {
            config.plugin('compression')
            .use(
            new CompressionWebpackPlugin(
                {
                filename: info => {
                    return `${info.path}.gz${info.query}`
                },
                algorithm: 'gzip',
                threshold: 10240, 
                test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
                minRatio: 0.8, 
                deleteOriginalAssets: true 
                }
            )
            )
        }
    }



    /**删除多余的文件*/
    npm i useless-files-webpack-plugin -D 
    cnpm i useless-files-webpack-plugin -D 
    yarn add useless-files-webpack-plugin
    
    module.exports = {
        ...
        chainWebpack = config => {
            config.plugin('uselessFile')
            .use(
                new UselessFile({
                root: path.resolve(__dirname,'./src/assets/images'), 
                clean:true,
                exclude: /node_modules/
            })
            )
        }
    }
            </pre>
    </div>
    <div>
      <h4 id="status">按需加载</h4>
      <pre>

    /**按需使用echart */      
    // eslint-disable-next-line
    const echarts = equire([
        "line",
        "bar"
    ])
    export default echarts
      


    /**按需加载loadsh */ 
    // Babel.config.js 
    module.exports = {
        ...
        plugins:[
        ...
        'lodash'
        ]
    }
    // webpack配置
    module.exports = {
        ...
        chainWebpack: config =>{
            ...
            config.plugin('loadshReplace')
            .use(new LodashModuleReplacementPlugin())
        }
    }
      </pre>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'boundle',
    components: {
      location: () => import('@/components/location/index')
    },
    data() {
      return {
        list: [{
            name: '压缩打包文件',
            id: 'isAccountNumber'
          },
          {
            name: '按需加载',
            id: 'status'
          },
        ],
      }
    },
    mounted() {
      history.pushState(null, null, document.URL);
      window.addEventListener('popstate', function () {
        console.log('da ');
        history.pushState(null, null, document.URL);
      })
    }
  }

</script>
