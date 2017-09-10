// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'

// register filters globally
var filters = require('./filter')

Object.keys(filters).forEach(function (k) {
  Vue.filter(k, filters[k])
})

Vue.use(VueRouter)
// 注册全局指令,spring Boot不支持webp
import VueWebp from './common/directives/v-webp/index.js'
Vue.use(VueWebp)

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      name: 'index',
      path: '/',
      component: resolve => require(['./views/index.vue'], resolve)
    },
    {
      name: 'appinfo',
      path: '/appinfo/:appid?',
      meta: {
        requireAuth: true,
        requireVerifyComplete: true        
      },
      component: resolve => require(['./views/appinfo.vue'], resolve)
    },
    {
      name: 'developer',
      path: '/developer',
      meta: {
        requireAuth: true,
        requireVerifyComplete: true      
      },
      component: resolve => require(['./views/developer.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0,0)
  
})

router.afterEach((to, from, next) => {
  
})

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

