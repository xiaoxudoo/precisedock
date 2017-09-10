// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'

// require('./assets/css/common.css')
// register filters globally
var filters = require('./filter')

Object.keys(filters).forEach(function (k) {
  Vue.filter(k, filters[k])
})

Vue.use(VueRouter)
// 注册全局指令,spring Boot不支持webp
import VueWebp from './common/directives/v-webp/index.js'
import VueBdStatistic from './common/directives/v-bd-statistic/index.js'
Vue.use(VueWebp)
Vue.use(VueBdStatistic)

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      name: 'index',
      path: '/',
      component: resolve => require(['./views/index.vue'], resolve),
    },
    {
      name: 'product',
      path: '/product',
      component: resolve => require(['./views/product.vue'], resolve),
      redirect: '/product/virtualscreen',
      children: [
        {
          path: 'virtualscreen',
          component: resolve => require(['./views/product/virtualscreen.vue'], resolve)
        },
        {
          path: 'md',
          component: resolve => require(['./views/product/md.vue'], resolve)
        },
        {
          path: 'dock',
          component: resolve => require(['./views/product/dock.vue'], resolve)
        },
        {
          path: 'pharmacophore',
          component: resolve => require(['./views/product/pharmacophore.vue'], resolve)
        },
        {
          path: 'modeling',
          component: resolve => require(['./views/product/modeling.vue'], resolve)
        },
        {
          path: 'training',
          component: resolve => require(['./views/product/training.vue'], resolve)
        },
        {
          path: 'platform',
          component: resolve => require(['./views/product/platform.vue'], resolve)
        }
      ]
    },
    {
      name: 'custom',
      path: '/custom',
      component: resolve => require(['./views/custom.vue'], resolve),
      redirect: '/custom/cooperation',
      children: [
        {
          path: 'cooperation',
          component: resolve => require(['./views/custom/cooperation.vue'], resolve)
        },
        {
          path: 'case',
          component: resolve => require(['./views/custom/case.vue'], resolve)
        }
      ]
    },
    {
      name: 'news',
      path: '/news',
      component: resolve => require(['./views/news.vue'], resolve)
    },
    {
      name: 'newsdetail',
      path: '/news/:id',
      component: resolve => require(['./views/news/news-detail.vue'], resolve)
    },
    {
      name: 'abouts',
      path: '/abouts',
      component: resolve => require(['./views/abouts.vue'], resolve),
      redirect: '/abouts/company',
      children: [
        {
          path: 'company',
          component: resolve => require(['./views/abouts/company.vue'], resolve)
        },
        {
          path: 'culture',
          component: resolve => require(['./views/abouts/culture.vue'], resolve)
        },
        {
          path: 'join',
          component: resolve => require(['./views/abouts/join.vue'], resolve)
        },
        {
          path: 'contact',
          component: resolve => require(['./views/abouts/contact.vue'], resolve)
        },
        {
          path: 'faq',
          component: resolve => require(['./views/abouts/faq.vue'], resolve)
        }
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0,0)
  next()
})

router.afterEach((to, from, next) => {
  
})

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

