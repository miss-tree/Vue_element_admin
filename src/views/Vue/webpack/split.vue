<template>
    <div>
        <div>
            <h4>路由懒加载</h4>
            <p>
                vue懒加载在开发环境不适用，只有生产环境才适用。
                因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
            </p>
        </div>
        <div>
            <pre>
        require()
        const Foo = resolve =>{
            require.ensure(['./Foo.vue',() => {
            　　resolve(require('./Foo.vue'))
            }])
        }
        /*******/等价于
        const Foo = resolve => require(['./Foo.vue'], resolve);        

        import()        
        const Foo = () => import('./Foo.vue')
            </pre>
        </div>
        <div>
            <h5>区分开发与生产环境 [该方案已淘汰]</h5>
            <p>这里注意一下该写法只支持 vue-loader at least v13.0.0+</p>
            <div>
                开发环境
            </div>
            <pre>
        module.exports = file => require('@/views/' + file + '.vue').default   
            </pre>
            <div>
                生产环境
            </div>
            <pre>
        module.exports = file => () => import('@/views/' + file + '.vue') 
            </pre>
            在项目路由的写法：
            <pre>
        const _import = require('./import-' + process.env.NODE_ENV)

        component: _import('common/404'),   

        ./import-development.js  
        module.exports = file => require('@/views/' + file + '.vue').default

        ./import-production.js 
        module.exports = file => () => import('@/views/' + file + '.vue')
            </pre>
            <p>这样写会有一些副作用:@/views/下的 .vue 文件都会被打包。不管你是否被依赖。
                所以这样就产生了一个副作用，就是会多打包一些可能永远都用不到 js 代码。
                当然这只会增加 dist 文件的大小，但不会对线上代码产生任何的副作用。</p>
        </div>
        <div>
            <h5>新方案</h5>
            <p>使用babel 的 plugins babel-plugin-dynamic-import-node。
                将所有的import()转化为require()，将所有异步组件都用同步的方式引入，
                并结合 BABEL_ENV 这个babel环境变量， 让它只作用于开发环境下将所有import()转化为require()，
                这种方案解决了重复打包的问题，同时对代码的侵入性也很小.
                当你不想用这个方案的时候，也只要将它从babel 的 plugins中移除就可以了</p>
            <pre>
        首先在package.json中增加BABEL_ENV        
        "dev": "cross-env BABEL_ENV=development webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"    
            
        新建.babelrc 文件引入 babel-plugin-dynamic-import-node这个plugins，并让它只有在development模式中才生效。
        {
            "env": {
                "development": {
                    "plugins": ["dynamic-import-node"]
                }
            }
        }    
            
        路由只要像平时一样写就可以了
        { path: '/login', component: () => import('@/views/login/index')}    
            </pre>    
        </div>
        <div>
            <h5>vue-cli@3方案</h5>
            <pre>
        新建 .env.development 文件        
        ENV = 'development'

        VUE_CLI_BABEL_TRANSPILE_MODULES = true
        
            </pre>
            <p>
                借用了vue-cli它的默认配置，它帮你代码都写好了.
                vue-cli 会通过 VUE_CLI_BABEL_TRANSPILE_MODULES 这个环境变量来区分是否使用 
                babel-plugin-dynamic-import-node，所以我们只要开启它就可以。
                虽然它的初衷是为了单元测试的，但正好满足了我们的需求。
            </p>
        </div>
    </div>
</template>
