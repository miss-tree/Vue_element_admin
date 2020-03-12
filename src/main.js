import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control 路由权限控制------路由守卫
import './utils/error-log' // error log

import * as filters from './filters' // global filters

// import { mockXHR } from '../mock'
// if (process.env.NODE_ENV === 'production') {//在生产环境下要求moke请求XMLHttpRequest
  // mockXHR()
// }

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

//过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
