import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Goods from '@/page/goods'
import Detail from '@/page/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
  ]
})
