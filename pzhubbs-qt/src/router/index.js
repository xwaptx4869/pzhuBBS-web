import Vue from 'vue'
import Router from 'vue-router'
import Navigationbar from '@/components/Navigationbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navigationbar',
      component: Navigationbar
    }
  ]
})
