import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import MainPage from '@/components/MainPage'
import DetailPage from '@/components/DetailPage'
import InventoryPage from '@/components/InventoryPage'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/detail',
      name: 'DetailPage',
      component: DetailPage
    },
    {
      path: '/inventory',
      name: 'InventoryPage',
      component: InventoryPage
    },
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    }
  ]
})
